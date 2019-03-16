<template>
  <nav class="is-fixed-top navbar" :class="{'navbar--visible': !isOnTop || menuHasBeenUsedOnce}">
    <div class="navbar-brand">
      <CurrentPost class="navbar-item" />
      <a role="button" class="navbar-burger navbar__burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" @click.prevent="active = ! active" :class="{'is-active': active}">
        &#9776;
      </a>
    </div>
    <div class="navbar-menu" :class="{'is-active': active}">
      <div class="navbar-start">
        <nuxt-link v-for="(link, index) in _links" :key="index" :to="link.to" class="navbar-item navbar__item" @click.native="MARK_MENU_AS_USED">{{ link.label }}</nuxt-link>
        <TgLink with-icon class="navbar-item" />
      </div>
    </div>
  </nav>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import CurrentPost from '~/components/TheMenu/CurrentPost.vue';
import TgLink from '~/components/TgLink.vue';

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
  computed: {
    ...mapState('ui', [
      'isOnTop',
      'currentPost',
      'menuHasBeenUsedOnce',
    ]),
    _links() {
      return [{ to: '/', label: 'Главная' }].concat(this.links);
    },
  },
  watch: {
    $route() {
      this.active = false;
    },
  },
  methods: mapMutations('ui', [
    'MARK_MENU_AS_USED',
  ]),
};
</script>

<style scoped>
.navbar {
  display: none;

  &--visible {
    display: block;
  }

  &__burger {
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 1.5rem;
    padding-top: .3rem;
  }

  &__item {
    &.nuxt-link-exact-active {
      font-weight: 600;
    }
  }

}
</style>
