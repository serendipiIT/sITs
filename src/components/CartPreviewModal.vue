<template>
  <div
    class="absolute top-16 right-0 bg-neutral-100 p-6 w-[17rem] border"
    @mouseenter="openCartModal"
    @mouseleave="closeCartModal"
  >
    <ul class="" v-if="itemList.length > 0">
      <li
        @click="closeCartModal"
        class="mb-4 h-min w-full"
        :key="item.id"
        v-for="item in itemList"
      >
        <!-- <CartItemCard :item="item" /> -->
        <router-link :to="`/product/${item.id}`">
          <article class="flex flex-row text-sm">
            <img
              :alt="item.title"
              class="h-[5rem] object-contain bg-neutral-200"
              :src="item.image"
            />
            <div class="flex flex-col p-2 pl-4 flex-1 bg-white">
              <div class="flex flex-row">
                <h2 class="flex-1 font-semibold">
                  {{
                    item.title.length < 17
                      ? item.title
                      : item.title.slice(0, 17) + '...'
                  }}
                </h2>
                <vIcon
                  @click="removeItem(item.id)"
                  class="cursor-pointer"
                  name="io-close-outline"
                  scale="1"
                />
              </div>
              <p>Quantity: {{ item.amount }}</p>
              <p class="font-semibold inline">$ {{ item.price }}</p>
            </div>
          </article>
        </router-link>
      </li>
    </ul>
    <section class="h-fit flex flex-col w-full justify-start text-sm">
      <h2 class="text-2xl text-center mb-4">Total</h2>
      <div class="flex w-[70%] self-center mb-4">
        <p class="flex-grow">Delivery cost</p>
        <p class="font-medium">Free</p>
      </div>
      <div class="flex w-[70%] self-center mb-8">
        <h2 class="flex-grow">
          Total
          <span class="italic block text-xs">Excl. Sales tax</span>
        </h2>
        <p class="font-medium">${{ total }}</p>
      </div>
      <button
        class="btn w-full duration-300 bg-zinc-900 text-zinc-100 py-4 px-6 hover:bg-zinc-800 hover:text-zinc-50 rounded border-zinc-900"
        type="button"
      >
        Checkout
      </button>
    </section>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { OhVueIcon, addIcons } from 'oh-vue-icons'
  import { IoCloseOutline } from 'oh-vue-icons/icons'
  addIcons(IoCloseOutline)

  import useCartModal from '../cartModal'

  export default {
    setup() {
      const cartModal = useCartModal()
      return {
        closeCartModal: cartModal.closeModal,
        openCartModal: cartModal.openModal,
      }
    },
    components: {
      vIcon: OhVueIcon,
    },
    computed: {
      itemList() {
        return this.$store.state.cart.items
      },
      ...mapGetters({
        total: 'cart/total',
      }),
    },
    methods: {
      removeItem(id) {
        this.$store.commit('cart/removeItem', { id })
      },
    },
  }
</script>

<style scoped></style>
