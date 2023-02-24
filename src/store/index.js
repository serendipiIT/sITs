import VuexPersistence from 'vuex-persist'
import { createStore } from 'vuex'

import bookmarkModule from './modules/bookmarks'
import cartModule from './modules/cart'
import productModule from './modules/products'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export default createStore({
  modules: {
    bookmarks: bookmarkModule,
    cart: cartModule,
    products: productModule,
  },
  plugins: [vuexLocal.plugin],
  strict: process.env.NODE_ENV !== 'production',
})
