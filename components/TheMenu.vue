<template>
  <nav class="app-nav section">
    <div class="container">
      <nuxt-link to="/" active-class="ignored" class="app-nav__link" :class="homePageActive">
        <span class="app-nav__label">Блог</span>
      </nuxt-link>
      <nuxt-link :to="{ name: 'featured' }" class="app-nav__link" active-class="app-nav__link--active">
        <span class="app-nav__label">Избранное</span>
      </nuxt-link>
      <nuxt-link to="/me" class="app-nav__link" active-class="app-nav__link--active">
        <span class="app-nav__label">Обо мне</span>
      </nuxt-link>
      <nuxt-link to="/books" class="app-nav__link" active-class="app-nav__link--active">
        <span class="app-nav__label">Книги</span>
      </nuxt-link>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    homePageActive() {
      const { name } = this.$route;
      return ['index', 'page-number'].includes(name) ? 'app-nav__link--active' : '';
    },
  },
};
</script>

<style scoped>
.app-nav {
  padding-top: 1.5rem;

  &__link {
    border-bottom: 0;
    margin-right: 4px;
    &:not(:first-child):before {
      content: '·\a0\a0';
      margin-left: 3px;
    }

    &--active
    {
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
