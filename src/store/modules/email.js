export default {
  state: {
    email: '',
  },
  mutations: {
    setEmail(state, email) {
      state, (email = email)
    },
  },
  actions: {
    saveEmail({ commit }, email) {
      commit('setEmail', email)
    },
  },
  getters: {
    getEmail(state) {
      return state.email
    },
  },
  namespaced: true,
}
