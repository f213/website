<template>
  <div class="current-post" v-if="currentPost && !isOnTop">
    <a class="title is-4 current-post__title" href="#" @click.prevent="click">{{ currentPost }}</a>
  </div>
</template>

<script>
import { mapState } from 'vuex';

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
    },
  },
};
</script>
<style scoped>
.current-post {
  padding-left: 1.5rem;

  &__title {
    max-width: 75vw;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border-bottom: 1px solid rgba(0,0,160,0.15);
  }
}
</style>
