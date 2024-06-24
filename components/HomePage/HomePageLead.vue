<template functional>
  <div class="home-page-lead app-content">
    <p class="content home-page-lead__lead">
      Руковожу
      <a href="http://tough-dev.school">Школой Сильных Программистов</a>, где
      мы&nbsp;делаем синьёров, тимлидов и архитекторов из ребят мидл-уровня.
      А&nbsp;ещё&nbsp;у&nbsp;меня есть
      <a href="http://fedorandsamat.com">бутиковый аутсорс</a>, в&nbsp;котором
      внедрено больше инженерных практик, чем в&nbsp;средней продуктовой
      компании.
    </p>
    <section class="home-page-lead__achievements">
      <h2 class="title is-3">Сделал</h2>
      <ul class="app-list home-page-lead__achievements-list">
        <li>Сайт и LMS «<a
            class="home-page-lead__link"
            href="https://webium.ru"
            rel="noindex, nofollow"
            >Вебиума</a>»,
          крупнейшей онлайн-школы для подготовки к ЕГЭ.
        <li>
          <a class="home-page-lead__link" href="/snob-blogs/">Блоги на «Снобе»</a>
          — движок для UGC на одном из известнейших российских медиа.
        </li>
        <li>Всю технологическую часть в «<a
            class="home-page-lead__link"
            href="https://gdematerial.ru/"
            rel="noindex, nofollow"
            >ГдеМатериале</a
          >»: бекенд для маркетплейса, приложения партнёров и клиентов,
          интерфейсы для менеджеров и логистов.
        </li>
        <li>Запустил сайт «<a
            class="home-page-lead__link"
            href="https://www.zr.ru/"
            rel="noindex, nofollow"
            >За рулём</a
          >» — старейшего автомобильного журнала в России.
        </li>
        <li>Выступил на <a
            class="home-page-lead__link"
            href="/tags/talks/"
          >десятке отраслевых конференций</a>.
        </li>
        <li>Выложил много
          <a
            class="home-page-lead__link"
            href="/opensource-projects/"
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

  &__achievements-list {
    padding-left: 0;
    @media (width > 768px) {
      margin-left: 0;
      left: -2rem;
    }
  }
}
</style>
