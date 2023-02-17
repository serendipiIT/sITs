import axios from "axios"

import { createStore } from "vuex"

export default createStore({
  actions: {
    async get({ commit }) {
      const res = await axios("https://fakestoreapi.com/products")
      commit("get", res.data)
    },
  },
  mutations: {
    get(state, productList) {
      state.productList = productList
    },
  },
  state: {
    productList: [],
  },
  strict: process.env.NODE_ENV !== "production",
})
