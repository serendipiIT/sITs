<script>
  import { mapGetters } from "vuex"
  import Carousel from "../components/Carousel.vue"
  import NewProducts from "../components/NewProducts.vue"

  export default {
    components: {
      Carousel,
      NewProducts,
    },
    computed: {
      ...mapGetters({
        categories: "products/getCategories",
      }),
    },
  }
</script>

<template>
  <main>
    <Carousel
      class="max-w-[95vw]"
      :height="'h-[60vh]'"
      :number-of-slides="4"
      :product-list="categories"
    />
    <NewProducts />
  </main>
</template>
