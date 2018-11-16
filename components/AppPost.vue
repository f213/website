<template>
  <article class="app-post">
    <h2 class="title is-3">Заголовок</h2>
    <p class="subtitle is-6">Два месяца назад</p>
    <AppContent content="<p>text ор тест</p>"/>
  </article>
</template>
<script>
import AppContent from '~/components/AppContent.vue';

export default {
  components: {
    AppContent,
  },
};
</script>
