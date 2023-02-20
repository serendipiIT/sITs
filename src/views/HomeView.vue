<script>
  import Carousel from "../components/Carousel.vue"
  import Footer from "../components/Footer.vue"
  import NewProducts from "../components/NewProducts.vue"

  export default {
    components: {
      Carousel,
      Footer,
      NewProducts,
    },
  }
</script>

<template>
  <main>
    <Carousel
      class="max-w-[95vw]"
      :height="'h-[60vh]'"
      :product-list="[
        { image: 'https://via.placeholder.com/200x250' },
        { image: 'https://via.placeholder.com/200x250' },
        { image: 'https://via.placeholder.com/200x250' },
        { image: 'https://via.placeholder.com/200x250' },
        { image: 'https://via.placeholder.com/200x250' },
      ]"
    />
    <NewProducts />
    <Footer />
  </main>
</template>
