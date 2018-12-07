<template>
  <article class="app-page">
    <AppContent :content="page.html"/>
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
