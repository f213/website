export default {
  state: () => ({
    posts: [],
    post: {},
    filters: {}
  }),
  actions: {
    async GET_POSTS({ commit, state }) {
      const posts = await this.$axios.$get('/posts/', { params: state.filters })
      commit('SET_POSTS', posts)
    },
    async FIND_POST({}, { slug }) {
      const found = await this.$axios.$get('/posts/', { params: { slug } })
      if (found.length) {
        return found[0]
      }
    },
    async GET_POST({ commit }, { id }) {
      const post = await this.$axios.$get(`/posts/${id}/`)
      commit('SET_POST', post)
    }
  },
  mutations: {
    SET_POSTS: (state, posts) => {
      state.posts = posts
    },
    SET_POST: (state, post) => {
      state.post = post
    },
    SET_FILTERS: (state, filters) => {
      state.filters = filters
    },
    UPDATE_FILTERS: (state, filters) => {
      state.filters = { ...state.filters, filters }
    }
  }
}
