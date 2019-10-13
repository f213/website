<template>
  <div class="container app-container" v-if="post">
    <AppPost is-detailed :post="post" />
  </div>
</template>
<script>
import { mapState } from 'vuex';

import AppPost from '~/components/AppPost.vue';

export default {
  components: {
    AppPost,
  },
  async fetch({ store, route, error }) {
    if (!process.server) {
      error({
        status: 500,
        message: 'Sorry, preview works on SSR only',
      });
    }

    const { uuid } = route.params;

    try {
      await store.dispatch('preview/GET_POST', { uuid });
    } catch (e) {
      error({
        statusCode: 404,
        message: e.message,
      });
    }
  },
  computed: {
    ...mapState({
      post: state => state.preview.post,
    }),
  },
  head() {
    return {
      title: this.post.meta_title || this.post.title,
      meta: [{
        name: 'robots',
        content: 'noindex,nofollow',
      }],
    };
  },
};
</script>
