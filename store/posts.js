export default {
  state: () => ({
    posts: [],
    post_count: null,
    pages: null,
    post: {},
  }),
  actions: {
    async GET_POSTS({ commit }, filters) {
      const { perPage } = this.app.context.env;
      const params = { ...filters, limit: perPage, include: 'tags' };

      const response = await this.$axios.$get('v0.1/posts/', { params });
      if (!response.posts.length) {
        throw new Error('No posts found');
      }
      commit('SET_POSTS', response);
    },
    async GET_POST({ commit, dispatch }, { slug }) {
      const params = { include: 'tags' };
      const found = await this.$axios.$get(`v0.1/posts/slug/${slug}/`, { params });
      if (!found.posts.length) {
        throw new Error('No posts');
      }
      commit('SET_POST', found.posts[0]);
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
  },
};
