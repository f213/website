<template>
  <div class="container app-container app-post-list">
    <AppPagination destination="prev" />
    <TagsPageHeading v-if="isTagsPage" :tag="tag" />
    <AppPost class="app-post-list__post" v-for="post in posts" :post="post" :key="post.id" linked :no-index="noIndex" />
    <AppPagination destination="next" />
  </div>
</template>

<script>
import AppPagination from '~/components/AppPagination.vue';
import AppPost from '~/components/AppPost.vue';
import TagsPageHeading from '~/components/TagsPageHeading.vue';

export default {
  components: {
    AppPagination,
    AppPost,
    TagsPageHeading,
  },
  props: {
    posts: { type: Array, required: true },
    tag: { type: Object, default: () => ({ name: '', description: '' }) },
    noIndex: { type: Boolean, default: false },
  },
  computed: {
    isTagsPage() {
      return this.tag.name.length > 0;
    },
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
