<template>
  <div class="content app-content" v-html="html" />
</template>
<script>
import galleryCarousel from '~/helpers/galleryCarousel';
import rewriteLegacyImagePath from '~/helpers/rewriteLegacyImagePath';

export default {
  props: {
    content: { type: String, required: true },
  },
  computed: {
    html() {
      return rewriteLegacyImagePath(this.content);
    },
  },
  mounted() {
    galleryCarousel.init();
  },
};
</script>
