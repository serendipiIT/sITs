// TODO borde använda komponenten Carousel här också
<template>
  <div class="sm:flex sm:flex-row sm:flex-wrap">
    <article
      class="flex-1 sm:basis-1/2 lg:basis-1/3"
      :key="product.id"
      v-for="product in $store.state.productList"
    >
      <img
        :alt="product.title"
        class="h-96 object-contain"
        :src="product.image"
      />
      <div>
        <div>
          <h3>{{ product.title }}</h3>
          <p>{{ product.price }}</p>
        </div>
        <i>spara-ikon</i>
        <button>köp</button>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch("get")
    },
    data() {
      return {
        productList: this.$store.state.productList,
      }
    },
  }
</script>

<style lang="scss" scoped></style>
