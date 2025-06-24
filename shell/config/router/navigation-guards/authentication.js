import { routeRequiresAuthentication } from '@shell/utils/router';
import {
  isLoggedIn, notLoggedIn, noAuth, findMe, checkIfIsRancherAsOidcProviderLogin
} from '@shell/utils/auth';

const R_OIDC_PROV_PARAMS = 'rancher-as-oidc-prov-params';

function handleOidcRedirectToCallbackUrl() {
  const rancherAsOidcProvider = sessionStorage.getItem(R_OIDC_PROV_PARAMS);

  // eslint-disable-next-line no-console
  console.error('SESSION STORAGE OIDC PARAMS FOUND!!! -redirect ', rancherAsOidcProvider);

  if (rancherAsOidcProvider) {
    window.location.href = `${ window.location.origin }/oidc/authorize${ rancherAsOidcProvider }&code_challenge_method=S256`;
    sessionStorage.removeItem(R_OIDC_PROV_PARAMS);
  }
}

export function install(router, context) {
  router.beforeEach(async(to, from, next) => await authenticate(to, from, next, context));
}

export async function authenticate(to, from, next, { store }) {
  if (!routeRequiresAuthentication(to)) {
    if (to.name === 'auth-login') {
      if (checkIfIsRancherAsOidcProviderLogin(to.query)) {
        // eslint-disable-next-line no-console
        console.error('WE ARE ON OIDC WORLD!!!!', window.location.search);
        // If redirected here from an oidc client persist the values we need to return to it once rancher auth is complete...
        sessionStorage.setItem(R_OIDC_PROV_PARAMS, window.location.search);
      } else if (sessionStorage.getItem(R_OIDC_PROV_PARAMS)) {
        // ... otherwise clear it (to avoid a redirect to it on successful log in)
        sessionStorage.removeItem(R_OIDC_PROV_PARAMS);
      }
    }

    return next();
  }

  if ( store.getters['auth/enabled'] !== false && !store.getters['auth/loggedIn'] ) {
    // `await` so we have one successfully request whilst possibly logged in (ensures fromHeader is populated from `x-api-cattle-auth`)
    await store.dispatch('auth/getUser');

    const v3User = store.getters['auth/v3User'] || {};

    if (v3User?.mustChangePassword) {
      return next({ name: 'auth-setup' });
    }

    // In newer versions the API calls return the auth state instead of having to make a new call all the time.
    const fromHeader = store.getters['auth/fromHeader'];

    if ( fromHeader === 'none' ) {
      noAuth(store);
      handleOidcRedirectToCallbackUrl();
    } else if ( fromHeader === 'true' ) {
      const me = await findMe(store);

      isLoggedIn(store, me);
      handleOidcRedirectToCallbackUrl();
    } else if ( fromHeader === 'false' ) {
      notLoggedIn(store, next, to);

      return;
    } else {
      // Older versions look at principals and see what happens
      try {
        const me = await findMe(store);

        isLoggedIn(store, me);
        handleOidcRedirectToCallbackUrl();
      } catch (e) {
        const status = e?._status;

        if ( status === 404 ) {
          noAuth(store);
        } else {
          if ( status === 401 ) {
            notLoggedIn(store, next, to);
          } else {
            store.commit('setError', { error: e, locationError: new Error('Auth Middleware') });
          }

          return;
        }
      }
    }

    // GC should be notified of route change before any find/get request is made that might be used for that page
    store.dispatch('gcStartIntervals');
  }

  next();
}
