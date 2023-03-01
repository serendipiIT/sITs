<template>
  <h2 class="text-center my-8 text-4xl font-medium">New products</h2>
  <Carousel
    class="max-w-[95vw]"
    :info-text="true"
    :product-list="productList"
    :slides-per-view="1"
    :breakpoints="{ 1280: { slidesPerView: 3 }, 768: { slidesPerView: 2 } }"
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
