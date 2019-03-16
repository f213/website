<template>
  <header class="app-header section" ref="container">
    <div class="container app-container">
      <div class="title is-3">
        <template v-if="isHomePage">{{ title }}</template>
        <nuxt-link class="app-header__title-link" v-else to="/">{{ title }}</nuxt-link>
      </div>
    </div>
  </header>
</template>
<script>
import InViewportMixin from '~/mixins/InViewportMixin.vue';

export default {
  mixins: [InViewportMixin],
  data() {
    return {
      title: 'Федор Борщев',
    };
  },
  computed: {
    isHomePage() {
      return this.$route.path === '/';
    },
  },
};
</script>

<style scoped>
.app-header {
  padding-bottom: 0;

  @media(width <= 768px) {
    margin-bottom: 4rem;
  }

  &__title-link {
    border-bottom: 1px solid rgba(0,0,160,0.15);
    color: var(--text-color);
    &:hover {
        color: var(--link-hover);
        border-color: var(--link-border-hover);
    }

    &:not(:hover) {
      transition: color .5s ease, border-color .5s ease;
    }
  }

  &__subtitle {
    margin-top: -1rem !important;
  }
}
</style>
