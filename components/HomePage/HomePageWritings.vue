<template>
  <section class="writings">
    <h2 class="title is-3">Написал</h2>
    <div class="columns writings__columns">
      <div class="column content writings__column">
        <nuxt-link class="writings__link" to="/slack-productivity/">
          Как корпоративный чат убивает продуктивность
        </nuxt-link>
        <nuxt-link class="writings__link" to="/bro-said/">
          Почему важно выполнять обещания
        </nuxt-link>
        <nuxt-link class="writings__link" to="/production-vs-consumption/">
          Производство и потребление
        </nuxt-link>
        <nuxt-link class="writings__link" to="/time-and-money/">
          Время > Деньги
        </nuxt-link>
        <nuxt-link class="writings__link" to="/small-changes/">
          Небольшие доработочки (перевод)
        </nuxt-link>
      </div>
      <div class="column content writings__column">
        <nuxt-link class="writings__link" to="/hypothesis/">
          90% фич вылетает в трубу
        </nuxt-link>
        <a
          class="writings__link"
          href="https://vc.ru/services/60710-github-dlya-nebolshoy-komandy"
          rel="noindex,nofollow"
          ><img
            class="writings__vcru-icon"
            src="~/assets/images/vcru.png"
          />GitHub как единственное средство общения</a
        >
        <nuxt-link class="writings__link" to="/middle-way/">
          Программистам: три варианта развития мидла
        </nuxt-link>
        <nuxt-link class="writings__link" to="/50-percent/">
          Тупое правило про 50 процентов
        </nuxt-link>
        <nuxt-link class="writings__link" to="/jumpstart/">
          Как выучить любой язык программирования
        </nuxt-link>
      </div>
    </div>
    <div class="writings__tg">
      <p>
        Еще больше — в
        <TgLink
          label="телеграме"
          class="writings__tg-link"
          :class="{ 'writings__tg-link--hover': isTgLinkHovered }"
        />
      </p>
      <TgLink
        @mouseover.native="isTgLinkHovered = true"
        @mouseout.native="isTgLinkHovered = false"
      >
        <img
          class="writings__tg-img"
          src="~/assets/images/tg.webp"
          alt="Телеграм"
        />
      </TgLink>
    </div>
  </section>
</template>
<script>
import TgLink from '~/components/TgLink.vue';

export default {
  components: {
    TgLink,
  },
  data() {
    return {
      isTgLinkHovered: false,
    };
  },
};
</script>

<style scoped>
.writings {
  &__columns {
    width: 100%;
  }

  &__column {
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  &__link {
    display: block;
    margin-bottom: 0.5rem;
  }

  &__link,
  &__tg-link {
    color: var(--link-color);

    &:hover,
    &--hover {
      color: var(--link-hover);
    }
  }

  &__tg-img {
    margin-top: 0.75rem;
    width: 800px;
  }

  &__vcru-icon {
    height: 16px;
    width: 16px;
    position: relative;
    top: 0.2rem;
    margin-right: 0.2rem;
  }
}
</style>
