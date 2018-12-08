<template>
  <div class="container" v-if="!post.page">
    <AppPost :post="post" />
    <SimilarPosts :posts="similar" />
  </div>
  <div class="container" v-else>
    <AppPage :page="post" />
  </div>
</template>
<script>
import { mapState } from 'vuex';

import { getMeta } from '~/helpers/seo';

import AppPage from '~/components/AppPage.vue';
import AppPost from '~/components/AppPost.vue';
import SimilarPosts from '~/components/SimilarPosts.vue';

export default {
  components: {
    AppPage,
    AppPost,
    SimilarPosts,
  },
  fetch({ store, route }) {
    const { slug } = route.params;
    return store.dispatch('posts/GET_POST', { slug });
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
  mounted() {
    console.log(this.$route);
  },
  head() {
    const meta = getMeta(this.post);
    return {
      title: this.post.meta_title,
      meta,
    };
  },
};
</script>
