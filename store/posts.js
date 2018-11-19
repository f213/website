export default {
  state: () => ({
    posts: [],
    post_count: null,
    pages: null,
    post: {},
  }),
  actions: {
    async GET_POSTS({ commit }) {
      const response = await this.$axios.$get('v0.1/posts/');
      commit('SET_POSTS', response);
    },
    async GET_POST({ commit }, { slug }) {
      const found = await this.$axios.$get(`v0.1/posts/slug/${slug}/`);
      commit('SET_POST', found.posts[0]);
      return found;
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
