<template>
  <div class="subscribe-bar">
    <div class="subscribe-bar__image image is-96x96">
      <img class="is-rounded" src="~/assets/images/me-small.jpg" alt="Фёдор Борщёв">
    </div>
    <HtmlComment text="noindex" />
    <div class="subscribe-bar__text">
      <p>Меня зовут Федя Борщёв. Пишу для программистов в <TgLink label="телеграме" with-icon /> — 3 поста в неделю об управлении сложными проектами, хорошем коде и профессиональном развитии. А ещё я в прямом эфире пишу код на <a class="subscribe-bar__link" v-metrika="'subscribe-youtube'" :href="youtube"><i class="subscribe-bar__youtube-icon fa fa-youtube-play" /> ютубе</a> и выкладываю сторьки в <a class="subscribe-bar__link" v-metrika="'subscribe-instagram'" :href="instagram"><i class="fa fa-instagram" /> инстаграм</a>. Подписывайтесь!
      </p>
    </div>
    <HtmlComment text="/noindex" />
  </div>
</template>

<script>
import HtmlComment from '~/components/HtmlComment.vue';
import TgLink from '~/components/TgLink.vue';

export default {
  components: {
    HtmlComment,
    TgLink,
  },
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
