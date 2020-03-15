<template>
  <div>
    <TagsPageHeading :tag="tag" />
    <AppPostList :posts="posts" :tag="tag" no-index />
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
  async fetch({ store, route, error }) {
    const { slug } = route.params;
    try {
      await store.dispatch('tags/GET_TAG', { slug });
    } catch (e) {
      error({
        statusCode: 404,
        message: e.message,
      });
    }

    try {
      await store.dispatch('posts/GET_POSTS', { filter: `tag:${slug}` });
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
    return {
      title: `Заметки с тегом «${this.tag.name}»`,
      meta,
      link,
    };
  },

};
</script>
