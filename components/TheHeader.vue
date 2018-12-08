<template>
  <header class="app-header section">
    <div class="container">
      <div class="title is-2">
        <template v-if="isHomePage">{{ title }}</template>
        <nuxt-link class="app-header__title-link" v-else to="/">{{ title }}</nuxt-link>
      </div>
      <p class="subtitle is-size-6">Кручу гайки. Пишу матом. Настраиваю ин-хаус разработку в стартапах.</p>
    </div>
  </header>
</template>
<script>
export default {
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
}
</style>
