<script>
  import Carousel from "../components/Carousel.vue"
  import HelloWorld from "../components/HelloWorld.vue"
  import Footer from "../components/Footer.vue"

  export default {
    components: {
      Carousel,
      HelloWorld,
      Footer,
    },
  }
</script>

<template>
  <main class="">
    <Carousel />
    <HelloWorld msg="Hello World!" />
    <Footer />
  </main>
</template>
