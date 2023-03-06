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
        (o) => o.product.id === this.product.id,
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
            product: this.product,
          })
        } else {
          this.$store.commit('bookmarks/remove', {
            product: this.product,
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
    class="flex flex-col justify-between"
    :class="maxWidth"
    @click="$router.push(`/product/${this.product.id}`)"
  >
    <div>
      <img
        :src="product.image"
        alt="placeholder"
        class="h-auto w-[100%] object-contain bg-neutral-100"
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
    <div class="flex pb-4 items-center justify-between">
      <h3 class="text-center">${{ product.price }}</h3>
      <div class="flex items-center">
        <p
          class="border border-neutral-800 text-center py-2 px-4 hover:text-white hover:bg-neutral-800 transition-all cursor-pointer"
          @click="buy"
        >
          Buy
        </p>
        <router-link
          :to="{ name: 'productInfo', params: { id: this.product.id } }"
        >
          <button
            class="border text-center py-[calc(0.5rem+1px)] px-4 ml-2 text-white bg-neutral-800 hover:bg-neutral-100 hover:text-black transition-all cursor-pointer"
          >
            More Info
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
