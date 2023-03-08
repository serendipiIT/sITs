<template>
  <article class="flex flex-row">
    <img
      :alt="item.title"
      class="h-[10rem] object-contain w-[30%] bg-neutral-200 p-4"
      :src="item.image"
    />
    <div class="flex flex-col p-4 flex-1 bg-white">
      <div class="flex flex-row">
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
      <p class="flex-1">Delivery: 1 to 7 day(s)</p>
      <p>Size: <span class="font-semibold">{{}}</span></p>
      <div>
        <p class="inline">Quantity:</p>
        <div>
          <button @click="decreaseAmount" class="btn inline">-</button>
          <input
            @input="setAmount"
            class="w-[30px]"
            type="number"
            :value="amount(item.id)"
          />
          <button @click="addAmount" class="btn inline">+</button>
        </div>
      </div>
      <p class="font-semibold inline">$ {{ item.price }}</p>
    </div>
  </article>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { OhVueIcon, addIcons } from 'oh-vue-icons'
  import { IoCloseOutline } from 'oh-vue-icons/icons'
  addIcons(IoCloseOutline)

  export default {
    components: {
      vIcon: OhVueIcon,
    },
    computed: {
      ...mapGetters({
        amount: 'cart/totalAmount',
      }),
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
        if (value > this.item.stock) {
          value = this.item.stock
        }
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
