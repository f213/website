export default {
  state: () => ({
    isOnTop: true,
  }),
  mutations: {
    SET_ON_TOP: (state, onTop) => {
      state.isOnTop = onTop;
    },
  },
};
