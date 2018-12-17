export default {
  state: () => ({
    isOnTop: true,
    currentPost: null,
    lastCurrentPost: null,
    menuHasBeenUsedOnce: false,
  }),
  mutations: {
    SET_ON_TOP: (state, onTop) => {
      state.isOnTop = onTop;
    },
    SET_CURRENT_POST: (state, post) => {
      if (post === null) {
        state.lastCurrentPost = post;
      }
      state.currentPost = post;
    },
    RESTORE_LAST_CURRENT_POST: (state) => {
      state.currentPost = state.lastCurrentPost;
      state.lastCurrentPost = null;
    },
    MARK_MENU_AS_USED: (state) => {
      state.menuHasBeenUsedOnce = true;
    },
  },
};
