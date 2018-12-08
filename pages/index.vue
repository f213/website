<template>
  <AppPostList :posts="posts" />
</template>

<script>
import { mapState } from 'vuex';

import AppPostList from '~/components/AppPostList.vue';

export default {
  components: {
    AppPostList,
  },
  async fetch({ store }) {
    await store.dispatch('posts/GET_POSTS');
  },

  computed: mapState('posts', {
    posts: posts => posts.posts,
  }),

  head() {
    return {
      title: 'Блог CTO про управление проектами, продуктами и командами.',
      titleTemplate: '%s',
      meta: [
        { name: 'keywords', content: 'Федор Борщев, Fedor Borshev, управление проектами, профессиональный блог, CTO, руководитель проектов, блог менеджера, GTD, ГТД, сроки, блог ненужного менеджера, психология, переговоры, электронная почта, инструменты' },
        { name: 'description', content: 'Личный блог Федора Борщева. Здесь я делюсь профессиональными знаниями. Пишу про управление проектами и продуктами, а так же работу CTO в стартапе' },

      ],
    };
  },

};
</script>
