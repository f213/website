<template>
  <div v-if="display" class="app-pagination">
    <aside class="app-pagination__arrow">{{ arrow }}</aside>
    <nuxt-link :to="link" class="app-pagination__link">
      {{ text }}
    </nuxt-link>
  </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

export default {
  props: {
    destination: { type: String, required: true },
  },
  computed: {
    arrow() {
      return this.destination === 'prev' ? '↑' : '↓';
    },
    text() {
      return this.destination === 'prev' ? 'Предыдущие' : 'Еще';
    },
    link() {
      const { nextPage } = this;
      let { name, params } = this.$route;
      params = { ...params }; // fuck

      if (nextPage === 1) {
        name = name.replace(/-?page-number/, '');
        name = name || 'index';
        delete params.number;
      } else {
        name = name.includes('page-number') ? name : `${name}-page-number`.replace('index-', '');
        params.number = nextPage;
      }
      return { name, params };
    },
    nextPage() {
      const { destination, page } = this;
      return destination === 'prev' ? page - 1 : page + 1;
    },
    display() {
      const { destination, page, pages } = this;

      if (destination === 'prev' && page === 1) {
        return false;
      }

      if (destination === 'next' && page === pages) {
        return false;
      }

      return true;
    },
    page() {
      if ('number' in this.$route.params) {
        return parseInt(this.$route.params.number, 10);
      }
      return 1;
    },
    ...mapState('posts', {
      pages: state => state.pages,
    }),
  },
  created() {
    if (!this.display) {
      return;
    }
    const { href } = this.$router.resolve(this.link);
    if (!href) {
      return;
    }

    if (this.destination === 'prev') {
      this.SET_META_PREV(href);
    } else {
      this.SET_META_NEXT(href);
    }
  },
  beforeDestroy() {
    this.SET_META_PREV(null);
    this.SET_META_NEXT(null);
  },
  methods: mapMutations('seo', [
    'SET_META_PREV',
    'SET_META_NEXT',
  ]),
};
</script>

<style scoped>
.app-pagination {
  position: relative;
  left: -1rem;
  margin-bottom: 1rem;

  &__arrow,
  &__link {
    display: inline;
  }


  &__link {
    border-bottom: 1px solid var(--link-border-color);
    color: var(--link-color);
    --webkit-tap-highlight-color: rgba( 0, 0, 0, 0 );

    &:hover {
        color: var(--link-hover);
        border-color: var(--link-border-hover);
    }

    &:not(:hover) {
      transition: color .5s ease, border-color .5s ease;
    }
  }
}
</style>
