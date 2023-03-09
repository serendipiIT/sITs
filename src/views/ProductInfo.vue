<script>
  import ProductCarousel from '../components/CarouselProductInfo.vue'
  import ProductInfoText from '../components/ProductInfoText.vue'

  export default {
    components: {
      ProductCarousel,
      ProductInfoText,
    },

    data() {
      return {
        productID: parseInt(this.$route.params.id),
      }
    },
    computed: {
      productList() {
        return this.$store.state.products.productList
      },
      showProduct() {
        return this.productList.find((o) => o.id === this.productID)
      },
    },
    watch: {
      $route() {
        this.productID = parseInt(this.$route.params.id)
        this.showProduct = this.productList.find((o) => o.id === this.productID)
      },
    },
  }
</script>

<template>
  <div
    class="flex md:flex-row flex-col md:justify-around gap-x-24 justify-center items-center mt-12 lg:max-w-[80%] mx-auto"
  >
    <ProductCarousel class="sm:mb-12" :product="showProduct" />
    <ProductInfoText
      class="flex flex-col px-8 sm:px-0"
      :product="showProduct"
    />
  </div>
</template>
