export default {
  actions: {
    async nuxtServerInit({ commit }) {
      const categories = await this.$axios.$get('categories')
      commit('categories/SET_CATEGORIES', categories)
    }
  }
}
