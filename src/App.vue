<script>
  import Navbar from "./components/Navbar.vue"
  export default {
    created() {
      this.$store.dispatch("get")
    },
    watch: {
      $route(to) {
        document.title = to.meta.title || "sITs"
      },
    },
    components: { Navbar },
  }
</script>

<template>
  <Navbar />
  <main class="scroll-smooth">
    <RouterView />
  </main>
</template>
