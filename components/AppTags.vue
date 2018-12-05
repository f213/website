<template>
  <div class="app-tags" v-if="tags.length">
    <nuxt-link v-for="tag in tags" :key="tag.id" :to="link(tag)">{{ tag.name }}</nuxt-link>
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
