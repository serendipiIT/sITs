export default {
  mutations: {
    bookmarkedProducts(state, bookmarked) {
      state.bookmarked.push(bookmarked)
    },
    remove(state, id) {
      state.bookmarked = state.bookmarked.filter((asd) => asd.id !== id.id)
    },
  },
  state: {
    bookmarked: [],
  },
  namespaced: true,
}
