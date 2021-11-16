<template>
  <nuxt-link to="/blog/" active-class="ignored" :class="_activeClass">
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
      if (name && name.startsWith('featured')) {
        // disable highlight at the home page
        return false;
      }

      if (
        [
          'blog',
          'blog-page-number',
          'tags-slug',
          'tags-slug-page-number',
        ].includes(name)
      ) {
        return true;
      }

      if (this.post && 'id' in this.post && !this.post.page) {
        return true;
      }

      return false;
    },
    _activeClass() {
      return this.isAtBlogPage ? this.activeClass : '';
    },
    ...mapState({
      post: (state) => state.posts.post,
    }),
  },
};
</script>
