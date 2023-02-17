<script>
  import CitiesList from "./components/CitiesList.vue"
  import HelloWorld from "./components/HelloWorld.vue"
  import Carousel from "./components/Carousel.vue"

  export default {
    created() {
      this.$store.dispatch("get")
    },
    components: {
      CitiesList,
      HelloWorld,
      Carousel,
    },
  }
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
