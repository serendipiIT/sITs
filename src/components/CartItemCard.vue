<template>
  <article class="flex flex-row mb-8 h-min w-full md:w-1/2 lg:w-1/3">
    <img
      :alt="item.title"
      class="h-[120px] mr-4 object-contain"
      :src="item.image"
    />
    <div class="flex flex-col flex-1">
      <div class="flex flex-row">
        <h2 class="flex-1">
          {{ item.title }}
        </h2>
        <vIcon
          class="cursor-pointer"
          name="io-close-outline"
          scale="1.4"
          title="Remove"
        />
      </div>
      <p class="flex-1">Delivery: 1 to 7 day(s)</p>
      <p>Quantity: {{ item.amount }}</p>
      <p class="inline">$ {{ calculatedPrice(item.price, item.amount) }}</p>
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
      calculatedPrice(price, amount) {
        return Math.ceil(price * amount)
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
