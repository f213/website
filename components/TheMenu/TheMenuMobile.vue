<template>
  <nav
    class="navbar"
    :class="{ 'navbar--visible': isScrollingUp || hasNotScrolledYet }"
  >
    <div class="navbar__brand navbar-brand">
      <h1
        class="navbar__title navbar-item title is-3 is-marginless"
        @click="active = !active"
      >
        Фёдор Борщёв
      </h1>

      <a
        role="button"
        class="navbar__burger navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click.prevent="active = !active"
        :class="{ 'is-active': active }"
      >
        &#9776;
      </a>
    </div>
    <div class="navbar-menu" :class="{ 'is-active': active }">
      <div class="navbar-start">
        <nuxt-link
          v-for="(link, index) in _links"
          :key="index"
          :to="link.to"
          class="navbar-item navbar__item"
        >
          {{ link.label }}
        </nuxt-link>
        <SchoolLink class="navbar-item" />
        <FandsLink class="navbar-item" />
        <TgLink with-icon class="navbar-item" />
      </div>
    </div>
  </nav>
</template>
<script>
import throttle from 'lodash.throttle';

import FandsLink from '~/components/TheMenu/FandsLink.vue';
import SchoolLink from '~/components/TheMenu/SchoolLink.vue';
import TgLink from '~/components/TgLink.vue';

export default {
  components: {
    FandsLink,
    SchoolLink,
    TgLink,
  },
  props: {
    links: { type: Array, required: true },
  },
  data() {
    return {
      active: false,
      isScrollingUp: false,
      hasNotScrolledYet: true,
    };
  },
  computed: {
    _links() {
      return [{ to: '/', label: 'Главная' }, ...this.links];
    },
  },
  watch: {
    $route() {
      this.active = false;
      this.hasNotScrolledYet = true;
    },
  },
  beforeMount() {
    let previosScrollPosition = window.scrollY;

    window.addEventListener(
      'scroll',
      throttle(
        () => {
          if (window.scrollY < 100) {
            // no scroll events at the top of the page
            return;
          }

          this.hasNotScrolledYet = false;
          if (previosScrollPosition <= window.scrollY) {
            this.isScrollingUp = false;
            this.active = false;
          } else {
            this.isScrollingUp = true;
          }
          previosScrollPosition = window.scrollY;
        },
        300,
        { leading: true },
      ),
    );
  },
};
</script>

<style scoped>
.navbar {
  left: 0;
  position: fixed;
  right: 0;
  z-index: 30;
  top: -70px;
  transition: top 0.3s ease-out;

  &--visible {
    top: 0px;
  }

  &__burger {
    display: flex;
    align-content: center;
    justify-content: center;
    font-size: 1.5rem;
    padding-top: 0.3rem;
    &:hover {
      background-color: unset;
    }
  }

  &__item {
    &.nuxt-link-exact-active {
      font-weight: 600;
    }
  }

  &__brand {
    padding-left: 1.5rem;
  }

  &__title {
    padding: 0;
  }
}
</style>
