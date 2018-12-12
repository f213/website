<template>
  <div class="app-comments">
    <VueDisqus :shortname="shortname" :identifier="link" />
  </div>
</template>

<script>
import { getAbsoluteUrl } from '~/helpers/seo';

export default {
  props: {
    post: { type: Object, required: true },
  },
  data() {
    return {
      shortname: process.env.disqus_shortname,
    };
  },
  computed: {
    link() {
      return getAbsoluteUrl(this.post);
    },
  },
};
</script>

<style scoped>
.app-comments {
  margin-bottom: 2rem;
}

</style>
