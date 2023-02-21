export default {
  actions: {
    async getProducts({ commit }) {
      const products = await (
        await fetch("http://sitsapi.us-east-1.elasticbeanstalk.com/products")
      ).json()
      console.log("hämtar produkter")
      commit("saveProducts", products.data)
    },
  },
  getters: {
    getProductCategory: (state) => (cat) => {
      return state.productList.filter((product) => product.category === cat)
    },
    getCategories(state) {
      return [
        ...new Set(
          state.productList
            .map((product) => product.category)
            .filter((cat) => cat && cat !== "null"),
        ),
      ]
    },
    // TODO Getter för nya produkter,
    // kategorier (getProductCategory: (state) => (cat) => ...  )
  },
  mutations: {
    saveProducts(state, productList) {
      state.productList = productList
    },
  },
  namespaced: true,
  state: {
    productList: [],
  },
}
