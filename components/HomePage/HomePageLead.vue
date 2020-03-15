<template functional>
  <div class="home-page-lead">
    <p class="content home-page-lead__lead">
      Я строю эффективную инхаус-разработку, в которой каждый спринт приносит деньги, задачи вовремя закрываются, а&nbsp;участники команды получают удовольствие от работы.
    </p>
    <section class="home-page-lead__achievements">
      <h2 class="title is-3">
        Сделал
      </h2>
      <ul class="app-list home-page-lead__achievements-list">
        <li>Всю технологическую часть в <a class="home-page-lead__link" href="https://mtrl.ai" rel="noindex, nofollow">mtrl.ai</a>, маркетплейсе стройматериалов.</li>
        <li>Выступил сооснователем в <a class="home-page-lead__link" href="https://rumetr.com/" rel="noindex, nofollow">Руметре</a>, агрегаторе предложений на рынке недвижимости.</li>
        <li>Спроектировал и сделал личный кабинет для <a class="home-page-lead__link" href="https://elk.today" rel="noindex, nofollow">elk.today</a> — платформы, которая объединяет носителей языка с&nbsp;учениками по всему миру.</li>
        <li>Участвовал в создании <a class="home-page-lead__link" href="https://www.artlebedev.ru/color/" rel="noindex, nofollow">Колора</a> — нейросети, которая раскрашивает черно-белые фотографии</li>
        <li>Запустил сайт «<a class="home-page-lead__link" href="https://www.zr.ru/" rel="noindex, nofollow">За рулем</a>» — старейшего автомобильного журнала в России.</li>
        <li>Участвовал в создании сайта <a class="home-page-lead__link" href="https://mkb.ru" rel="noindex, nofollow">Московского Кредитного Банка</a>.</li>
        <li>Выложил много <a class="home-page-lead__link" href="http://github.com/f213" rel="noindex, nofollow">опенсорса</a>, в основном на python и js.</li>
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
      transition: color .5s ease;
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
