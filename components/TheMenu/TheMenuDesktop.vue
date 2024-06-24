<template>
  <nav class="section app-nav">
    <div class="container is-max-desktop">
      <nuxt-link to="/" class="app-nav__link">
        <span class="app-nav__label">Обо мне</span>
      </nuxt-link>
      <BlogLink
        class="app-nav__link"
        label-class="app-nav__label"
        active-class="app-nav__link--active-blog"
      />
      <nuxt-link
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        class="app-nav__link"
        active-class="app-nav__link--active"
      >
        <span class="app-nav__label">{{ link.label }}</span>
      </nuxt-link>
      <SchoolLink class="app-nav__link" label-class="app-nav__label" />
      <FandsLink class="app-nav__link" label-class="app-nav__label" />
      <TgLink with-icon class="app-nav__link" label-class="app-nav__label" />
    </div>
  </nav>
</template>
<script>
import BlogLink from '~/components/TheMenu/BlogLink.vue';
import FandsLink from '~/components/TheMenu/FandsLink.vue';
import SchoolLink from '~/components/TheMenu/SchoolLink.vue';
import TgLink from '~/components/TgLink.vue';

export default {
  components: {
    BlogLink,
    FandsLink,
    SchoolLink,
    TgLink,
  },
  props: {
    links: { type: Array, required: true },
  },
};
</script>
<style scoped>
.app-nav {
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  padding: 0;
}
</style>
