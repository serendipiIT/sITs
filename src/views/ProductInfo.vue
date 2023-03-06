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
        productList: this.$store.state.products.productList,

        showProduct: null,
      }
    },

    created() {
      this.showProduct = this.productList.find((o) => o.id === this.productID)
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
  <!-- parent på view -->
  <div
    class="flex md:flex-row flex-col md:justify-around gap-x-24 justify-center items-center mt-12 lg:max-w-[80%] mx-auto"
  >
    <ProductCarousel class="sm:mb-12" :product="this.showProduct" />
    <ProductInfoText
      class="flex flex-col [&>*]:my-4 px-8 sm:px-0"
      :product="this.showProduct"
    />
  </div>
</template>
