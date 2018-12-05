<template>
  <div class="app-tags" v-if="tags.length">
    <nuxt-link class="app-tags__tag" v-for="tag in tags" :key="tag.id" :to="link(tag)">{{ tag.name }}</nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    tags: { type: Array, default: () => [] },
  },
  methods: {
    link(tag) {
      return {
        name: 'tags-slug',
        params: {
          slug: tag.slug,
        },
      };
    },
  },
};
</script>
<style scoped>
.app-tags {
  margin-top: 1.5rem;
  &__tag {
    margin-right: .5rem;
    text-decoration: none;
    border-bottom: 1px solid var(--link-border-color);
    color: var(--link-color);
    --webkit-tap-highlight-color: rgba( 0, 0, 0, 0 );

    &:hover {
        color: var(--link-hover);
        border-color: var(--link-border-hover);
    }

    &:not(:hover) {
      transition: color .5s ease, border-color .5s ease;
    }
  }
}
</style>
