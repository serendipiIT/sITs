<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Title goes here',
      },
      paragraph: {
        type: String,
        default: 'Main text goes here',
      },
      source: {
        type: String,
        default: '../../assets/about-img/find-us.jpg',
      },
      description: {
        type: String,
        default: 'Image description',
      },
    },
  }
</script>

<style></style>

<template>
  <section class="border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white">
    <h2 class="text-2xl font-bold ml-4">{{ title }}</h2>
    <p class="my-6">
      <slot />
    </p>
    <img :src="source" :alt="description" />
  </section>
</template>
