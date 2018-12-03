<template>
  <div class="container">
    <AppPagination destination="prev" />
    <AppPost v-for="post in posts" :post="post" :key="post.id" />
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
  },
};
</script>
