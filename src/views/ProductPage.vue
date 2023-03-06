<script>
  import ProductCard from '../components/ProductCard.vue'
  // import ProductMenu from "../components/ProductMenu.vue"

  export default {
    components: {
      ProductCard,
      // ProductMenu,
    },
    computed: {
      products() {
        return this.$store.state.products.productList
      },
    },
  }
</script>

<template>
  <main>
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
