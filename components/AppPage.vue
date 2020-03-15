<template>
  <article class="app-page">
    <h1 class="title is-3 is-size-4-mobile">
      {{ page.title }}
    </h1>
    <AppContent :content="page.html" />
  </article>
</template>
<script>
import AppContent from '~/components/AppContent.vue';

export default {
  components: {
    AppContent,
  },
  props: {
    page: { type: Object, required: true },
  },
};
</script>
