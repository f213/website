<template>
  <div class="home-page">
    <div class="home-page__container">
      <HomePageHeader class="home-page__header" />
      <div class="home-page__photo">
        <img
          class="home-page__img"
          src="~/assets/images/me.webp"
          width="600"
          height="650"
          alt="Фёдор Борщёв"
        />
      </div>
      <HomePageLead class="home-page__lead" />
    </div>
    <HomePageWritings class="home-page__writings" />
    <TheFooter class="home-page__footer" />
  </div>
</template>
<script>
import HomePageHeader from '~/components/HomePage/HomePageHeader.vue';
import HomePageLead from '~/components/HomePage/HomePageLead.vue';
import HomePageWritings from '~/components/HomePage/HomePageWritings.vue';

import TheFooter from '~/components/TheFooter.vue';

export default {
  components: {
    HomePageHeader,
    HomePageLead,
    HomePageWritings,
    TheFooter,
  },
  layout: 'empty',
  head() {
    return {
      title: 'Фёдор Борщёв — главная страница',
      titleTemplate: '%s',
      meta: [
        {
          name: 'keywords',
          content:
            'Фёдор Борщёв, Fedor Borshev, управление проектами, профессиональный блог, CTO, руководитель проектов, блог менеджера, GTD, ГТД, сроки, блог ненужного менеджера, психология, переговоры, электронная почта, инструменты',
        },
        {
          name: 'description',
          content: 'Сайт Фёдора Борщёва — CTO и ИТ-консультанта',
        },
      ],
    };
  },
};
</script>

<style scoped>
.home-page {
  max-width: 1400px;
  margin: 0 auto;
  padding-left: 1rem;

  &__container {
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    padding-top: 2rem;
  }

  &__header,
  &__lead,
  &__photo {
    grid-column: 1;
  }

  &__header {
    grid-row: 1 / 1;
  }

  &__photo {
    grid-row: 2 / 2;
    max-width: 400px;
    padding-right: 1rem;
  }

  &__lead {
    grid-row: 3 / 3;
  }

  &__writings {
    margin-top: 6rem;
  }

  &__footer {
    margin-top: 3rem;
  }

  @media (width > 1020px) {
    padding-top: 3rem;
    padding-left: 3.5rem;

    &__container {
      padding-top: 1rem;
      grid-template-columns: 45vw auto;
      grid-template-rows: 130px auto;
    }

    &__header {
      grid-column: 1 / 1;
      grid-row: 1 / 1;
    }
    &__lead {
      grid-column: 1 / 1;
      grid-row: 2 / 2;
    }

    &__photo {
      grid-column: 2;
      grid-row: 1 / 2;
      padding-left: 5rem;
      padding-top: 1rem;
      max-width: none;
    }
  }
}
</style>
