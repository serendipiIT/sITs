<script>
  import { OhVueIcon, addIcons } from 'oh-vue-icons'
  import { IoCloseOutline } from 'oh-vue-icons/icons'
  addIcons(IoCloseOutline)

  export default {
    components: {
      vIcon: OhVueIcon,
    },
    methods: {
      remove() {
        this.$store.commit('bookmarks/remove', {
          product: this.product,
        })
      },
      buy() {
        console.log('KÖPER')
        this.$store
          .dispatch('cart/addItem', this.product)
          .then((res) => console.log(res))
      },
    },

    props: {
      product: {
        type: Object,
        default: null,
      },
    },
  }
</script>

<template>
  <li class="border-b flex items-center gap-4 mx-4 sm:mx-0">
    <img
      :src="product.image"
      :alt="product.description"
      class="h-[10rem] m-4"
    />
    <div class="mt-4 [&>*]:mb-4">
      <p>{{ product.title }}</p>
      <p class="text-gray-500">
        {{
          product.description[0].toUpperCase() + product.description.slice(1)
        }}
      </p>
      <div class="flex gap-4 items-center justify-between">
        <p>${{ product.price }}</p>
        <p
          class="border text-center py-1 px-2 rounded-md text-white bg-neutral-800 hover:bg-neutral-100 hover:text-black transition-all cursor-pointer hover:shadow -mr-[2.5rem]"
          @click="buy"
        >
          Buy
        </p>
      </div>
    </div>
    <div class="mt-4 self-start">
      <vIcon
        class="cursor-pointer"
        name="io-close-outline"
        scale="1.4"
        title="Remove"
        @click="remove"
      />
    </div>
  </li>
</template>
