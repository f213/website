<template>
  <div class="the-menu">
    <client-only>
      <TheMenuDesktop :links="links" v-if="width > 768" />
      <TheMenuMobile :links="links" v-else />

      <TheMenuDesktop :links="links" slot="placeholder" class="is-hidden-mobile" />
    </client-only>
  </div>
</template>
<script>
import TheMenuDesktop from '~/components/TheMenu/TheMenuDesktop.vue';
import TheMenuMobile from '~/components/TheMenu/TheMenuMobile.vue';

export default {
  components: {
    TheMenuDesktop,
    TheMenuMobile,
  },
  data() {
    return {
      width: 1024,
      links: [
        { to: { name: 'featured' }, label: 'Избранное' },
        { to: '/books/', label: 'Книги' },
        { to: '/consulting/', label: 'Консультации' },
      ],
    };
  },
  beforeMount() {
    this.width = this.getWidth();
  },
  mounted() {
    if (process.isClient) {
      window.addEventListener('resize', () => {
        this.width = this.getWidth();
      });
    }
  },
  methods: {
    getWidth() {
      if (process.isServer) {
        return 1024;
      }
      return window.innerWidth;
    },
  },
};
</script>

<style>
.app-nav {
  &__link {
    border-bottom: 0;
    margin-right: 4px;
    line-height: 2.5;

    &:not(:first-child):before {
      content: '·\a0\a0';
      margin-left: 3px;
    }

    &--active {
      pointer-events: none;
      .app-nav__label {
          color: var(--text-color);
          opacity: .8;
          border-bottom: 0;
      }
    }
  }

  &__label {
    border-bottom: 1px solid var(--navigation-border-color);
    color: var(--navigation-color);
    white-space: nowrap;
    line-height: 2rem;

    &:hover {
        color: var(--navigation-hover);
        border-color: var(--navigation-border-hover);
    }
    &:not(:hover) {
      transition: color .5s ease
    }
  }
}
</style>
