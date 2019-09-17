<template>
  <section class="consulting content" id="talk-to-me">
    <h2 class="title is-3 has-text-weight-normal consulting__header">Делюсь знаниями</h2>
    <p>В режиме один-к-одному делюсь знаниями и отвечаю на вопросы о разработке сложных продуктов.</p>
    <ul class="app-list consulting__list">
      <li>Как быстро запустить MVP?</li>
      <li>Как построить разработку нового продукта с нуля? Как построить общение с программистами?</li>
      <li>Как сделать, чтобы разработчики не срывали сроки?</li>
      <li>Что делать с накопленным техдолгом? Как не создавать новый?</li>
    </ul>
    <p class="consulting__call-to-action">
      Общаемся по скайпу или через зум с видео. Почитайте <nuxt-link class="consulting__link" to="/consulting/#testimonials">отзывы</nuxt-link> и напишите на <a class="consulting__link" href="mailto:fedor@borshev.com">fedor@borshev.com</a> — договоримся.
    </p>
  </section>
</template>

<style scoped>
.consulting {
  &__header {
    margin-bottom: 1rem;
  }

  &__list {
    padding-left: 0;
    margin-left: 0;
    @media (width > 768px) {
      margin-left: 0;
      left: -2rem;
    }
  }
  &__call-to-action {
    margin-top: 2rem;
  }

  &__link,
  &__tg-link {
    color: var(--link-color);

    &:hover, &--hover {
     color: var(--link-hover);
    }
  }

}
</style>
