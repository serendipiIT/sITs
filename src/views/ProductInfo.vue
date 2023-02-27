<script>
  export default {
    data() {
      return {
        productID: parseInt(this.$route.params.id),
        productList: this.$store.state.products.productList,
        showProduct: null,
      }
    },
    created() {
      this.showProduct = this.productList.find((o) => o.id === this.productID)
    },
  }
</script>

<template>
  <h1>{{ this.showProduct }}</h1>
</template>
