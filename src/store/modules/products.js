export default {
  actions: {
    async getProducts({ commit }) {
      const products = await (
        await fetch('http://sitsapi.us-east-1.elasticbeanstalk.com/products')
      ).json()
      console.log('hämtar produkter')
      commit('saveProducts', products.data)
    },
  },
  getters: {
    getProductCategory: (state) => (cat) => {
      return state.productList.filter((product) => product.category === cat)
    },
    getCategories() {
      // Tillfälligt bara
      return [
        {
          category: 'mens clothing',
          image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
        },
        {
          category: 'jewelery',
          image:
            'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
        },
        {
          category: 'electronics',
          image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
        },
        {
          category: 'womens clothing',
          image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
        },
        {
          category: 'other',
          image:
            'https://media.istockphoto.com/id/1303583671/photo/cup-glass-of-coffee-with-smoke-and-coffee-beans-on-old-wooden-background.jpg?s=612x612&w=0&k=20&c=fAh3m6Hqxz-qeA45Tj2jGARhRiGFhgm80dLVthnvlD8=',
        },
      ]
    },
    tenNewestProducts(state) {
      function sortByDate(productA, productB) {
        if (productA.created_at > productB.created_at) return 1
        if (productA.created_at < productB.created_at) return -1
        return 0
      }
      return [...state.productList].sort(sortByDate).slice(0, 10)
    },
  },
  mutations: {
    removeFromStock(state, id) {
      const product = state.productList.find((item) => item.id === id)
      if (product) product.stock -= 1
    },
    saveProducts(state, productList) {
      state.productList = productList
    },
  },
  namespaced: true,
  state: {
    productList: [],
  },
}
