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
  head() {
    const link = getPrevNextLinks(this.metaPrev, this.metaNext);
    return {
      title:
        'Блог CTO про управление программистами',
      titleTemplate: '%s',
      link,
      meta: [
        {
          name: 'description',
          content:
            'Личный блог Фёдора Борщёва. Здесь я делюсь профессиональными знаниями. Пишу про управление программистами и руководство аутсорсом, иногда рассказываю про еще один свой проект — Школу Сильных Программистов',
        },
      ],
    };
  },
  computed: {
    ...mapState('posts', {
      posts: (posts) => posts.posts,
    }),
    ...mapState('seo', ['metaPrev', 'metaNext']),
  },
};
</script>
