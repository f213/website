<template>
  <div class="container app-container" v-if="post">
    <template v-if="!post.page">
      <AppPost with-time :post="post" />
      <SimilarPosts :posts="similar" />
    </template>
    <AppPage :page="post" v-else />
  </div>
</template>
<script>
import { mapState } from 'vuex';

import { getMeta, getOpenGraph, getAbsoluteUrl } from '~/helpers/seo';

import AppPage from '~/components/AppPage.vue';
import AppPost from '~/components/AppPost.vue';
import SimilarPosts from '~/components/SimilarPosts.vue';

export default {
  components: {
    AppPage,
    AppPost,
    SimilarPosts,
  },
  async fetch({ store, route }) {
    const { slug } = route.params;
    const post = await store.dispatch('posts/GET_POST', { slug });
    return post;
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    ...mapState({
      post: state => state.posts.post,
      similar: state => state.posts.similar,
    }),
  },
  head() {
    if ([null, undefined].includes(this.post)) {
      return {};
    }
    const meta = getMeta(this.post).concat(getOpenGraph(this.post));
    return {
      title: this.post.meta_title || this.post.title,
      meta,
      link: [
        { rel: 'amphtml', href: `https://mercury.postlight.com/amp?url=${getAbsoluteUrl(this.post)}` },
      ],
    };
  },
};
</script>
