<template>
  <time :datetime="date">{{ text }}</time>
</template>
<script>
import { fromNow } from '~/helpers/datetime';

export default {
  props: {
    date: { type: String, required: true },
  },
  computed: {
    text() {
      return fromNow(this.date);
    },
  },
};
</script>
