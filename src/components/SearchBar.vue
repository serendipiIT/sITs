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
        selectedIndex: 0,
      }
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
      <ul class="mb-2" v-if="suggestions.length > 0">
        <h2 class="font-bold mb-2 text-lg">Did you mean:</h2>
        <li
          v-for="(category, index) in suggestions"
          :key="`category: ${category}-${index}`"
        >
          <p
            class="cursor-pointer font-light mb-2"
            @click="searchTerm = category"
          >
            {{ category }}
          </p>
        </li>
      </ul>
      <ul class="mt-2" v-if="searchResults.length > 0">
        <h2 class="font-bold">Products:</h2>
        <TransitionGroup
          enter-from-class="translate-y-[50%] opacity-0"
          leave-to-class="translate-y-[50%] opacity-0"
          enter-active-class="transition duration-130"
          leave-active-class="transition duration-130"
        >
          <li
            class="search-results max-w-[300px] p-2 border-b-2 hover:bg-neutral-200"
            v-for="item in searchResults.slice(0, 5)"
            :key="item.id"
          >
            <router-link :to="`/product/${item.id}`">
              <img class="h-8 w-8 inline mr-2" :src="item.image" alt="" />
              <p class="inline" v-shortText="{ text: item.title, chars: 20 }" />
            </router-link>
          </li>
        </TransitionGroup>
      </ul>
    </div>
  </div>
</template>
