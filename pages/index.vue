<template>
  <div class="home-page">
    <div class="home-page__container">
      <HomePageHeader class="home-page__header" />
      <div class="home-page__photo">
        <img class="home-page__img" src="~/assets/images/me.jpg" width="600" height="650" alt="Федор Борщев">
      </div>
      <HomePageLead class="home-page__lead" />
    </div>
    <section class="home-page__writings content">
      <h2>Написал</h2>
      <p>
        sdf
        dd
      </p>
      <p>
        sdfsdf
      </p>
      <img src="~/assets/images/tg.png" alt="Телеграм">
    </section>
  </div>
</template>
<script>
import HomePageHeader from '~/components/HomePage/HomePageHeader.vue';
import HomePageLead from '~/components/HomePage/HomePageLead.vue';

export default {
  components: {
    HomePageHeader,
    HomePageLead,
  },
  layout: 'empty',
};
</script>

<style scoped>
.home-page {

  &__container {
    display: grid;
    grid-gap: .5rem;
    grid-template-columns: 100%;
    grid-template-rows: 100px auto auto;
    padding-top: 1rem;
    padding-left: .5rem;
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
  }

  &__lead {
    grid-row: 3 / 3;
  }

  &__writings {
    margin-top: 4rem;
  }


  @media(width > 768px) {
    padding-top: 3rem;
    padding-left: 3rem;

    &__container {
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
    }
  }
}
</style>
