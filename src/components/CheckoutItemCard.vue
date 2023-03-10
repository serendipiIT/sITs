<template>
  <article class="flex flex-row relative flex-1 bg-white">
    <img
      :alt="item.title"
      class="absolute sm:relative bottom-4 sm:bottom-0 right-4 sm:right-0 sm:w-auto h-8 sm:h-[8rem] object-contain"
      :src="item.image"
    />
    <div class="flex flex-col">
      <div class="flex flex-row flex-1">
        <h2
          v-shortText="{ text: item.title, chars: 30 }"
          class="flex-1 font-semibold"
        />
        <vIcon
          @click="removeItem(item.id)"
          class="cursor-pointer"
          name="io-close-outline"
          scale="1.4"
          title="Remove"
        />
      </div>
      <!-- <p class="flex-1">Delivery: 1 to 7 day(s)</p> -->
      <label for="amount" class="text-neutral-700 invisible sm:visible"
        >Quantity: {{ amount(item.id) }}</label
      >
      <p class="text-neutral-700">Size: {{ size }}</p>
      <p class="font-semibold inline w-fit sm:mb-0">
        $ {{ totalProductCost(item.id) }}
      </p>
    </div>
  </article>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { OhVueIcon, addIcons } from 'oh-vue-icons'
  import {
    IoAddOutline,
    IoCloseOutline,
    IoRemoveOutline,
  } from 'oh-vue-icons/icons'
  addIcons(IoAddOutline, IoCloseOutline, IoRemoveOutline)

  export default {
    components: {
      vIcon: OhVueIcon,
    },
    computed: {
      ...mapGetters({
        amount: 'cart/totalAmount',
        totalProductCost: 'cart/totalPriceTimesAmount',
        getSize: 'cart/size',
      }),
      size() {
        return this.getSize(this.item.id)
      },
    },
    data() {
      return {
        selected: null,
        showSizeModal: false,
      }
    },
    methods: {
      addAmount() {
        this.$store.commit('cart/addItem', this.item)
      },
      closeSizeModal() {
        this.showSizeModal = false
      },
      decreaseAmount() {
        this.$store.commit('cart/removeOneItem', this.item)
      },
      openSizeModal() {
        this.showSizeModal = true
      },
      removeItem(id) {
        this.$store.commit('cart/removeItem', { id })
      },
      setAmount(e) {
        let value = parseInt(e.target.value)
        if (isNaN(value)) {
          this.$store.commit('cart/setItemAmount', {
            ...this.item,
            amount: 1,
          })
          return
        }
        if (value <= 0) {
          this.removeItem(this.item.id)
          return
        }
        // if (value > this.item.stock) {
        //   value = this.item.stock
        // }
        this.$store.commit('cart/setItemAmount', {
          ...this.item,
          amount: value,
        })
      },
    },
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
  }
</script>

<style lang="scss" scoped></style>
