<template>
  <article class="app-post">
    <PostTitle
      class="title is-3 is-size-4-mobile app-post__title"
      :class="{ 'app-post__title--detailed': isDetailed }"
      :post="post"
      :linked="linked"
    />

    <HtmlComment v-if="noIndex" text="noindex" />

    <TimeAgo
      class="is-size-7 app-post__time"
      :date="post.published_at"
      v-if="isDetailed && post.published_at"
    />
    <AppContent :content="post.html" />
    <AppTags class="is-hidden-mobile app-post__tags" :tags="post.tags" />

    <HtmlComment v-if="noIndex" text="/noindex" />
  </article>
</template>
<script>
import AppContent from '~/components/AppContent.vue';
import AppTags from '~/components/AppTags.vue';
import HtmlComment from '~/components/HtmlComment.vue';
import PostTitle from '~/components/PostTitle.vue';
import TimeAgo from '~/components/TimeAgo.vue';

export default {
  components: {
    AppContent,
    AppTags,
    HtmlComment,
    PostTitle,
    TimeAgo,
  },
  props: {
    post: { type: Object, required: true },
    linked: { type: Boolean, default: false },
    isDetailed: { type: Boolean, default: false },
    noIndex: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.app-post {
  max-width: 100%;
  overflow: scroll;

  &__time {
    display: block;
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  &__title {
    margin-bottom: 0.8rem;
    line-height: 1.7;

    &--detailed {
      margin: 0;
    }
  }
}
</style>
