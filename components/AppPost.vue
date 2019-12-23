<template>
  <article class="app-post">
    <PostTitle class="title is-3 is-size-4-mobile app-post__title" :class="{'is-marginless': isDetailed}" :post="post" :linked="linked"/>
    <TimeAgo class="is-size-7 app-post__time" :date="post.published_at" v-if="isDetailed && post.published_at" />
    <AppContent :content="post.html"/>
    <AppTags class="is-hidden-mobile app-post__tags" :tags="post.tags" />
    <AppShare class="app-post__share" :page="post" />
  </article>
</template>
<script>
import AppContent from '~/components/AppContent.vue';
import AppShare from '~/components/AppShare.vue';
import AppTags from '~/components/AppTags.vue';
import PostTitle from '~/components/PostTitle.vue';
import TimeAgo from '~/components/TimeAgo.vue';

export default {
  components: {
    AppContent,
    AppShare,
    AppTags,
    PostTitle,
    TimeAgo,
  },
  props: {
    post: { type: Object, required: true },
    linked: { type: Boolean, default: false },
    isDetailed: { type: Boolean, default: false },
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

  &__title {
    margin-bottom: .8rem;
    line-height: 1.7;
  }


}
</style>
