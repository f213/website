<template>
  <a class="tds-link" href="https://tough-dev.school" @click="sendAnalytics">
    <img
      class="tds-link__img"
      src="~/assets/images/tough-dev-school.png"
      v-if="withIcon"
    />
    <span class="tds-link__label">{{ label }}</span>
  </a>
</template>
<script>
export default {
  props: {
    withIcon: { type: Boolean, default: false },
    label: { type: String, default: 'Школа Сильных Программистов' },
  },
  methods: {
    sendAnalytics() {
      this.$ackee.action('7cd58b89-d6f9-42a5-b07a-b2d3d4fe62df', {
        key: 'Click to the school link',
        value: 1,
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
.tds-link {
  white-space: nowrap;

  &__img {
    height: 18px;
    width: 18px;

    position: relative;
    top: 2px;

    opacity: 0.9;
  }

  &:hover &__img {
    opacity: 1;
  }

  &__label {
    white-space: nowrap;
  }
}
</style>
