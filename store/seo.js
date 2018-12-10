export default {
  state: () => ({
    metaPrev: null,
    metaNext: null,
  }),
  mutations: {
    SET_META_PREV: (state, prev) => {
      state.metaPrev = prev;
    },
    SET_META_NEXT: (state, next) => {
      state.metaNext = next;
    },
  },
};
