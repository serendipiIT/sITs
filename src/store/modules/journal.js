export default {
  mutations: {
    updateJournal(state, result) {
      state.journal = result
    },
  },
  namespaced: true,
  state: {
    journal: null,
  },
}
