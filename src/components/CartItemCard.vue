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
      <p>Quantity: {{ item.amount }}</p>
      <p class="font-semibold inline">$ {{ item.price }}</p>
    </div>
  </article>
</template>

<script>
  import { OhVueIcon, addIcons } from 'oh-vue-icons'
  import { IoCloseOutline } from 'oh-vue-icons/icons'
  addIcons(IoCloseOutline)

  export default {
    components: {
      vIcon: OhVueIcon,
    },
    methods: {
      removeItem(id) {
        this.$store.commit('cart/removeItem', { id })
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
