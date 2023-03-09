<script>
  import ProductCard from '../components/ProductCard.vue'
  import SortFilter from '../components/SortFilter.vue'

  export default {
    components: {
      ProductCard,
      SortFilter,
    },
    created() {
      this.showAll()
    },
    data() {
      return {
        closeMenu: true,
      }
    },
    watch: {},
    computed: {},
    methods: {
      resetProducts() {},
      showAll() {},
      testing2() {},
      testing() {},
      toggleMenu() {
        this.closeMenu = !this.closeMenu
      },

      filteredCategories(newValue) {
        console.log(newValue)
      },
      filteredSizes(newValue) {
        console.log(newValue)
      },
      filteredColors(newValue) {
        console.log(newValue)
      },
      showFiltered() {},
    },
  }
</script>

<template>
  <main>
    <button class="btn btn-invert" @click="testing">Testar</button>
    <button class="btn btn-invert" @click="testing2">Testar2</button>
    <button class="btn btn-invert" @click="showAll">Show all</button>
    <button class="btn btn-invert" @click="showFiltered">showFiltered</button>
    <SortFilter
      :toggle="this.closeMenu"
      @reset="resetProducts"
      @categories="filteredCategories"
      @sizes="filteredSizes"
      @colors="filteredColors"
    />
    <div
      class="flex flex-row flex-wrap gap-x-16 gap-y-8 justify-center my-8"
      @click="toggleMenu"
    >
      <ProductCard
        v-for="product in filteredProducts"
        :product="product"
        :key="product.id"
        :max-width="'max-w-[90%] sm:max-w-[45%] lg:max-w-[30%] '"
      />
    </div>
  </main>
</template>
