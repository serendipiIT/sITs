<script>
  import Navbar from "../components/Navbar.vue"
  import ProductCard from "../components/ProductCard.vue"

  export default {
    components: {
      Navbar,
      ProductCard,
    },
  }
</script>

<template>
  <main>
    <Navbar />
    <ProductCard :maxWidth="'max-w-[100%]'" />
  </main>
</template>
