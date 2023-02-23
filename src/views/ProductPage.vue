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
    created() {
      console.log(this.products)
    },
  }
</script>

<template>
  <main>
    <div class="flex justify-around">
      <div class="sm:flex flex-row flex-wrap gap-10 justify-center">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :max-width="'max-w-[16rem]'"
          :product-list="product"
        />
      </div>
    </div>
  </main>
</template>
