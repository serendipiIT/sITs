<script>
  import ProductCard from '../components/ProductCard.vue'
  import SortFilter from '../components/SortFilter.vue'

  export default {
    components: {
      ProductCard,
      SortFilter,
    },
    computed: {
      filteredProductList() {
        let arr = this.$store.state.products.productList
        const categoryFilters = this.$store.state.products.filterCategories
        const sizeFilters = this.$store.state.products.filterSize
        const colorFilters = this.$store.state.products.filterColor

        if (sizeFilters.length > 0) {
          arr = arr.filter((item) =>
            sizeFilters.some((size) => item.sizes.includes(size)),
          )
        }
        if (categoryFilters.length > 0) {
          arr = arr.filter((item) => categoryFilters.includes(item.category2))
        }
        if (colorFilters.length > 0) {
          arr = arr.filter((item) =>
            colorFilters.some((color) => item.colors.includes(color)),
          )
        }

        return arr
      },
    },
    data() {
      return {
        closeMenu: Boolean,
      }
    },

    methods: {
      toggleMenu() {
        this.closeMenu = !this.closeMenu
      },
    },
    mounted() {
      this.$store.dispatch('products/getProducts')
      this.$store.dispatch('products/getColumns')
    },
  }
</script>

<template>
  <main>
    <SortFilter :toggle="this.closeMenu" />
    <div
      class="flex flex-row flex-wrap gap-x-16 gap-y-8 justify-center my-8"
      @click="toggleMenu()"
    >
      <ProductCard
        v-for="product in filteredProductList"
        :product="product"
        :key="product.id"
        :max-width="'max-w-[90%] sm:max-w-[45%] lg:max-w-[30%]'"
      />
    </div>
  </main>
</template>
