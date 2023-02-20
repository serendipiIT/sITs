<script>
  export default {
    created() {
      this.$store.dispatch("get")
    },
  }
</script>

<template>
  <main class="scroll-smooth">
    <RouterView />
  </main>
</template>
