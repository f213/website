<template>
  <div class="content app-content" v-html="content" />
</template>
<script>
import galleryCarousel from '~/helpers/galleryCarousel';

export default {
  props: {
    content: { type: String, required: true },
  },
  mounted() {
    galleryCarousel.init();
  },
};
</script>
