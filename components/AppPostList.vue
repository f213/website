<template>
  <div class="container app-container app-post-list">
    <AppPagination destination="prev" />
    <AppPost class="app-post-list__post" v-for="post in posts" :post="post" :key="post.id" linked :no-index="noIndex" />
    <AppPagination destination="next" />
  </div>
</template>

<script>
import AppPagination from '~/components/AppPagination.vue';
import AppPost from '~/components/AppPost.vue';

export default {
  components: {
    AppPagination,
    AppPost,
  },
  props: {
    posts: { type: Array, required: true },
    noIndex: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.app-post-list {
  &__post {
    margin-bottom: 6rem;
  }
}
</style>
