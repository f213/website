<template>
  <div class="subscribe-bar">
    <div class="subscribe-bar__image image is-96x96">
      <img
        class="is-rounded"
        src="~/assets/images/me-small.jpg"
        alt="Фёдор Борщёв"
      />
    </div>
    <div class="subscribe-bar__text">
      <p>
        Меня зовут Федя Борщёв. Пишу для программистов в&nbsp;<TgLink
          label="телеграме"
          with-icon
        /> — 2 поста в&nbsp;неделю об&nbsp;управлении сложными проектами,
        хорошем коде и&nbsp;профессиональном развитии. А&nbsp;ещё
        я&nbsp;руковожу&nbsp;<TDSLink
          label="Школой Сильных Программистов"
          with-icon
        />,<br class="is-hidden-desktop" />
        где мы делаем синьёров, архитекторов и&nbsp;тимлидов. Приходите учиться!
      </p>
    </div>
  </div>
</template>

<script>
import TDSLink from '~/components/TDSLink.vue';
import TgLink from '~/components/TgLink.vue';

export default {
  components: {
    TDSLink,
    TgLink,
  },
};
</script>

<style lang="postcss" scoped>
.subscribe-bar {
  min-height: 140px;

  &__image {
    float: left;
    margin-right: 1rem;
    position: relative;
    top: 0.2rem;

    @media (width > 768px) {
      width: 128px;
      height: 128px;
    }
  }

  &__text {
    @media (width > 768px) {
      padding-top: 0.5rem;
    }
  }

  &__tds {
    width: 24px;
  }

  &__link {
    color: var(--link-color);

    &:hover {
      color: var(--link-hover);
    }

    &:not(:hover) {
      transition: color 0.5s ease;
    }
  }
}
</style>
