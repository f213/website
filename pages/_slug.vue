<template>
  <AppContent :content="post.html" />
</template>
<script>
import { mapState } from 'vuex';

import AppContent from '~/components/AppContent.vue';

export default {
  components: {
    AppContent,
  },
  fetch({ store, route }) {
    const { slug } = route.params;
    return store.dispatch('posts/GET_POST', { slug });
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    ...mapState({
      post: state => state.posts.post,
    }),
  },
};
</script>
