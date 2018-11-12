const pageTypes = {
  post: {
    findAction: 'posts/FIND_POST',
    fetchAction: 'posts/GET_POST'
  },
  page: {
    findAction: 'pages/FIND_PAGE',
    fetchAction: 'pages/GET_PAGE'
  }
}

export default {
  state: () => ({
    pageType: null
  }),
  actions: {
    async nuxtServerInit({ commit }) {
      const categories = await this.$axios.$get('categories')
      commit('categories/SET_CATEGORIES', categories)
    },
    async FETCH_PAGE({ dispatch, commit }, { slug }) {
      for (const [page, type] of Object.entries(pageTypes)) {
        const found = await dispatch(
          type.findAction,
          { slug },
          { global: true }
        )
        if (found) {
          commit('SET_PAGE_TYPE', page)

          const { id } = found
          await dispatch(type.fetchAction, { id }, { global: true })
          return
        }
      }
      throw new Error('Page not found')
    }
  },
  mutations: {
    SET_PAGE_TYPE: (state, type) => {
      state.pageType = type
    }
  }
}
