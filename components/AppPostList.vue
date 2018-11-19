<template>
  <div class="container">
    <AppPost v-for="post in posts" :post="post" :key="post.id" />
  </div>
</template>

<script>
import AppPost from '~/components/AppPost.vue';

export default {
  components: {
    AppPost,
  },
  props: {
    posts: { type: Array, required: true },
  },
};
</script>
