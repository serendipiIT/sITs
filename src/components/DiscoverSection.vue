<template>
  <Hero
    mobile-image="../../assets/fox.jpeg"
    desktop-image="../../assets/about-img/career-options.png"
    fallback-color="black"
    height="50vh"
  >
    <template #title>
      <h2 class="mb-2 text-center text-3xl text-white">
        Georgia Finest Fabric Weavers
      </h2>
    </template>
    <template #sub-title>
      <p class="mb-8 text-center text-lg text-white">Build Our Fabrics</p>
    </template>
    <template #action>
      <button
        class="border-2 duration-300 hover:bg-white hover:text-black px-4 py-2 rounded text-white inline"
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
