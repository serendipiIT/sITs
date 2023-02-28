<template>
  <h2 class="text-3xl text-center mb-12">New products</h2>
  <Carousel
    class="max-w-[95vw]"
    :height="'h-[60vh]'"
    :info-text="true"
    :product-list="productList"
    :slides-per-view="2"
  />
</template>

<script>
  import { mapGetters } from 'vuex'
  import Carousel from './Carousel.vue'
  export default {
    components: { Carousel },
    computed: {
      ...mapGetters({
        productList: 'products/tenNewestProducts',
      }),
    },
  }
</script>

<style lang="scss" scoped></style>
