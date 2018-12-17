<template>
  <nav class="is-fixed-top navbar" :class="{'navbar--visible': !isOnTop}">
    <div class="navbar-brand">
      <CurrentPost class="navbar-item" />
      <a role="button" class="navbar-burger burger navbar__burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click.prevent="active = ! active" :class="{'is-active': active}">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div class="navbar-menu" :class="{'is-active': active}">
      <div class="navbar-start">
        <nuxt-link v-for="(link, index) in links" :key="index" :to="link.to" class="navbar-item" >{{ link.label }}</nuxt-link>
        <TgLink class="navbar-item" />
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState } from 'vuex';
import CurrentPost from '~/components/TheMenu/CurrentPost.vue';
import TgLink from '~/components/TheMenu/TgLink.vue';

export default {
  components: {
    CurrentPost,
    TgLink,
  },
  props: {
    links: { type: Array, required: true },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: mapState('ui', [
    'isOnTop',
    'currentPost',
  ]),
};
</script>

<style scoped>
.navbar {
  display: none;

  &--visible {
    display: block;
  }


}
</style>
