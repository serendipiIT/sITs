<template>
  <Hero
    mobile-image="https://cdn.pixabay.com/photo/2021/05/20/10/22/jeans-6268300_960_720.jpg"
    desktop-image="https://cdn.pixabay.com/photo/2021/05/20/10/22/jeans-6268300_960_720.jpg"
    fallback-color="black"
    height="70vh"
  >
    <template #title>
      <h2 class="mb-4 text-center text-5xl text-white">
        Georgia Finest Fabric Weavers
      </h2>
    </template>
    <template #sub-title>
      <p class="mb-12 text-center text-2xl text-white">Build Our Fabrics</p>
    </template>
    <template #action>
      <button
        class="border-2 text-xl duration-300 hover:bg-white hover:text-black px-6 py-2 text-white inline"
      >
        Discover
      </button>
    </template>
  </Hero>
</template>

<script>
  import Hero from './ImageTextAction.vue'
  export default {
    components: {
      Hero,
    },
  }
</script>

<style lang="scss" scoped></style>
