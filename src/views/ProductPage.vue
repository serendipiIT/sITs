<script>
  import ProductCard from '../components/ProductCard.vue'
  import SortFilter from '../components/SortFilter.vue'

  export default {
    components: {
      ProductCard,
      SortFilter,
    },
    data() {
      return {
        closeMenu: true,
        productList: this.$store.state.products.productList,
        filterCategories: Object.entries(this.$store.state.products.categories),
        /* filteredCategories: null,*/
        filterSize: this.$store.state.products.size,
        filterColor: this.$store.state.products.color,
        filteredProducts: [],
        allObjects: [
          ...Object.entries(this.$store.state.products.categories),
          ...Object.entries(this.$store.state.products.size),
          ...Object.entries(this.$store.state.products.color),
        ],
        filteredObjects: null,
      }
    },
    watch: {
      allFalse() {
        this.showAll()
      },
    },
    methods: {
      resetProducts() {
        this.filteredProducts = this.productList
        this.allObjects.forEach((x) => (x[1] = false))
        console.log(this.filteredProducts)
        console.log(this.allObjects)
        console.log('it probobly works')
      },
      showAll() {
        console.log(this.allObjects)
        this.allObjects.forEach((x) => console.log(x[1]))

        if (this.allObjects.every((x) => x[1] === false)) {
          this.filteredProducts = this.productList
          console.log(this.filteredProducts)
          console.log('if true')
        } else {
          console.log('if false')
        }
      },

      testing() {
        for (const [key, value] of Object.entries(this.filterCategories)) {
          const newarray = Object.entries(this.filterCategories).filter(
            (o) => o[1] === true,
          )

          // filter 1
          console.log(`${key}: ${value}`)
          if (value) {
            // filter 1
            for (let index = 0; index < this.productList.length; index++) {
              // filter 2
              const element = this.productList[index]
              if (element.category2 === key) {
                console.log(element.title, 'woopi')
                this.filteredProducts.push(element) // [].concat(arr1, arr2, ...)
              }
            }
          }
        }
      },
      toggleMenu() {
        this.closeMenu = !this.closeMenu
      },
      showFiltered() {
        console.log(this.$store.state.products.categories)
        for (const [key, value] of Object.entries(
          this.$store.state.products.categories,
        )) {
          // filter 1
          console.log(`${key}: ${value}`)
          if (value) {
            // filter 1
            for (let index = 0; index < this.productList.length; index++) {
              // filter 2
              const element = this.productList[index]
              if (element.category2 === key) {
                console.log(element.title, 'woopi')
                this.filteredProducts.push(element) // [].concat(arr1, arr2, ...)
              }
            }
          }
        }
        console.log(this.filteredProducts)
      },
    },
  }
</script>

<template>
  <main>
    <button class="btn btn-invert" @click="showAll">Testar</button>
    <button class="btn btn-invert" @click="showFiltered">showFiltered</button>
    <SortFilter :toggle="this.closeMenu" @reset="resetProducts" />
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
