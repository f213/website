<template>
  <nav class="section app-nav">
    <div class="container app-container">
      <HomePageLink class="app-nav__link" label-class="app-nav__label" active-class="app-nav__link--active" />
      <nuxt-link v-for="(link, index) in links" :key="index" :to="link.to" class="app-nav__link" active-class="app-nav__link--active">
        <span class="app-nav__label">{{ link.label }}</span>
      </nuxt-link>
      <TgLink class="app-nav__link" label-class="app-nav__label" />
    </div>
  </nav>
</template>
<script>
import HomePageLink from '~/components/TheMenu/HomePageLink.vue';
import TgLink from '~/components/TheMenu/TgLink.vue';

export default {
  components: {
    HomePageLink,
    TgLink,
  },
  props: {
    links: { type: Array, required: true },
  },
};
</script>
<style scoped>
.app-nav {
  padding-top: 2rem !important;
  padding-bottom: 2rem !important;
  margin-bottom: 1.5rem;
}
</style>
