import axios from "axios"

import { createStore } from "vuex"

export default createStore({
  actions: {
    async get() {
      const res = await axios("https://fakestoreapi.com/products")
      this.productList = res.data
    },
  },
  state: {
    productList: [],
  },
  strict: process.env.NODE_ENV !== "production",
})
