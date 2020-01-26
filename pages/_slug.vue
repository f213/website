<template>
  <div class="container app-container app-slug" v-if="post">
    <template v-if="!post.page">
      <AppPost is-detailed :post="post" />
      <SubscribeBar class="app-slug__subscribe-bar" />
      <SimilarPosts class="app-slug__similar-posts" :posts="similar" />
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
import SubscribeBar from '~/components/SubscribeBar.vue';

export default {
  components: {
    AppPage,
    AppPost,
    SimilarPosts,
    SubscribeBar,
  },
  async fetch({ store, route, error }) {
    const { slug } = route.params;
    /* Fetch the post first, otherwise -- try to fetch the page */
    try {
      await store.dispatch('posts/GET_POST', { slug });
    } catch (_) {
      try {
        await store.dispatch('posts/GET_PAGE', { slug });
      } catch (e) {
        error({
          statusCode: 404,
          message: e.message,
        });
      }
    }
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
        { rel: 'amphtml', href: `${process.env.absoluteHost}/amp/${this.post.slug}/` },
        { rel: 'canonical', href: getAbsoluteUrl(this.post) },
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ilyabirman-likely/2.4.0/likely.js' },
      ],
    };
  },
  jsonld() {
    if (this.post.page) {
      return null;
    }
    return {
      '@context': 'http://schema.org',
      '@type': 'Article',
    };
  },
};
</script>
<style scoped>
.app-slug {
  &__subscribe-bar {
    margin-top: 4rem;
  }

  &__similar-posts {
    margin-top: 4rem;
  }
}
</style>
