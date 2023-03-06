<script>
  import ProductCard from '../components/ProductCard.vue'
  // import ProductMenu from "../components/ProductMenu.vue"
  import SortFilter from '../components/SortFilter.vue'

  export default {
    components: {
      ProductCard,
      SortFilter,
      // ProductMenu,
    },
    computed: {
      products() {
        return this.$store.state.products.productList
      },
    },
    data() {
      return {
        closeMenu: true,
      }
    },
    methods: {
      toggleMenu() {
        this.closeMenu = !this.closeMenu
      },
    },
  }
</script>

<template>
  <main>
    <SortFilter :toggle="this.closeMenu" />
    <div @click="toggleMenu">
      <RouterView name="hero" />
    </div>
    <div class="flex flex-row flex-wrap gap-x-16 gap-y-5 justify-center my-8">
      <ProductCard
        v-for="product in products"
        :product="product"
        :key="product.id"
        :max-width="'max-w-[90%] sm:max-w-[45%] lg:max-w-[30%] '"
      />
    </div>
  </main>
</template>
