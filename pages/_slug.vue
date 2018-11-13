<template>
  <h1>Post: {{ slug }}, type: {{ pageType }} <Logo /></h1>
</template>
<script>
import { mapState } from 'vuex';

import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo,
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
    }),
  },
};
</script>
