<template>
  <nav class="section app-nav">
    <div class="container app-container">
      <nuxt-link to="/" class="app-nav__link">
        <span class="app-nav__label">Главная</span>
      </nuxt-link>
      <BlogLink class="app-nav__link" label-class="app-nav__label" active-class="app-nav__link--active" />
      <nuxt-link v-for="(link, index) in links" :key="index" :to="link.to" class="app-nav__link" active-class="app-nav__link--active">
        <span class="app-nav__label">{{ link.label }}</span>
      </nuxt-link>
      <TgLink with-icon class="app-nav__link" label-class="app-nav__label" />
    </div>
  </nav>
</template>
<script>
import BlogLink from '~/components/TheMenu/BlogLink.vue';
import TgLink from '~/components/TgLink.vue';

export default {
  components: {
    BlogLink,
    TgLink,
  },
  props: {
    links: { type: Array, required: true },
  },
};
</script>
<style scoped>
.app-nav {
  padding-top: .5rem !important;
  padding-bottom: 2rem !important;
  margin-bottom: 1.5rem;
}
</style>
