<template>
  <article class="app-post">
    <h2 class="title is-3 is-marginless">{{ post.title }}</h2>
    <TimeAgo class="app-post__time is-size-7" :date="post.created_at" />
    <AppContent :content="post.html"/>
    <AppTags class="app-post__tags" :tags="post.tags" />
  </article>
</template>
<script>
import AppContent from '~/components/AppContent.vue';
import AppTags from '~/components/AppTags.vue';
import TimeAgo from '~/components/TimeAgo.vue';


export default {
  components: {
    AppContent,
    AppTags,
    TimeAgo,
  },
  props: {
    post: { type: Object, required: true },
  },
};
</script>

<style scoped>
.app-post {
  margin-bottom: 4rem;

  &__time {
    display: block;
    margin-bottom: 1rem;
    opacity: .5;
  }
}
</style>
