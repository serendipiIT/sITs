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
  <div class="flex lg:flex-row flex-col lg:justify-around justify-center mt-12">
    <ProductCarousel
      class="basis-2/5 h-auto sm:h-[70vh]"
      :product="this.showProduct"
    />
    <ProductInfoText
      class="basis-2/5 flex flex-col [&>*]:my-4 px-8 sm:px-0"
      :product="this.showProduct"
    />
  </div>
</template>
