import { list } from '../../fallback'
import { search } from '../../searchProduct'

export default {
  actions: {
    async getProducts({ commit }) {
      try {
        const products = await (
          await fetch('http://sitsapi.us-east-1.elasticbeanstalk.com/products')
        ).json()
        const fixedData = products.data.map((item) => {
          return {
            ...item,
            colors: item.color?.split(',') || [],
            sizes: item.size?.split(',') || [],
          }
        })
        commit('saveProducts', fixedData)
      } catch (error) {
        commit('saveProducts', list.data)
      }
    },
  },
  getters: {
    getProductsByCategory: (state) => (cat) => {
      return state.productList.filter((product) => product.category2 === cat)
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
    getAllProductTitles(state) {
      return state.productList.map((product) => product.title)
    },
    similar: (state, getters) => (cartItems) => {
      const allCategories = [
        ...new Set(cartItems.map((item) => item.category2)),
      ]
      const allProductsInCategories = allCategories.reduce(
        (products, category) => {
          return [...products, ...getters.getProductsByCategory(category)]
        },
        [],
      )
      return allProductsInCategories.filter(
        (product) => !cartItems.find((item) => item.id === product.id),
      )
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
    search(state, searchTerm) {
      const { suggestions, itemList } = search(state.productList, searchTerm)
      console.log(suggestions, itemList)
      state.suggestions = suggestions
      state.searchResults = itemList
    },
  },
  namespaced: true,
  state: {
    productList: [],
    searchSuggestions: [],
    searchResults: [],
  },
}
