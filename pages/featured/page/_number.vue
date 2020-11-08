<template>
  <AppPostList :posts="posts" />
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
      await store.dispatch('posts/GET_POSTS', { page: number, filter: 'featured:true' });
    } catch (e) {
      error({
        statusCode: 404,
        message: e.message,
      });
    }
  },

  head() {
    const link = getPrevNextLinks(this.metaPrev, this.metaNext);

    const { number } = this.$route.params;
    return {
      title: `Важные заметки — страница ${number}`,
      link,
    };
  },

  computed: {
    ...mapState('posts', {
      posts: (posts) => posts.posts,
    }),
    ...mapState('seo', [
      'metaPrev',
      'metaNext',
    ]),
  },

};
</script>
