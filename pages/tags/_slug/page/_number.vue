<template>
  <div>
    <TagsPageHeading :tag="tag" no-index />
    <AppPostList :posts="posts" no-index />
  </div>
</template>

<script>
import { mapState } from 'vuex';

import { getMeta, getPrevNextLinks } from '~/helpers/seo';

import TagsPageHeading from '~/components/TagsPageHeading.vue';
import AppPostList from '~/components/AppPostList.vue';

export default {
  components: {
    AppPostList,
    TagsPageHeading,
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

  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
      tag: (state) => state.tags.tag,
    }),
    ...mapState('seo', [
      'metaPrev',
      'metaNext',
    ]),
  },

  head() {
    const meta = getMeta(this.tag);
    const link = getPrevNextLinks(this.metaPrev, this.metaNext);
    const { number } = this.$route.params;

    return {
      title: `Заметки с тегом «${this.tag.name}» — страница ${number}`,
      meta,
      link,
    };
  },

};
</script>
