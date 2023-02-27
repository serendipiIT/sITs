<template>
  <article class="flex flex-row border">
    <img
      :alt="item.title"
      class="h-[150px] mr-4 object-contain max-w-[40%]"
      :src="item.image"
    />
    <div class="flex flex-col flex-1">
      <div class="flex flex-row">
        <h2 class="flex-1">
          {{ item.title }}
        </h2>
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
      <p class="inline">$ {{ item.price }}</p>
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
