<template>
  <div>
    <TheHeader @viewportEnter="SET_ON_TOP(true)" @viewportExit="SET_ON_TOP(false)" />
    <TheMenu />
    <section class="section default-section">
      <nuxt/>
    </section>
    <TheFooter />
  </div>
</template>
<script>
import { mapMutations } from 'vuex';

import TheHeader from '~/components/TheHeader.vue';
import TheMenu from '~/components/TheMenu.vue';
import TheFooter from '~/components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheMenu,
    TheFooter,
  },
  methods: mapMutations('ui', [
    'SET_ON_TOP',
  ]),
};
</script>

<style scoped>
.default-section {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
