<template>
  <header class="app-header section" ref="container">
    <div class="container app-container">
      <div class="title is-3">{{ title }}</div>
    </div>
  </header>
</template>
<script>

export default {
  data() {
    return {
      title: 'Фёдор Борщёв',
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
  display: none;

  @media(width >= 768px) {
    display: block;
  }
}
</style>
