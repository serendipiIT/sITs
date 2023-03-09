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
    async getColumns({ commit }) {
      const response = await fetch(
        'http://SITsApi.us-east-1.elasticbeanstalk.com/products/columns',
      )
      const result = await response.json()
      const columns = await result.data
      for (let index = 0; index < columns.length; index++) {
        const element = columns[index]
        if (element.Field === 'category2') {
          let test = element.Type
          let categories = test
            .slice(4, -1)
            .replaceAll("'", '')
            .split(',')
            .reduce((acc, curr) => ((acc[curr] = false), acc), {})
          commit('setCategories', categories)
        }
        if (element.Field === 'color') {
          let test = element.Type
          let color = test
            .slice(4, -1)
            .replaceAll("'", '')
            .split(',')
            .reduce((acc, curr) => ((acc[curr] = false), acc), {})
          commit('setColor', color)
        }
        if (element.Field === 'size') {
          let test = element.Type
          let size = test
            .slice(4, -1)
            .replaceAll("'", '')
            .split(',')
            .reduce((acc, curr) => ((acc[curr] = false), acc), {})
          commit('setSize', size)
        }
      }
    },
  },
  getters: {
    getProductsByCategory: (state) => (cat) => {
      return state.productList.filter((product) => product.category2 === cat)
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
    resetFilters(state) {
      console.log('reset filters store')
      state.filterCategories = []
      state.filterColor = []
      state.filterSize = []
    },
    saveProducts(state, productList) {
      state.productList = productList
    },
    setCategories(state, result) {
      // console.log(result)
      state.categories = result
    },
    setColor(state, result) {
      // console.log(result)
      state.color = result
    },
    setSize(state, result) {
      // console.log(result)
      state.size = result
    },
    setFilterCategories(state, key) {
      if (state.filterCategories.includes(key)) {
        state.filterCategories = state.filterCategories.filter(
          (cat) => cat !== key,
        )
      } else {
        state.filterCategories.push(key)
      }
      state.categories[key] = !state.categories[key]
      console.log(state.filterCategories)
    },
    setFilterColor(state, key) {
      if (state.filterColor.includes(key)) {
        state.filterColor = state.filterColor.filter((cat) => cat !== key)
      } else {
        state.filterColor.push(key)
      }
      state.color[key] = !state.color[key]
      console.log(state.filterColor)
    },
    setFilterSize(state, key) {
      if (state.filterSize.includes(key)) {
        state.filterSize = state.filterSize.filter((cat) => cat !== key)
      } else {
        state.filterSize.push(key)
      }
      state.size[key] = !state.size[key]
      console.log(state.filterSize)
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
    categories: [],
    color: [],
    size: [],
    filterCategories: [],
    filterSize: [],
    filterColor: [],
  },
}
