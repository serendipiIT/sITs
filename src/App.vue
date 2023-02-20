<script>
  export default {
    created() {
      this.$store.dispatch("get")
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
