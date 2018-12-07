<template>
  <div>
    <TheHeader />
    <TheMenu />
    <section class="section is-paddingless">
      <nuxt/>
    </section>
  </div>
</template>
<script>
import TheHeader from '~/components/TheHeader.vue';
import TheMenu from '~/components/TheMenu.vue';

export default {
  components: {
    TheHeader,
    TheMenu,
  },
};
</script>
