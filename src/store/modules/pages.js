export default {
  mutations: {
    updatePages(state, result) {
      state.pages = result
    },
  },
  namespaced: true,
  state: {
    pages: [],
  },
}
