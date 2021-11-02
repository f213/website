<template>
  <div class="container is-max-desktop app-slug" v-if="post">
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
    };
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    ...mapState({
      post: (state) => state.posts.post,
      similar: (state) => state.posts.similar,
    }),
  },
  jsonld() {
    if (this.post.page) {
      return null;
    }
    return {
      '@context': 'http://schema.org',
      '@type': 'Article',
      publisher: {
        '@type': 'Organization',
        name: 'Блог Фёдора Борщёва',
        logo: {
          '@type': 'ImageObject',
          url: 'https://borshev.com/favicon.ico',
          width: 32,
          height: 32,
        },
      },
      author: {
        '@type': 'Person',
        name: 'Fedor Borshev',
        image: {
          '@type': 'ImageObject',
          url: '//www.gravatar.com/avatar/5ffb60d95e13e0974bbbe313e04ad719?s=250&d=mm&r=x',
          width: 250,
          height: 250,
        },
        url: 'https://borshev.com/404/',
        sameAs: [],
      },
      headline: this.post.title,
      url: getAbsoluteUrl(this.post),
      datePublished: this.post.created_at,
      dateModified: this.post.updated_at,
      image: {
        '@type': 'ImageObject',
        url: this.post.feature_image,
      },
      keywords: this.post.tags.map((item) => item.name).join(', '),
      description: this.post.excerpt,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://borshev.com/',
      },
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
