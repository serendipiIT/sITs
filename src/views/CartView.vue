<template>
  <div class="flex flex-row flex-wrap bg-neutral-100 justify-around">
    <h1 class="text-3xl text-center my-8 w-full">Cart</h1>
    <section class="mx-4 sm:mx-0 w-full sm:w-[40%]">
      <ul class="flex flex-col">
        <li class="mb-8 h-min w-full" :key="item.id" v-for="item in itemList">
          <CartItemCard :item="item" />
        </li>
      </ul>
    </section>

    <section
      class="bg-white h-fit mx-4 sm:mx-0 mb-8 flex flex-col w-full sm:w-[40%] justify-start py-12 px-4 lg:px-0"
    >
      <h2 class="text-3xl text-center mb-12">Total</h2>
      <div class="flex w-full lg:w-[70%] self-center mb-6 border-b-2">
        <p class="flex-grow">Delivery cost</p>
        <p>Free</p>
      </div>
      <div class="flex w-full lg:w-[70%] self-center mb-16 border-b-2">
        <h2 class="flex-grow">
          Total <span class="italic text-sm">Excl. Sales tax</span>
        </h2>
        <p>${{ total }}</p>
      </div>
      <div class="w-full lg:w-[70%] self-center">
        <button
          class="btn w-full duration-300 bg-zinc-900 text-zinc-100 py-4 px-6 hover:bg-zinc-800 hover:text-zinc-50 rounded border-zinc-900"
          type="button"
        >
          Checkout
        </button>
      </div>
    </section>
  </div>
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
