<template>
  <AppContent :content="content" />
</template>
<script>
import { mapState } from 'vuex';

import AppContent from '~/components/AppContent.vue';

export default {
  components: {
    AppContent,
  },
  fetch({ store, route }) {
    const { slug } = route.params;
    return store.dispatch('FETCH_PAGE', { slug });
  },
  computed: {
    slug() {
      return this.$route.params.slug;
    },
    ...mapState({
      pageType: state => state.pageType,
      content: state => state.posts.post || state.pages.page,
    }),
  },
};
</script>
