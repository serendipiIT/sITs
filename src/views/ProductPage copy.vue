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
        productList: this.$store.state.products.productList,
        /*filterCategories: Object.entries(this.$store.state.products.categories),*/
        /* filteredCategories: null,*/
        filterCategories: this.$store.state.products.categories,
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
    computed: {
      computedProducts() {},
    },
    methods: {
      resetProducts() {
        this.filteredProducts = this.productList
        this.allObjects.forEach((x) => (x[1] = false))
      },
      showAll() {
        if (this.allObjects.every((x) => x[1] === false)) {
          this.filteredProducts = this.productList
          console.log(this.filteredProducts)
          console.log('if true')
        } else {
          console.log('if false')
        }
      },
      testing2() {
        console.log(this.$store.state.products.size)
      },
      testing() {
        console.log('start', true)
        for (const [key, value] of Object.entries(
          this.$store.state.products.size,
        )) {
          // filter 1
          console.log(`${key}: ${value}`)
          if (value) {
            // filter 1
            for (let index = 0; index < this.productList.length; index++) {
              // filter 2
              const element = this.productList[index]
              if (element.sizes.filter((x) => x === key)) {
                console.log(element.title, 'woopi sizes filter whoowowo')
                this.filteredProducts.push(element) // [].concat(arr1, arr2, ...)*/
              }
            }
          }
        }
        console.log('end', true)

        /*        for (const [key, value] of Object.entries(this.filterCategories)) {
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
        }*/
      },
      toggleMenu() {
        this.closeMenu = !this.closeMenu
      },

      showFiltered() {
        console.log(this.filterCategories)
        console.log(this.productList)
        this.filteredProducts = []
        for (const [key, value] of Object.entries(this.filterCategories)) {
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
        for (const [key, value] of Object.entries(this.filterSize)) {
          // filter 1
          console.log(`${key}: ${value}`)
          if (value) {
            // filter 1
            for (let index = 0; index < this.productList.length; index++) {
              // filter 2
              const element = this.productList[index]
              if (element.colors.filter((x) => x === key)) {
                console.log(element.title, 'woopi colors filter whoowowo')
                /* this.filteredProducts.push(element) // [].concat(arr1, arr2, ...)*/
              }
            }
          }
        }
        for (const [key, value] of Object.entries(this.filterColor)) {
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
    /*    computed: {
      computedProducts: function () {
        return this.products
          .filter((item) => {
            return (
              (this.colors.length === 0 || this.colors.includes(item.color)) &&
              (this.sizes.length === 0 || this.sizes.includes(item.size))
            )
          })
          .sort((a, b) => {
            return a[this.sortBy]
              .toString()
              .localeCompare(b[this.sortBy].toString())
          })
      },
    },*/
  }
</script>

<template>
  <main>
    <button class="btn btn-invert" @click="testing">Testar</button>
    <button class="btn btn-invert" @click="testing2">Testar2</button>
    <button class="btn btn-invert" @click="showAll">Show all</button>
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
