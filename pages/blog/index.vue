<template>
  <AppPostList :posts="posts" no-index />
</template>

<script>
import { mapState } from 'vuex';

import { getPrevNextLinks } from '~/helpers/seo';

import AppPostList from '~/components/AppPostList.vue';

export default {
  components: {
    AppPostList,
  },
  async fetch({ store }) {
    await store.dispatch('posts/GET_POSTS');
  },

  computed: {
    ...mapState('posts', {
      posts: (posts) => posts.posts,
    }),
    ...mapState('seo', [
      'metaPrev',
      'metaNext',
    ]),
  },

  head() {
    const link = getPrevNextLinks(this.metaPrev, this.metaNext);
    return {
      title: 'Блог CTO про управление проектами, продуктами и командами. Раньше назывался «Блог ненужного менеджера»',
      titleTemplate: '%s',
      link,
      meta: [
        { name: 'keywords', content: 'Фёдор Борщёв, Fedor Borshev, управление проектами, профессиональный блог, CTO, руководитель проектов, блог менеджера, GTD, ГТД, сроки, блог ненужного менеджера, психология, переговоры, электронная почта, инструменты' },
        { name: 'description', content: 'Личный блог Фёдора Борщёва. Здесь я делюсь профессиональными знаниями. Пишу про управление проектами и продуктами, а так же работу CTO в стартапе' },
      ],
    };
  },

};
</script>
