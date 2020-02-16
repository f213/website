<template>
  <div class="tags-page-heading">
    <h1 class="tags-page-heading__title title is-2">Заметки с тегом "{{ tag.name }}"</h1>
    <div class="tags-page-heading__desc app-content" v-html="tag.description"/>
  </div>
</template>

<script>

export default {
  props: {
    tag: {
      type: Object,
      default: () => ({ name: '', description: '' }),
    },
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
