<script>
  export default {
    computed: {
      suggestions() {
        return this.$store.state.products.suggestions
      },
      searchResults() {
        return this.$store.state.products.searchResults
      },
    },
    data() {
      return {
        searchTerm: '',
      }
    },
    methods: {
      getEditDistance(a, b) {
        if (a.length == 0) return b.length
        if (b.length == 0) return a.length

        var matrix = []

        // increment along the first column of each row
        var i
        for (i = 0; i <= b.length; i++) {
          matrix[i] = [i]
        }

        // increment each column in the first row
        var j
        for (j = 0; j <= a.length; j++) {
          matrix[0][j] = j
        }

        // Fill in the rest of the matrix
        for (i = 1; i <= b.length; i++) {
          for (j = 1; j <= a.length; j++) {
            if (b[i - 1] == a[j - 1]) {
              matrix[i][j] = matrix[i - 1][j - 1]
            } else {
              matrix[i][j] = Math.min(
                matrix[i - 1][j - 1] + 1, // substitution
                Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1),
              ) // deletion, insertion, or substitution
            }
          }
        }

        return matrix[b.length][a.length]
      },
    },
    watch: {
      searchTerm(term) {
        this.$store.commit('products/search', term)
      },
    },
  }
</script>
<template>
  <div class="mb-4 px-2 w-full">
    <input
      id="input1"
      class="w-full border mb-2 px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
      type="text"
      autofocus
      placeholder="Search"
      v-model="searchTerm"
    />
    <div v-if="searchTerm">
      <ul v-if="suggestions.length > 0">
        <h2>Did you mean:</h2>
        <li
          v-for="(category, index) in suggestions"
          :key="`category: ${category}-${index}`"
        >
          <p class="cursor-pointer" @click="searchTerm = category">
            {{ category }}
          </p>
        </li>
      </ul>
      <ul>
        <h2>Products</h2>
        <li
          class="search-results max-w-[300px] p-2"
          v-for="item in searchResults.slice(0, 5)"
          :key="item.id"
        >
          <router-link :to="`/product/${item.id}`">
            <img class="h-10 w-10 inline" :src="item.image" alt="" />
            {{
              item.title.length >= 20
                ? item.title.slice(0, 20) + '...'
                : item.title
            }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  li:nth-of-type(2n) {
    background-color: lightgrey;
  }
</style>
