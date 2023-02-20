<template>
  <article class="flex-1 md:basis-1/2">
    <!-- <img :src="product.src" :alt="product.alt" /> -->
    <!-- <pre>{{ product }}</pre> -->
    <img :alt="product.title" :src="product.image" />
    <div>
      <div>
        <!-- <h3>{{ product.title }}</h3> -->
        <p>{{ product.price }}</p>
      </div>
      <i>spara</i>
    </div>
  </article>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="scss" scoped></style>
