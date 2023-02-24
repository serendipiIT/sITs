<script>
  import { OhVueIcon, addIcons } from 'oh-vue-icons'
  import { BiBookmark, BiBookmarkFill } from 'oh-vue-icons/icons'
  addIcons(BiBookmark, BiBookmarkFill)

  export default {
    components: {
      'v-icon': OhVueIcon,
    },
    data() {
      return {
        isBookmarked: false,
        //array med objekt som är sparade
        storedBookmarks: this.$store.state.bookmarks.bookmarked,
      }
    },
    created() {
      let bookmarkedProducts = this.storedBookmarks.find(
        (o) => o.product === this.product.id,
      )
      if (bookmarkedProducts !== undefined) {
        this.isBookmarked = true
      }
    },
    props: {
      maxWidth: {
        default: 'max-w-[100%]',
        type: String,
      },
      product: {
        type: Object,
        default: null,
      },
    },
    methods: {
      bookmark() {
        this.isBookmarked = !this.isBookmarked
        if (this.isBookmarked) {
          this.$store.commit('bookmarks/bookmarkedProducts', {
            product: this.product.id,
          })
        } else {
          this.$store.commit('bookmarks/remove', {
            product: this.product.id,
          })
        }
      },
      buy() {
        console.log('KÖPER')
        this.$store
          .dispatch('cart/addItem', this.product)
          .then((res) => console.log(res))
      },
    },
  }
</script>
<template>
  <div
    class="flex flex-col justify-between shadow hover:shadow-lg transition-all"
    :class="maxWidth"
  >
    <div>
      <img
        :src="product.image"
        alt="placeholder"
        class="h-[20rem] w-[100%] object-contain bg-neutral-100 py-8 sm:min-h-[55vh]"
      />
      <div class="p-6">
        <div class="flex justify-between">
          <h3>{{ product.title.slice(0, 15) + '...' }}</h3>
          <v-icon
            v-if="isBookmarked"
            name="bi-bookmark-fill"
            scale="1.2"
            @click="bookmark"
            class="cursor-pointer"
          />
          <v-icon
            v-else
            name="bi-bookmark"
            scale="1.2"
            @click="bookmark"
            class="cursor-pointer"
          />
        </div>
        <div class="pt-4 text-gray-500 text-sm">
          {{ product.description.slice(0, 100) + '...' }}
        </div>
      </div>
    </div>
    <div class="flex justify-between px-6 pb-4 items-center">
      <h3
        class="border text-center p-2 rounded-md bg-neutral-100 transition-all"
      >
        ${{ product.price }}
      </h3>
      <div class="flex sm:basis-1/2 lg:grow-0 grow items-center">
        <button
          class="flex-1 border text-center ml-4 py-2 rounded-md text-white bg-neutral-800 hover:bg-neutral-100 hover:text-black transition-all cursor-pointer hover:shadow"
        >
          More Info
        </button>
        <p
          class="flex-1 border text-center ml-4 py-2 rounded-md text-white bg-neutral-800 hover:bg-neutral-100 hover:text-black transition-all cursor-pointer hover:shadow"
          @click="buy"
        >
          Buy
        </p>
      </div>
    </div>
  </div>
</template>
