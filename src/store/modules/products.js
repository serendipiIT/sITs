import { list } from '../../fallback'
import { search } from '../../searchProduct'

export default {
  actions: {
    async getProducts({ commit }) {
      try {
        const products = await (
          await fetch('http://sitsapi.us-east-1.elasticbeanstalk.com/products')
        ).json()
        commit('saveProducts', products.data)
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
      return state.productList.filter((product) => product.category === cat)
    },
    // getProductsBySearch: (state) => (searchTerm) => {
    //   return search(state.productList, searchTerm)
    // },
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
    setCategories(state, result) {
      state.categories = result
      console.log(state.categories)
    },
    setColor(state, result) {
      state.color = result
      console.log(state.color)
    },
    setSize(state, result) {
      state.size = result
      console.log(state.size)
    },
    setFilterCategories(state, key) {
      state.categories[key] = !state.categories[key]
      console.log(state.categories[key])
    },
    setFilterColor(state, key) {
      state.color[key] = !state.color[key]
      console.log(state.color[key])
    },
    setFilterSize(state, key) {
      state.size[key] = !state.size[key]
      console.log(state.size[key])
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
  },
}
