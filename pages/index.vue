<template>
  <section class="section">
    <div class="container">
      <AppPost />
      <AppPost />
      <AppPost />
    </div>
  </section>
</template>

<script>
import AppPost from '~/components/AppPost.vue';

export default {
  components: {
    AppPost,
  },
};
</script>
