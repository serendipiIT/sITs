import { list } from '../../fallback'
import { levenshtein } from '../../levenshtein'
export default {
  actions: {
    async getProducts({ commit }) {
      try {
        throw new Error('henlo')
        // const products = await (
        //   await fetch(
        //     'http://sitsapi.us-east-1.elasticbeanstalk.com/products',
        //   )
        // ).json()
        // commit('saveProducts', products.data)
      } catch (error) {
        commit('saveProducts', list.data)
      }
    },
  },
  getters: {
    getProductsByCategory: (state) => (cat) => {
      return state.productList.filter((product) => product.category === cat)
    },
    getProductsBySearch: (state) => (searchTerm) => {
      // Sorry för kodkaos. /Marcus
      searchTerm.toLowerCase()
      function sortCategoriesByDistance(productA, productB) {
        const distanceA = levenshtein(
          searchTerm,
          productA.category.toLowerCase(),
        )
        const distanceB = levenshtein(
          searchTerm,
          productB.category.toLowerCase(),
        )
        productA.distance = distanceA
        productB.distance = distanceB
        if (distanceA > distanceB) return 1
        if (distanceA < distanceB) return -1
        return 0
        // return sortByWord(productA.category, productB.category)
      }
      function sortByDistance(a, b) {
        if (a.distance > b.distance) return 1
        if (a.distance < b.distance) return -1
        return 0
      }
      function sortByWord(a, b) {
        const levenshteinA = levenshtein(searchTerm, a)
        const levenshteinB = levenshtein(searchTerm, b)
        if (levenshteinA > levenshteinB) return 1
        if (levenshteinA < levenshteinB) return -1
        return 0
      }
      // https://dev.to/samanthaming/how-to-deep-clone-an-array-in-javascript-3cig
      const newArr = JSON.parse(JSON.stringify(state.productList))
      newArr.sort(sortCategoriesByDistance)

      const sortedByDistance = newArr
        .map((product) => {
          const titleArr = product.title.toLowerCase().split(' ')
          titleArr.sort(sortByWord)
          if (levenshtein(searchTerm, titleArr[0]) < product.distance) {
            product.distance = levenshtein(searchTerm, titleArr[0])
          }
          return product
        })
        .sort(sortByDistance)
        .map((product) => {
          const productWithoutDistance = product
          delete productWithoutDistance.distance
          return productWithoutDistance
        })

      return sortedByDistance
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
