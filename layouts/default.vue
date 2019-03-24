<template>
  <div>
    <TheHeader />
    <TheMenu />
    <section class="section default-section">
      <nuxt/>
    </section>
    <TheFooter class="section" text-class="container app-container"/>
  </div>
</template>
<script>

import TheHeader from '~/components/TheHeader.vue';
import TheMenu from '~/components/TheMenu.vue';
import TheFooter from '~/components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheMenu,
    TheFooter,
  },
};
</script>

<style scoped>
.default-section {
  padding-top: 4rem;
  padding-bottom: 0;
}
</style>
