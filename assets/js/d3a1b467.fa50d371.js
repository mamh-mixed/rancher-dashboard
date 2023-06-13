"use strict";(self.webpackChunkrancher_ui_devkit=self.webpackChunkrancher_ui_devkit||[]).push([[6020],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Advanced",s={unversionedId:"extensions/usecases/node-driver/advanced",id:"extensions/usecases/node-driver/advanced",title:"Advanced",description:"Machine Template Model",source:"@site/docs/extensions/usecases/node-driver/advanced.md",sourceDirName:"extensions/usecases/node-driver",slug:"/extensions/usecases/node-driver/advanced",permalink:"/dashboard/extensions/usecases/node-driver/advanced",draft:!1,tags:[],version:"current",lastUpdatedAt:1686678917,formattedLastUpdatedAt:"Jun 13, 2023",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Machine Config",permalink:"/dashboard/extensions/usecases/node-driver/machine-config"},next:{title:"Making API Calls",permalink:"/dashboard/extensions/usecases/node-driver/proxying"}},l={},c=[{value:"Machine Template Model",id:"machine-template-model",level:2},{value:"Using a Custom Store",id:"using-a-custom-store",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced"},"Advanced"),(0,a.kt)("h2",{id:"machine-template-model"},"Machine Template Model"),(0,a.kt)("p",null,"Each cluster has one or more Machine Templates, which specify to create a particular number of machines using a specified Machine Config + Cloud Credential.  Basic information about the template is shown later on detail screens, such as the machine size and location.  This is done by providing a model class for your driver's template and overriding methods."),(0,a.kt)("p",null,"Your model should be called ",(0,a.kt)("inlineCode",{parentName:"p"},"models/rke-machine.cattle.io.[your driver in lowercase]template.js")," (corresponding to the schema that shows up once the driver is installed).  It should extend the generic MachineTemplate and override methods as appropriate:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"import MachineTemplate from '@shell/models/rke-machine.cattle.io.machinetemplate';\n\nexport default class MyDriverMachineTemplate extends MachineTemplate {\n  get provider() {\n    return 'mydriver';\n  }\n\n  get providerLocation() {\n    return this.spec.template.spec.zone;\n  }\n\n  get providerSize() {\n    return this.spec.template.spec.instanceType;\n  }\n}\n")),(0,a.kt)("h2",{id:"using-a-custom-store"},"Using a Custom Store"),(0,a.kt)("p",null,"If you have several different API calls to make or expensive information that can be cached after it's retrieved once, consider making a ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," with getters and actions to handle making your API calls and managing the caching.  Most of the standard built-in drivers have these."),(0,a.kt)("p",null,"For more complicated providers (e.g. AWS) you can also consider importing their Javascript SDK and using their client to make calls.  But unless there is an extension point to manipulate the request before they send it, you'll probably have to monkey patch their client to get the ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Api-CattleAuth-Header")," injected and the request sent through the proxy instead of direct to them.  The SDK should also be dynamically ",(0,a.kt)("inlineCode",{parentName:"p"},"import('\u2026')"),"ed as needed at runtime so it's not loaded all the time.  Regular ",(0,a.kt)("inlineCode",{parentName:"p"},"import \u2026 as \u2026;")," at the top of the file will become part of the basic app bundle js that's always loaded and has to be downloaded before the page can render.  ",(0,a.kt)("inlineCode",{parentName:"p"},"store/aws.js")," has examples of all of this."))}p.isMDXComponent=!0}}]);