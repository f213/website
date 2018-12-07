<template>
  <AppPostList :posts="posts" />
</template>

<script>
import { mapState } from 'vuex';

import AppPostList from '~/components/AppPostList.vue';

export default {
  components: {
    AppPostList,
  },
  async fetch({ store, route }) {
    const { slug } = route.params;
    await store.dispatch('posts/GET_POSTS', { filter: `tag:${slug}` });
  },

  computed: mapState('posts', {
    posts: posts => posts.posts,
  }),

};
</script>
