export default {
  state: () => ({
    metaPrev: undefined,
    metaNext: undefined,
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
