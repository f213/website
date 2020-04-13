<template>
  <nav class="home-page-nav">
    <nuxt-link class="app-nav__link" to="/blog/">
      <span class="app-nav__label">Блог</span>
    </nuxt-link>
    <TgLink class="app-nav__link" label-class="app-nav__label" label="Телеграм" />
    <a href="https://education.borshev.com" class="app-nav__link" target="_blank">
      <span class="app-nav__label">Курсы</span>
    </a>
    <nuxt-link to="/consulting/" class="app-nav__link">
      <span class="app-nav__label">Консультации</span>
    </nuxt-link>
  </nav>
</template>
<script>
import TgLink from '~/components/TgLink.vue';

export default {
  components: {
    TgLink,
  },
};
</script>
