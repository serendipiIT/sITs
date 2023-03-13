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
  <div class="flex flex-col justify-between" :class="maxWidth">
    <div>
      <img
        :src="product.image"
        alt="placeholder"
        class="h-auto w-[100%] object-contain bg-neutral-100 cursor-pointer hover:scale-105 transition-all duration-500"
        @click="$router.push(`/product/${this.product.id}`)"
      />
      <div class="mt-6">
        <div class="flex justify-between">
          <h3>{{ product.title }}</h3>
          <div class="w-[30px]">
            <v-icon
              v-if="isBookmarked"
              :name="'bi-bookmark-fill'"
              fill="#262626"
              scale="1.2"
              @click="bookmark"
              class="cursor-pointer"
              :class="{ animation: true }"
            />
            <v-icon
              v-else
              :name="'bi-bookmark'"
              scale="1.2"
              fill="#262626"
              @click="bookmark"
              class="cursor-pointer"
              :class="{ animation: true }"
            />
          </div>
        </div>
        <div
          class="py-1 pr-2 text-gray-500 text-sm cursor-pointer"
          @click="$router.push(`/product/${this.product.id}`)"
          v-html="product.description.slice(0, 100) + '...'"
        />
        <!-- {{ product.description.slice(0, 100) + '...' }}
        </div>-->
      </div>
    </div>
    <div class="flex pb-4 items-center justify-between">
      <h3 class="text-center">${{ product.price }}</h3>
    </div>
  </div>
</template>

<style>
  .animation {
    animation: fadeIn 0.7s;
    /* transform: translate3d(0, 0, 0); */
  }

  @keyframes fadeIn {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
</style>
