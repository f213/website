export default {
  state: () => ({
    tag: null,
  }),
  actions: {
    async GET_TAG({ commit }, { slug }) {
      const found = await this.$axios.$get(`tags/slug/${slug}/`);
      if (!found.tags.length) {
        throw new Error('No tag!');
      }
      const tag = found.tags[0];
      commit('SET_TAG', tag);
    },
  },
  mutations: {
    SET_TAG: (state, tag) => {
      state.tag = tag;
    },
  },
};
