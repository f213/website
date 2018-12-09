<template>
  <footer class="app-footer section">
    <div class="container app-container is-size-6">
      <span>©</span>
      <a class="app-footer__email" :href="email">Федор Борщев</a>
      <span>{{ years }}</span>
      <TheFooterPoop />
    </div>
  </footer>
</template>

<script>
import TheFooterPoop from '~/components/TheFooterPoop.vue';

export default {
  components: {
    TheFooterPoop,
  },
  data() {
    return {
      years: process.env.copyrightYears,
      email: `mailto:${process.env.email}`,
    };
  },
};
</script>

<style scoped>
.app-footer {
  &__email {
    color: #70a0b0;
    border-bottom: 1px solid rgba(85, 102, 119, .4);

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
