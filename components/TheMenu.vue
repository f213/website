<template>
  <nav class="section app-nav">
    <div class="container app-container">
      <HomePageLink class="app-nav__link is-hidden-mobile" label-class="app-nav__label" active-class="app-nav__link--active" />
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
  data() {
    return {
      links: [
        { to: { name: 'featured' }, label: 'Избранное' },
        { to: '/me/', label: 'Обо мне' },
        { to: '/books/', label: 'Книги' },
      ],
    };
  },
};
</script>

<style>
.app-nav {
  @media (min-width: 1024px) {
    padding-top: 2rem !important;
    padding-bottom: 2rem !important;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 1024px) {
    padding-top: 1.5rem !important;
    padding-bottom: 1rem !important;
    margin-bottom: 1.5rem;
  }

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
