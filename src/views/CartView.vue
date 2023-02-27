<template>
  <section class="mx-4 sm:mx-0">
    <h1 class="text-3xl text-center my-8">Cart</h1>
    <ul
      class="flex flex-col md:flex-row sm:flex-wrap md:justify-between lg:justify-between"
    >
      <li
        class="mb-8 h-min w-full md:w-[45%] lg:w-[30%]"
        :key="item.id"
        v-for="item in itemList"
      >
        <CartItemCard :item="item" />
      </li>
    </ul>
  </section>
  <section class="mx-4 sm:mx-0 mt-6 mb-8 flex flex-col">
    <div class="flex w-full md:w-1/2 lg:w-[450px] self-center">
      <p class="flex-grow">Delivery cost</p>
      <p>Free</p>
    </div>
    <div class="flex w-full md:w-1/2 lg:w-[450px] self-center mb-4">
      <h2 class="flex-grow">Total <span>Excl. Sales tax</span></h2>
      <p>${{ total }}</p>
    </div>
    <div class="w-full md:w-1/2 lg:w-[450px] self-center">
      <button
        class="btn w-full duration-300 bg-zinc-900 text-zinc-100 py-4 px-6 hover:bg-zinc-800 hover:text-zinc-50 rounded border-zinc-900"
        type="button"
      >
        Checkout
      </button>
    </div>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'

  import CartItemCard from '../components/CartItemCard.vue'
  export default {
    components: {
      CartItemCard,
    },
    computed: {
      itemList() {
        return this.$store.state.cart.items
      },
      ...mapGetters({
        total: 'cart/total',
      }),
    },
  }
</script>

<style scoped></style>
