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
  async fetch({ store }) {
    await store.dispatch('posts/GET_POSTS', { filter: 'featured:true' });
  },

  head() {
    const link = getPrevNextLinks(this.metaPrev, this.metaNext);

    return {
      title: 'Избранное',
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
