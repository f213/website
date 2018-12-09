<template>
  <nuxt-link to="/" active-class="ignored" :class="_activeClass">
    <span :class="labelClass">Блог</span>
  </nuxt-link>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    labelClass: { type: String, default: () => '' },
    activeClass: { type: String, required: true },
  },
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
    _activeClass() {
      return this.isAtBlogPage ? this.activeClass : '';
    },
    ...mapState({
      post: state => state.posts.post,
    }),
  },
};
</script>
