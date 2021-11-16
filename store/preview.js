export default {
  state: () => ({
    post: undefined,
  }),
  actions: {
    async GET_POST({ commit }, { uuid }) {
      const response = await this.$axios({
        // ignore axios config and make direct request to absolute host
        url: `/api/v8/preview-posts/${uuid}/`,
        baseURL: process.env.absoluteHost,
      });
      if (!('id' in response.data)) throw new Error('Post not found');

      commit('SET_POST', response.data);
    },
  },
  mutations: {
    SET_POST: (state, post) => {
      state.post = post;
    },
  },
};
