<template>
  <section class="consulting content" id="talk-to-me">
    <h2 class="title is-3 has-text-weight-normal">Делюсь знаниями</h2>
    <p>В режиме один-к-одному делюсь знаниями и отвечаю на вопросы о разработке сложных продуктов. К примеру:</p>
    <ul class="app-list consulting__list">
      <li>Как построить разработку нового продукта с нуля? Как построить общение с программистами?</li>
      <li>Как сделать, чтобы разработчики не срывали сроки</li>
      <li>Какие процессы нужны, когда команда выросла больше 3-х человек?</li>
      <li>Что делать с накопленным техдолгом? Как не создавать новый?</li>
      <li>Как ускорить time2market при помощи devops.</li>
    </ul>
    <p class="consulting__call-to-action">
      Общение происходит по скайпу или через зум с видео. Руками не работаю. Пишите на <a href="mailto:fedor@borshev.com">почту</a> — договоримся.
    </p>
  </section>
</template>

<style scoped>
.consulting {
  &__list {
    padding-left: 0;
    margin-left: 0;
    @media (width > 768px) {
      margin-left: 0;
      left: -2rem;
    }
  }
  &__call-to-action {
    margin-top: 3rem;
  }
}
</style>
