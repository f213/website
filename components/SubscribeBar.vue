<template>
  <div class="subscribe-bar">
    <div class="subscribe-bar__image image is-96x96">
      <img class="is-rounded" src="~/assets/images/me-small.jpg" alt="Фёдор Борщёв">
    </div>
    <div class="subscribe-bar__text">
      <p>Меня зовут Федя Борщёв. Пишу для программистов в <a class="subscribe-bar__link" :href="telegram"><i class="subscribe-bar__telegram-icon fa fa-paper-plane-o" /> телеграме</a> — 3 поста в неделю об управлении сложными проектами, хорошем коде и профессиональном развитии. А ещё я в прямом эфире пишу код на <a class="subscribe-bar__link" :href="youtube"><i class="subscribe-bar__youtube-icon fa fa-youtube-play" /> ютубе</a> и выкладываю сторьки в <a class="subscribe-bar__link" :href="instagram"><i class="fa fa-instagram" /> инстаграм</a>. Подписывайтесь!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      telegram: process.env.telegram,
      instagram: process.env.instagram,
      youtube: process.env.youtube,
    };
  },
};
</script>

<style scoped>
.subscribe-bar {
  min-height: 140px;

  &__image {
    float: left;
    margin-right: 1rem;
    position: relative;
    top: .2rem;

    @media (width > 768px) {
      width: 128px;
      height: 128px;
    }
  }

  &__text {
    @media (width > 768px) {
      padding-top: .8rem;
    }
  }

  &__youtube-icon {
    opacity: .8;
  }

  &__telegram-icon {
    opacity: .9;
  }

  &__link {
    color: var(--link-color);

    &:hover {
      color: var(--link-hover);
    }

    &:not(:hover) {
      transition: color .5s ease;
    }
  }
}
</style>
