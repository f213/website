<template>
  <div class="subscribe-bar">
    <div class="subscribe-bar__image image is-96x96">
      <img class="is-rounded" src="~/assets/images/me-small.jpg" alt="Фёдор Борщёв">
    </div>
    <HtmlComment text="noindex" />
    <div class="subscribe-bar__text">
      <p>
        Меня зовут Федя Борщёв. Пишу для программистов в <TgLink label="телеграме" with-icon /> — 3 поста в неделю об управлении сложными проектами, хорошем коде и профессиональном развитии. А ещё я в прямом эфире пишу код на <a class="subscribe-bar__link" :href="youtube" @click="sendYoutubeAction"><i class="subscribe-bar__youtube-icon fa fa-youtube-play" /> ютубе</a> и выкладываю всякое в <a class="subscribe-bar__link" :href="facebook"><i class="subscribe-bar__facebook-icon fa fa-facebook" @click="sendFbAction" /> фейсбук</a>. Подписывайтесь!
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
      facebook: process.env.facebook,
      youtube: process.env.youtube,
    };
  },
  methods: {
    sendYoutubeAction() {
      this.$ackee.action(
        '880617d1-82de-4540-9ced-ebd039bc67f0',
        {
          key: 'Subscribe to youtube',
          value: 1,
        },
      );
    },
    sendFbAction() {
      this.$ackee.action(
        'f6f3afdd-cf42-4de7-8b79-8260e647b2c4',
        {
          key: 'Subscribe to fb',
          value: 1,
        },
      );
    },
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

  &__youtube-icon,
  &__facebook-icon {
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
