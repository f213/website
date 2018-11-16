<template>
  <div>
    <TheHeader />
    <TheMenu />
    <nuxt/>
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
