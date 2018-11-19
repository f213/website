<template>
  <article class="app-post">
    <h2 class="title is-3">{{ post.title }}</h2>
    <p class="subtitle is-6">{{ post.created_at }}</p>
    <AppContent :content="post.html"/>
  </article>
</template>
<script>
import AppContent from '~/components/AppContent.vue';

export default {
  components: {
    AppContent,
  },
  props: {
    post: { type: Object, required: true },
  },
};
</script>

<style scoped>
.app-post {
  margin-bottom: 4rem;
}
</style>
