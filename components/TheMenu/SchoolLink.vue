<template>
  <a target="_blank" href="https://tough-dev.school/">
    <span :class="labelClass">{{ label }}</span>
  </a>
</template>
<script>
export default {
  props: {
    label: { type: String, default: 'Школа' },
    labelClass: { type: String, default: () => '' },
  },
};
</script>
