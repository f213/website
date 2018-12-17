<template>
  <div class="current-post" v-if="currentPost && !isOnTop">
    <a class="title is-6 has-text-weight-semibold current-post__title" href="#" @click.prevent="click">{{ currentPost }}</a>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: mapState('ui', [
    'currentPost',
    'isOnTop',
  ]),
  methods: {
    click() {
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
      this.MARK_MENU_AS_USED();
    },
    ...mapMutations('ui', [
      'MARK_MENU_AS_USED',
    ]),
  },
};
</script>
<style scoped>
.current-post {
  padding-left: 1.5rem;

  &__title {
    max-width: 72vw;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid rgba(0,0,160,0.15);
  }
}
</style>
