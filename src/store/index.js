import VuexPersistence from "vuex-persist"

import { createStore } from "vuex"

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export default createStore({
  actions: {
    async get({ commit }) {
      const data = await (
        await fetch("https://fakestoreapi.com/products")
      ).json()
      commit("get", data)
    },
  },
  getters: {
    // TODO Getter för nya produkter,
    // kategorier (getProductCategory: (state) => (cat) => ...  )
  },
  mutations: {
    get(state, productList) {
      state.productList = productList
      console.log(productList)
    },
  },
  plugins: [vuexLocal.plugin],
  state: {
    productList: [],
  },
  strict: process.env.NODE_ENV !== "production",
})
