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
    <SchoolLink class="app-nav__link" label-class="app-nav__label" />
    <FandsLink class="app-nav__link" label-class="app-nav__label" />
  </nav>
</template>
<script>
import FandsLink from '~/components/TheMenu/FandsLink.vue';
import SchoolLink from '~/components/TheMenu/SchoolLink.vue';
import TgLink from '~/components/TgLink.vue';

export default {
  components: {
    FandsLink,
    SchoolLink,
    TgLink,
  },
};
</script>
