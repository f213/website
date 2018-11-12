export default {
  state: () => ({
    posts: [],
    filters: {}
  }),
  actions: {
    async GET_POSTS({ commit, state }) {
      const posts = await this.$axios.$get('posts', { params: state.filters })
      commit('SET_POSTS', posts)
    }
  },
  mutations: {
    SET_POSTS: (state, posts) => {
      state.posts = posts
    },
    SET_FILTERS: (state, filters) => {
      state.filters = filters
    },
    UPDATE_FILTERS: (state, filters) => {
      state.filters = { ...state.filters, filters }
    }
  }
}
