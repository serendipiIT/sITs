<template>
  <h1 class="text-3xl text-center my-8">Cart</h1>
  <section class="mx-4 sm:mx-0">
    <ul class="flex flex-col">
      <li :key="item.id" v-for="item in itemList">
        <CartItemCard :item="item" />
      </li>
    </ul>
  </section>
  <section class="mx-4 sm:mx-0">hej</section>
</template>

<script>
  import CartItemCard from '../components/CartItemCard.vue'
  export default {
    components: {
      CartItemCard,
    },
    computed: {
      itemList() {
        return this.$store.state.cart.items
      },
    },
  }
</script>

<style lang="scss" scoped></style>
