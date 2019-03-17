<template>
  <header class="app-header section" ref="container">
    <div class="container app-container">
      <div class="title is-3">{{ title }}</div>
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
}
</style>
