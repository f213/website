<template>
  <nav class="app-nav section">
    <div class="container">
      <nuxt-link to="/" active-class="ignored" class="app-nav__link" :class="homePageClass">
        <span class="app-nav__label">Блог</span>
      </nuxt-link>
      <nuxt-link :to="{ name: 'featured' }" class="app-nav__link" active-class="app-nav__link--active">
        <span class="app-nav__label">Избранное</span>
      </nuxt-link>
      <nuxt-link to="/me/" class="app-nav__link" active-class="app-nav__link--active">
        <span class="app-nav__label">Обо мне</span>
      </nuxt-link>
      <nuxt-link to="/books/" class="app-nav__link" active-class="app-nav__link--active">
        <span class="app-nav__label">Книги</span>
      </nuxt-link>
      <a class="app-nav__link" href="tg://resolve?domain=pmdaily">
        <span class="app-nav__label">
          <i class="fa fa-telegram" />
          Подписаться на телеграм
        </span>
      </a>
    </div>
  </nav>
</template>
<script>
import { mapState } from 'vuex';

export default {
  computed: {
    isAtBlogPage() {
      const { name } = this.$route;
      if (['index', 'page-number', 'tags-slug', 'tags-slug-page-number'].includes(name)) {
        return true;
      }

      if (![null, undefined, {}].includes(this.post) && 'id' in this.post && !this.post.page) {
        return true;
      }

      return false;
    },
    homePageClass() {
      return this.isAtBlogPage ? 'app-nav__link--active' : '';
    },
    ...mapState({
      post: state => state.posts.post,
    }),
  },
};
</script>

<style scoped>
.app-nav {
  padding-top: 1.5rem;
  margin-bottom: 2rem;

  &__link {
    border-bottom: 0;
    margin-right: 4px;

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
