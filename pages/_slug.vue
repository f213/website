<template>
  <section class="section">
    <div class="container">
      <AppPost :post="post" />
      <SimilarPosts :posts="similar" />
    </div>
  </section>
</template>
<script>
import { mapState } from 'vuex';

import AppPost from '~/components/AppPost.vue';
import SimilarPosts from '~/components/SimilarPosts.vue';

export default {
  components: {
    AppPost,
    SimilarPosts,
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
      similar: state => state.posts.similar,
    }),
  },
};
</script>
