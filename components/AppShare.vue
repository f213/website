<template>
  <div class="likely app-share" :data-url="link" ref="container">
    <div class="facebook">
      Расшарить
    </div>
    <div class="vkontakte">
      ВК
    </div>
    <div class="telegram">
      Телеграм
    </div>
  </div>
</template>

<script>
import { getAbsoluteUrl } from '~/helpers/seo';

export default {
  props: {
    page: { type: Object, required: true },
  },
  computed: {
    link() {
      return getAbsoluteUrl(this.page);
    },
  },
  mounted() {
    // try to init likely for 5 times

    let attempts = 0;

    function init() {
      if ('likely' in window) {
        window.likely.initiate();
      } else if (attempts < 5) {
        window.setTimeout(init, 1000);
        attempts += 1;
      }
    }

    init();
  },
};
</script>

<style scoped>
.app-share {
  margin-top: 2rem;
}
</style>
