<script>
  import ProductCard from "../components/ProductCard.vue"
  // import ProductMenu from "../components/ProductMenu.vue"

  export default {
    components: {
      ProductCard,
      // ProductMenu,
    },
    data() {
      return {
        products: this.$store.state.products.productList,
      }
    },
  }
</script>

<template>
  <main>
    <div class="flex flex-row flex-wrap gap-x-3 gap-y-5 justify-center mb-8">
      <ProductCard
        v-for="product in products"
        :product="product"
        :key="product.id"
        :max-width="'sm:max-w-[45%] max-w-[85%]'"
      />
    </div>
  </main>
</template>
