<template>
  <nav class="home-page-nav">
    <nuxt-link class="app-nav__link" to="/blog/">
      <span class="app-nav__label">Блог</span>
    </nuxt-link>
    <TgLink
      class="app-nav__link"
      label-class="app-nav__label"
      label="Телеграм"
    />
    <a
      href="https://education.borshev.com"
      class="app-nav__link"
      target="_blank"
    >
      <span class="app-nav__label">Курсы</span>
    </a>
    <FandsLink class="app-nav__link" label-class="app-nav__label" />
  </nav>
</template>
<script>
import FandsLink from '~/components/TheMenu/FandsLink.vue';
import TgLink from '~/components/TgLink.vue';

export default {
  components: {
    FandsLink,
    TgLink,
  },
};
</script>
