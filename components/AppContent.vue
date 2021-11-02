<template>
  <div class="content app-content" v-html="html" />
</template>
<script>
import galleryCarousel from '~/helpers/galleryCarousel';
import { rewrite } from '~/helpers/rewriteLegacyImagePath';

export default {
  props: {
    content: { type: String, required: true },
  },
  computed: {
    html() {
      return rewrite(this.content);
    },
  },
  mounted() {
    galleryCarousel.init();
  },
};
</script>
