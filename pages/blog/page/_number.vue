<template>
  <AppPostList :posts="posts" no-index />
</template>

<script>
import { mapState } from 'vuex';
import { getPrevNextLinks } from '~/helpers/seo';

import AppPostList from '~/components/AppPostList.vue';

export default {
  components: {
    AppPostList,
  },
  async fetch({ store, params, error }) {
    const { number } = params;
    try {
      await store.dispatch('posts/GET_POSTS', { page: number });
    } catch (error_) {
      error({
        statusCode: 404,
        message: error_.message,
      });
    }
  },

  head() {
    const { number } = this.$route.params;
    const link = getPrevNextLinks(this.metaPrev, this.metaNext);
    return {
      title: `Блог CTO про управление проектами, продуктами и командами — страница ${number}`,
      titleTemplate: '%s',
      link,
    };
  },

  computed: {
    ...mapState('posts', {
      posts: (posts) => posts.posts,
    }),
    ...mapState('seo', ['metaPrev', 'metaNext']),
  },
};
</script>
