<script>
import { _EDIT } from '@shell/config/query-params';
export default {
  props: {
    cluster: {
      type:     Object,
      required: true,
    },
  },

  name: 'ConfigBadge',

  computed: {
    hasBadge() {
      return !!this.cluster?.badge;
    }
  },
  methods: {
    customBadgeDialog() {
      this.$store.dispatch('cluster/promptModal', { component: 'AddCustomBadgeDialog', componentProps: { mode: _EDIT } });
    },
  },
};
</script>

<template>
  <div class="config-badge">
    <div>
      <a
        class="badge-install"
        data-testid="add-custom-cluster-badge"
        @click="customBadgeDialog"
      >
        <i class="icon icon-cluster" />
        <span v-if="hasBadge">{{ t('clusterBadge.editLabel') }}</span>
        <span v-else>{{ t('clusterBadge.addLabel') }}</span>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .badge-install:hover {
    cursor: pointer;
  }
  .badge-install {
    display: flex;
    margin-left: 10px;

    > I {
      line-height: inherit;
      margin-right: 4px;
    }

    &:focus {
      outline: 0;
    }
  }

</style>
