<script>
  export default {
    computed: {
    filteredItems() {
      return this.$store.state.items
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
              Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
            ) // deletion, insertion, or substitution
          }
        }
      }

      return matrix[b.length][a.length]
    },
  },
  }
</script>
<template>
  <div class="mb-4 px-2 w-full">
    <input
      id="input1"
      class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
      type="text"
      autofocus
      placeholder="Search"
    />
    <ul v-if="searchTerm">
      <li v-for="(item, index) in filteredItems" :key="index">{{ item }}: {{ getEditDistance(searchTerm, item) }}</li>
    </ul>
  </div>
</template>
