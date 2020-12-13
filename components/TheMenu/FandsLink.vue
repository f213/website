<template>
  <a target="_blank" href="http://fedorandsamat.com/">
    <span :class="labelClass">{{ label }}</span>
  </a>
</template>
<script>
export default {
  props: {
    label: { type: String, default: 'Нанять меня' },
    labelClass: { type: String, default: () => '' },
  },
};
</script>
