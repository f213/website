<template>
  <div>
    <TheHeader />
    <TheMenu />
    <section class="section default-section">
      <nuxt />
    </section>
    <TheFooter class="section" text-class="container is-max-desktop" />
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
  padding-top: 5rem;
  padding-bottom: 0;

  @media (width > 768px) {
    padding-top: 2rem;
  }
}
</style>
