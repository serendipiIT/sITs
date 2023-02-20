<script>
  import Carousel from "../components/Carousel.vue"
  import HelloWorld from "../components/HelloWorld.vue"
  import Footer from "../components/Footer.vue"
  import Navbar from "../components/Navbar.vue"

  export default {
    components: {
      Carousel,
      Footer,
      Navbar,
    },
  }
</script>

<template>
  <main>
    <Navbar />
    <Carousel />
    <Footer />
  </main>
</template>
