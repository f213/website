<template>
  <div class="home-page-header">
    <h1 class="title is-size-1-desktop home-page-header__title">
      Фёдор Борщёв
    </h1>
    <HomePageMenu class="home-page-header__menu" />
  </div>
</template>
<script>
import HomePageMenu from '~/components/HomePage/HomePageMenu.vue';

export default {
  components: {
    HomePageMenu,
  },
};
</script>

<style scoped>
.home-page-header {
  &__title {
    position: relative;
    left: -0.25rem;
    margin-bottom: 0;
  }
  &__menu {
    margin-top: 0.5rem;
  }
}
</style>
