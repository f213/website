<template>
  <article class="app-post">
    <h2 class="title is-3">{{ post.title.rendered }}</h2>
    <p class="subtitle is-6">{{ post.date }}</p>
    <AppContent :content="post.content.rendered"/>
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
