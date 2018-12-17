<template>
  <div class="likely app-share" :data-url="link" ref="container">
    <div class="facebook">Расшарить</div>
    <div class="twitter">Твитнуть</div>
    <div class="vkontakte">ВК</div>
    <div class="telegram">Телеграм</div>
  </div>
</template>

<script>
import InViewportMixin from '~/mixins/InViewportMixin.vue';

import likely from 'ilyabirman-likely';

import { getAbsoluteUrl } from '~/helpers/seo';

export default {
  mixins: [InViewportMixin],
  props: {
    page: { type: Object, required: true },
  },
  computed: {
    link() {
      return getAbsoluteUrl(this.page);
    },
  },
  mounted() {
    likely.initiate();
  },
};
</script>

<style scoped>
.app-share {
  margin-top: 1rem;
}
</style>
