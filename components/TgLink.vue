<template>
  <a class="tg-link" href="tg://resolve?domain=pmdaily" @click="sendAnalytics">
    <slot>
      <img
        class="tg-link__icon"
        src="~assets/icons/telegram.svg"
        height="15"
        width="15"
        v-if="withIcon"
      />
      <span class="tg-link__label" :class="labelClass">{{ label }}</span>
    </slot>
  </a>
</template>
<script>
export default {
  props: {
    withIcon: { type: Boolean, default: false },
    label: { type: String, default: 'Подписаться на телеграм' },
    labelClass: { type: String, default: () => '' },
  },
  methods: {
    sendAnalytics() {
      this.$ackee.action('ad28f09c-3956-4884-aaed-37f5edb23ef2', {
        key: 'Subscribe to telegram',
        value: 1,
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
.tg-link {
  white-space: nowrap;

  &__icon {
    position: relative;
    top: 2px;
  }

  @media (width > 768px) {
    &:hover,
    &:hover &__icon {
      color: var(--link-hover);
    }
  }

  &:not(:hover) &__icon {
    transition: color 0.5s ease;
  }

  &__label {
    white-space: nowrap;
  }
}
</style>
