<template functional>
  <div class="home-page-lead">
    <p class="content home-page-lead__lead">
      Руковожу
      <a href="http://tough-dev.school">Школой Сильных Программистов</a>, где
      мы&nbsp; делаем синьёров, тимлидов и архитекторов из ребят мидл-уровня.
      А&nbsp;ещё&nbsp;у&nbsp;меня есть
      <a href="http://fedorandsamat.com">бутиковый аутсорс</a>, в&nbsp;котором
      внедрено больше инженерных практик, чем в&nbsp;средней продуктовой
      компании.
    </p>
    <section class="home-page-lead__achievements">
      <h2 class="title is-3">Сделал</h2>
      <ul class="app-list home-page-lead__achievements-list">
        <li>
          <a class="home-page-lead__link" href="/snob-blogs/">Блоги на Снобе</a>
          — движок для UGC на одном из известнейших Российских медиа.
        </li>
        <!-- prettier-ignore -->
        <li>Всю технологическую часть в <a
            class="home-page-lead__link"
            href="https://mtrl.pro"
            rel="noindex, nofollow"
            >ГдеМатериале</a
          >: бекенд для маркетплейса, приложения партнёров и клиентов,
          интерфейсы для менеджеров и логистов.
        </li>
        <!-- prettier-ignore -->
        <li>Участвовал в создании
          <a
            class="home-page-lead__link"
            href="https://www.artlebedev.ru/color/"
            rel="noindex, nofollow"
            >Колора</a
          >
          — нейросети, которая раскрашивает черно-белые фотографии.
        </li>
        <!-- prettier-ignore -->
        <li>Запустил сайт «<a
            class="home-page-lead__link"
            href="https://www.zr.ru/"
            rel="noindex, nofollow"
            >За рулём</a
          >» — старейшего автомобильного журнала в России.
        </li>
        <!-- prettier-ignore -->
        <li>Участвовал в создании сайта
          <a
            class="home-page-lead__link"
            href="https://mkb.ru"
            rel="noindex, nofollow"
            >Московского Кредитного Банка</a
          >.
        </li>
        <!-- prettier-ignore -->
        <li>Выложил много
          <a
            class="home-page-lead__link"
            href="http://github.com/f213"
            rel="noindex, nofollow"
            >опенсорса</a
          >, в основном на python и js.
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.home-page-lead {
  &__lead {
    font-size: 18px;
  }

  &__achievements {
    margin-top: 3rem;
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

  &__achievements-list {
    padding-left: 0;
    @media (width > 768px) {
      margin-left: 0;
      left: -2rem;
    }
  }
}
</style>
