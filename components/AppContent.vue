<template>
  <div class="content app-content" v-html="html" />
</template>
<script>
import galleryCarousel from '~/helpers/galleryCarousel';
import rewriteLegacyImagePath from '~/helpers/rewriteLegacyImagePath';
import rewriteHost from '~/helpers/rewriteHost';

export default {
  props: {
    content: { type: String, required: true },
  },
  computed: {
    html() {
      return rewriteLegacyImagePath(
        rewriteHost({
          html: this.content,
          from: process.env.backendUrl,
          to: process.env.absoluteHost,
        })
      );
    },
  },
  mounted() {
    galleryCarousel.init();
  },
};
</script>
