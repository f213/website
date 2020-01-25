<template>
  <div class="similar-posts" v-if="posts.length">
    <h4 class="title is-5 similar-posts__title">Почитать ещё</h4>
    <ul class="similar-posts__list">
      <li class="similar-posts__item" v-for="post in posts" :key="post.id">
        <nuxt-link class="similar-posts__link" :to="link(post)">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    posts: { type: Array, default: () => [] },
  },
  methods: {
    link(post) {
      return {
        name: 'slug',
        params: {
          slug: post.slug,
        },
      };
    },
  },
};
</script>

<style scoped>
.similar-posts {
  &__title {
    margin-bottom: 0.5rem;
  }

  &__list {
    @media (width > 768px) {
      column-count: 2;
      column-gap: 2rem;
    }
  }

  &__item {
    margin-bottom: 0.6rem;
  }

  &__link {
    border-bottom: 1px solid var(--link-border-color);
    color: var(--link-color);
    --webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:hover {
      color: var(--link-hover);
      border-color: var(--link-border-hover);
    }

    &:not(:hover) {
      transition: color 0.5s ease, border-color 0.5s ease;
    }
  }
}
</style>
