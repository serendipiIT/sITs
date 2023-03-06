export default {
  actions: {
    addItem({ commit, state }, payload) {
      if (payload.stock >= 1) {
        commit('addItem', payload)
        return {
          items: state.items,
          ok: true,
        }
      } else {
        return {
          items: state.items,
          ok: false,
        }
      }
    },
    removeAll({ commit }) {
      commit('removeAll')
    },
    removeItem({ commit, state }, payload) {
      commit('removeItem', payload)
      return {
        items: state.items,
      }
    },
    showModal({ commit, state }, payload) {
      commit('modal', payload)
      return {
        bool: state.modal,
      }
    },
  },
  getters: {
    totalItems(state) {
      return state.items.reduce((total, item) => total + item.amount, 0)
    },
    total(state) {
      return state.items
        .reduce(
          (totalCost, product) => (totalCost += product.amount * product.price),
          0,
        )
        .toFixed(2)
    },
  },
  mutations: {
    addItem(state, payload) {
      const savedItem = state.items.find((item) => item.id === payload.id)
      if (!savedItem) {
        state.items.push({ ...payload, amount: 1 })
      } else {
        savedItem.amount += 1
      }
      payload.stock -= 1
    },
    removeAll(state) {
      state.items = []
    },
    removeItem(state, payload) {
      state.items = state.items.filter((item) => item.id !== payload.id)
    },
    modal(state, payload) {
      state.modal = payload
    },
  },
  namespaced: true,
  state: {
    items: [],
    modal: false,
  },
}
