export default {
  state: () => ({
    page: {}
  }),
  actions: {
    async FIND_PAGE({}, { slug }) {
      const found = await this.$axios.$get('/pages/', { params: { slug } })
      if (found.length) {
        return found[0]
      }
    },
    async GET_PAGE({ commit }, { id }) {
      const page = await this.$axios.$get(`/pages/${id}/`)
      commit('SET_PAGE', page)
    }
  },
  mutations: {
    SET_PAGE: (state, page) => {
      state.page = page
    }
  }
}
