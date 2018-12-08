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
  async fetch({ store, params, error }) {
    const { number } = params;
    try {
      await store.dispatch('posts/GET_POSTS', { page: number });
    } catch (e) {
      error({
        statusCode: 404,
        message: e.message,
      });
    }
  },

  computed: mapState('posts', {
    posts: posts => posts.posts,
  }),
  head() {
    const { number } = this.$route.params;
    return {
      title: `Блог CTO про управление проектами, продуктами и командами — страница ${number}`,
      titleTemplate: '%s',
    };
  },

};
</script>
