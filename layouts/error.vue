<template>
  <section class="hero app-error">
    <div class="hero-body">
      <div class="container app-container">
        <h1 class="title">Что-то сломалось</h1>
        <h2 class="subtitle">Случилась какая-то фигня. Если вас это беспокоит, напишите мне</h2>
        <a class="button is-dark" :href="link">Написать</a>
      </div>
    </div>
  </section>
</template>
<script>
import TheHeader from '~/components/TheHeader.vue';
import TheMenu from '~/components/TheMenu.vue';
import TheFooter from '~/components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheMenu,
    TheFooter,
  },
  props: {
    error: { type: Object, required: true },
  },
  computed: {
    link() {
      return `mailto:fedor@borshev.com?subject=У тебя сайт упал (${this.$route.path} ${this.error.statusCode}: ${this.error.message})`;
    },
  },
  head() {
    return {
      title: `Ошибка ${this.error.statusCode}`,
    };
  },
};
</script>

<style scoped>
.app-error {
  margin-bottom: 15rem;
}
</style>
