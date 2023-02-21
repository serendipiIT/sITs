<script>
  import ProductCard from "../components/ProductCard.vue"
  import ProductMenu from "../components/ProductMenu.vue"

  export default {
    components: {
      ProductCard,
      ProductMenu,
    },
  }
</script>

<template>
  <main>
    <div class="flex justify-around mt-24">
      <ProductCard :max-width="'max-w-[16rem]'" />
    </div>
  </main>
</template>
