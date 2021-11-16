export default {
  state: () => ({
    metaPrev: null,
    metaNext: null,
  }),
  mutations: {
    SET_META_PREV: (state, previous) => {
      state.metaPrev = previous;
    },
    SET_META_NEXT: (state, next) => {
      state.metaNext = next;
    },
  },
};
