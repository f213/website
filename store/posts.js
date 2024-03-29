export default {
  state: () => ({
    posts: [],
    post_count: undefined,
    pages: undefined,
    post: undefined,
    similar: [],
  }),
  actions: {
    async GET_POSTS({ commit }, filters) {
      const { perPage } = this.app.context.env;
      const parameters = { ...filters, limit: perPage, include: 'tags' };

      const response = await this.$axios.$get('posts/', { params: parameters });
      if (response.posts.length === 0) {
        throw new Error('No posts found');
      }
      commit('SET_POSTS', response);
    },
    async GET_POST({ commit, dispatch }, { slug }) {
      if (['me'].includes(slug)) {
        // disable double fetch for known pages
        return dispatch('GET_PAGE', { slug });
      }
      const parameters = { include: 'tags' };
      const found = await this.$axios.$get(`posts/slug/${slug}/`, {
        params: parameters,
      });
      if (found.posts.length === 0) {
        throw new Error('No posts');
      }
      const post = found.posts[0];
      commit('SET_POST', post);

      if (post.primary_tag) {
        const tag = post.primary_tag.slug;
        await dispatch('GET_SIMILAR_POSTS', { tag });
      }
    },
    async GET_PAGE({ commit }, { slug }) {
      const found = await this.$axios.$get(`pages/slug/${slug}/`);
      if (found.pages.length === 0) {
        throw new Error('No posts');
      }
      const page = found.pages[0];
      commit('SET_POST', page);
    },
    async GET_SIMILAR_POSTS({ commit }, { tag }) {
      const found = await this.$axios.$get(`posts/?filter=tag:${tag}`);
      commit('SET_SIMILAR', found.posts);
    },
  },
  mutations: {
    SET_POSTS: (state, response) => {
      state.posts = response.posts;
      const { pagination } = response.meta;
      state.post_count = pagination.total;
      state.pages = pagination.pages;
    },
    SET_POST: (state, post) => {
      state.post = post;
    },
    SET_SIMILAR: (state, similar) => {
      state.similar = similar.filter(
        (similarPost) => similarPost.id !== state.post.id,
      );
    },
  },
};
