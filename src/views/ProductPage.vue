<script>
  import Navbar from "../components/Navbar.vue"
  import ProductCard from "../components/ProductCard.vue"
  import ProductMenu from "../components/ProductMenu.vue"

  export default {
    components: {
      Navbar,
      ProductCard,
      ProductMenu,
    },
  }
</script>

<template>
  <main>
    <Navbar />
    <div class="flex justify-around mt-24">
      <ProductCard :maxWidth="'max-w-[100%]'" />
    </div>
  </main>
</template>
