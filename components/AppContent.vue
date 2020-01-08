<template>
  <div class="content app-content" v-html="content" />
</template>
<script>
import galleryCarousel from '~/helpers/mixins/galleryCarousel';

export default {
  mixins: [galleryCarousel],
  props: {
    content: { type: String, required: true },
  },
};
</script>
