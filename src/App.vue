<script>
  export default {
    created() {
      this.$store.dispatch("get")
    },
    watch: {
      $route(to) {
        document.title = to.meta.title || "sITs"
      },
    },
  }
</script>

<template>
  <main class="scroll-smooth">
    <RouterView />
  </main>
</template>
