<template>
  <a class="tg-link" href="tg://resolve?domain=pmdaily">
    <i class="fa fa-telegram tg-link__icon" />
    <span class="tg-link__label" :class="labelClass">
      Подписаться на телеграм
    </span>
  </a>
</template>
<script>
export default {
  props: {
    labelClass: { type: String, default: () => '' },
  },
};
</script>

<style scoped>
.tg-link {
  white-space: nowrap;

  &__icon {
    color: var(--navigation-color);
  }
  &:hover &__icon {
     color: var(--navigation-hover);
  }
  &:not(:hover) &__icon {
    transition: color .5s ease
  }

  &__label {
    white-space: nowrap;
  }
}
</style>
