<template>
  <article class="app-post">
    <PostTitle class="title is-3 is-size-4-mobile app-post__title" :class="{'is-marginless': withTime}" :post="post" :linked="linked" @viewportEnter="SET_CURRENT_POST(post.title)"/>
    <TimeAgo class="is-size-7 app-post__time" :date="post.published_at" v-if="withTime" />
    <AppContent :content="post.html"/>
    <AppTags class="is-hidden-mobile app-post__tags" :tags="post.tags" />
    <AppShare class="app-post__share" :page="post" @viewportEnter="SET_CURRENT_POST(null)" @viewportExit="exit"/>
  </article>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
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
    withTime: { type: Boolean, default: false },
  },
  computed: mapState('ui', [
    'currentPost',
  ]),
  methods: {
    ...mapMutations('ui', [
      'SET_CURRENT_POST',
      'RESTORE_LAST_CURRENT_POST',
    ]),
    exit() {
      if (this.currentPost === null) {
        this.SET_CURRENT_POST(this.post.title);
      }
    },
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
    line-height: 1.5;
  }


}
</style>
