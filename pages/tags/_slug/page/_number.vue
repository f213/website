<template>
  <AppPostList :posts="posts" />
</template>

<script>
import { mapState } from 'vuex';

import { getMeta } from '~/helpers/seo';

import AppPostList from '~/components/AppPostList.vue';

export default {
  components: {
    AppPostList,
  },
  async fetch({ store, params, error }) {
    const { number, slug } = params;
    try {
      await store.dispatch('tags/GET_TAG', { slug });
    } catch (e) {
      error({
        statusCode: 404,
        message: e.message,
      });
    }

    try {
      await store.dispatch('posts/GET_POSTS', { page: number, filter: `tag:${slug}` });
    } catch (e) {
      error({
        statusCode: 404,
        message: e.message,
      });
    }
  },

  computed: mapState({
    posts: state => state.posts.posts,
    tag: state => state.tags.tag,
  }),

  head() {
    const meta = getMeta(this.tag);
    const { number } = this.$route.params;

    return {
      title: `Заметки с тегом «${this.tag.name}» — страница ${number}`,
      meta,
    };
  },

};
</script>
