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
              scale="1.2"
              @click="bookmark"
              class="cursor-pointer"
              :class="{ shake: isBookmarked }"
            />
            <v-icon
              v-else
              :name="'bi-bookmark'"
              scale="1.2"
              @click="bookmark"
              class="cursor-pointer"
              :class="{ shake: isBookmarked }"
            />
          </div>
        </div>
        <div
          class="py-1 pr-2 text-gray-500 text-sm cursor-pointer"
          @click="$router.push(`/product/${this.product.id}`)"
        >
          {{ product.description.slice(0, 100) + '...' }}
        </div>
      </div>
    </div>
    <div class="flex pb-4 items-center justify-between">
      <h3 class="text-center">${{ product.price }}</h3>
    </div>
  </div>
</template>

<style>
  .shake {
    animation: fadeIn 0.175s;
    /* transform: translate3d(0, 0, 0); */
  }

  @keyframes fadeIn {
    0% {
      opacity: 0.3;
    }
    20% {
      opacity: 0.3;
    }
    40% {
      opacity: 0.3;
    }
    60% {
      opacity: 0.5;
    }
    80% {
      opacity: 0.9;
    }
    100% {
      opacity: 1;
    }
    /* 10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    } */
  }
</style>
