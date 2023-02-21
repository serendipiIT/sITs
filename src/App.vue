<script>
  import { mapGetters } from "vuex"

  import Navbar from "./components/Navbar.vue"
  export default {
    created() {
      this.$store.dispatch("products/getProducts")
      console.log("KATEGORIER: ", this.categories)
    },
    watch: {
      $route(to) {
        document.title = to.meta.title || "sITs"
      },
    },
    components: { Navbar },
    computed: {
      ...mapGetters({
        categories: "products/getCategories",
      }),
    },
  }
</script>

<template>
  <Navbar />
  <main class="scroll-smooth">
    <RouterView />
  </main>
</template>
