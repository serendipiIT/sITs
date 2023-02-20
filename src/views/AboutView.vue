<script>
  import About from "../components/About.vue"
  import Navbar from "../components/Navbar.vue"

  export default {
    components: {
      About,
      Navbar,
    },
  }
</script>

<template>
  <main>
    <Navbar />
    <About />
  </main>
</template>
