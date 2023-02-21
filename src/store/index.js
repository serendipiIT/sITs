import VuexPersistence from "vuex-persist"
import { createStore } from "vuex"

import productModule from "./modules/products"
import bookmarkModule from "./modules/bookmarks"

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export default createStore({
  modules: {
    products: productModule,
    bookmarks: bookmarkModule,
  },
  plugins: [vuexLocal.plugin],
  strict: process.env.NODE_ENV !== "production",
})
