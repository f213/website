export default {
  state: () => ({
    categories: [],
  }),
  getters: {
    getCategoryBySlug: state => slug => state.categories.find(category => category.slug === slug),
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
  },
};
