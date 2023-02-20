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
  <nav class="flex col">
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </nav>
  <main class="scroll-smooth">
    <RouterView />
  </main>
</template>
