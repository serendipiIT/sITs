<script>
  import Carousel from "../components/Carousel.vue"
  import Footer from "../components/Footer.vue"
  import Navbar from "../components/Navbar.vue"
  import NewProducts from "../components/NewProducts.vue"

  export default {
    components: {
      Carousel,
      Footer,
      Navbar,
      NewProducts,
    },
  }
</script>

<template>
  <main>
    <Navbar />
    <Carousel class="max-w-[95vw]" :height="'h-[60vh]'" />
    <NewProducts />
    <Footer />
  </main>
</template>
