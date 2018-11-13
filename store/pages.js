export default {
  state: () => ({
    page: {},
  }),
  actions: {
    async FIND_PAGE(_, { slug }) {
      const found = await this.$axios.$get('/pages/', { params: { slug } });
      return found.length ? found[0] : null;
    },
    async GET_PAGE({ commit }, { id }) {
      const page = await this.$axios.$get(`/pages/${id}/`);
      commit('SET_PAGE', page);
    },
  },
  mutations: {
    SET_PAGE: (state, page) => {
      state.page = page;
    },
  },
};
