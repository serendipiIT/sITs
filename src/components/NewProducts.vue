<template>
  <h2 class="text-3xl">New products</h2>
  <Carousel
    class="max-w-[95vw]"
    :height="'h-[60vh]'"
    :info-text="true"
    :product-list="productList"
    :slides-per-view="2"
  />
</template>

<script>
  import Carousel from "./Carousel.vue"
  export default {
    components: { Carousel },
    created() {
      this.$store.dispatch("get")
    },
    data() {
      return {
        productList: this.$store.state.productList,
      }
    },
  }
</script>

<style lang="scss" scoped></style>
