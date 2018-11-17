<template>
  <section class="section">
    <div class="container">
      <AppPost v-for="post in posts" :post="post" :key="post.id" />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';

import AppPost from '~/components/AppPost.vue';

export default {
  components: {
    AppPost,
  },
  async fetch({ store }) {
    await store.dispatch('posts/GET_POSTS');
  },

  computed: mapState('posts', {
    posts: posts => posts.posts,
  }),

};
</script>
