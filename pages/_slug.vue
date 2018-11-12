<template>
  <h1>Post: {{ slug }}, type: {{ pageType }}</h1>
</template>
<script>
import { mapState } from 'vuex'

export default {
  fetch({ store, route }) {
    const { slug } = route.params
    return store.dispatch('FETCH_PAGE', { slug })
  },
  computed: {
    slug() {
      return this.$route.params.slug
    },
    ...mapState({
      pageType: state => state.pageType
    })
  }
}
</script>
