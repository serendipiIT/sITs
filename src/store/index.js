import VuexPersistence from "vuex-persist"
import { createStore } from "vuex"

import productModule from "./modules/products"

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export default createStore({
  modules: {
    products: productModule,
  },
  plugins: [vuexLocal.plugin],
  strict: process.env.NODE_ENV !== "production",
})
