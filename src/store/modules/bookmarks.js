export default {
  mutations: {
    bookmarkedProducts(state, bookmarked) {
      state.bookmarked.push(bookmarked)
    },
    remove(state, payload) {
      state.bookmarked = state.bookmarked.filter(
        (o) => o.product !== payload.product,
      )
    },
  },

  state: {
    bookmarked: [],
  },
  namespaced: true,
}
