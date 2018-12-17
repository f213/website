<template>
  <component :is="tag" ref="container">
    <nuxt-link class="post-title" :to="link" v-if="linked">{{ title }}</nuxt-link>
    <template v-else>{{ title }}</template>
  </component>
</template>

<script>
import InViewportMixin from '~/mixins/InViewportMixin.vue';

export default {
  mixins: [InViewportMixin],
  props: {
    linked: { type: Boolean, default: false },
    post: { type: Object, required: true },
  },
  computed: {
    tag() {
      return this.linked ? 'h2' : 'h1';
    },
    title() {
      return this.post.title;
    },
    link() {
      const { slug } = this.post;
      return {
        name: 'slug',
        params: { slug },
      };
    },
  },
};
</script>

<style scoped>
.post-title {
  border-bottom: 1px solid rgba(0,0,160,0.15);
  color: var(--text-color);
  &:hover {
      color: var(--link-hover);
      border-color: var(--link-border-hover);
  }

  &:not(:hover) {
    transition: color .5s ease, border-color .5s ease;
  }
}
</style>
