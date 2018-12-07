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
  async fetch({ store }) {
    await store.dispatch('posts/GET_POSTS', { filter: 'featured:true' });
  },

  computed: mapState('posts', {
    posts: posts => posts.posts,
  }),

};
</script>
