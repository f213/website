<template>
  <footer class="app-footer">
    <div class="is-size-6" :class="textClass">
      <span>©</span>
      <a class="app-footer__email" :href="email">Фёдор Борщёв</a>
      <span>{{ years }}</span>
      <TheFooterPoop class="app-footer__poop" />
    </div>
  </footer>
</template>

<script>
import TheFooterPoop from '~/components/TheFooterPoop.vue';

export default {
  components: {
    TheFooterPoop,
  },
  props: {
    textClass: { type: String, default: '' },
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
  &__poop {
    position: relative;
    left: -0.2rem;
  }

  &__email {
    color: #70a0b0;
    border-bottom: 1px solid rgba(85, 102, 119, 0.4);

    &:hover {
      color: var(--link-hover);
      border-color: var(--link-border-hover);
    }

    &:not(:hover) {
      transition: color 0.5s ease, border-color 0.5s ease;
    }
  }
}
</style>
