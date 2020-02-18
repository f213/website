<template>
  <div class="tags-page-heading">
    <h1 class="tags-page-heading__title title is-2">Заметки с тегом «{{ tag.name }}»</h1>

    <HtmlComment v-if="noIndex" text="noindex" />

    <div class="tags-page-heading__desc app-content" v-html="tag.description"/>

    <HtmlComment v-if="noIndex" text="/noindex" />
  </div>
</template>

<script>
import HtmlComment from '~/components/HtmlComment.vue';

export default {
  components: {
    HtmlComment,
  },
  props: {
    tag: {
      type: Object,
      default: () => ({ name: '', description: '' }),
    },
    noIndex: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.tags-page-heading {
  margin-bottom: 5rem;

  &__title {
    margin-bottom: .8rem;
    line-height: 1.7;
  }
}
</style>
