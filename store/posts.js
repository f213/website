export default {
  state: () => ({
    posts: [],
    post_count: null,
    pages: null,
    post: {},
    filters: {},
  }),
  actions: {
    async GET_POSTS({ commit }) {
      const response = await this.$axios.$get('/posts/');
      commit('SET_POSTS', response);
    },
    async FIND_POST(_, { slug }) {
      const found = await this.$axios.$get('/posts/', { params: { slug } });
      return found.length ? found[0] : null;
    },
    async GET_POST({ commit }, { id }) {
      const post = await this.$axios.$get(`/posts/${id}/`);
      commit('SET_POST', post);
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
    SET_FILTERS: (state, filters) => {
      state.filters = filters;
    },
    UPDATE_FILTERS: (state, filters) => {
      state.filters = { ...state.filters, filters };
    },
  },
};
