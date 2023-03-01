<script>
  import { OhVueIcon, addIcons } from 'oh-vue-icons'
  import {
    BiBookmarkHeart,
    BiCart,
    MdKeyboardarrowdown,
  } from 'oh-vue-icons/icons'
  import ProductCarousel from '../components/CarouselProductInfo.vue'

  addIcons(BiBookmarkHeart, BiCart, MdKeyboardarrowdown)
  export default {
    components: {
      'v-icon': OhVueIcon,
      ProductCarousel,
    },
    data() {
      return {
        productID: parseInt(this.$route.params.id),
        productList: this.$store.state.products.productList,

        showProduct: null,
        isBookmarked: false,
        menu: [
          { title: 'title1', text: 'jhgjhgjhgjhjg', readMore: false },
          { title: 'title2', text: 'jhgjhgjhgjhjg', readMore: false },
          { title: 'title3', text: 'jhgjhgjhgjhjg', readMore: false },
        ],
      }
    },
    created() {
      this.showProduct = this.productList.find((o) => o.id === this.productID)
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
    },
    watch: {
      $route() {
        this.productID = parseInt(this.$route.params.id)
        this.showProduct = this.productList.find((o) => o.id === this.productID)
      },
    },
  }
</script>

<template>
  <!-- Ta bort parent, sätt på view -->
  <div class="flex lg:flex-row flex-col lg:justify-around justify-center mt-12">
    <!-- Carousel är en komponent -->
    <ProductCarousel class="basis-2/5 h-auto lg:h-[70vh]" />
    <!-- Info är en annan -->
    <div class="basis-2/5 flex flex-col [&>*]:my-4 px-8 sm:px-0">
      <h3 class="text-3xl">{{ showProduct.title }}</h3>
      <p class="text-neutral-500 text-lg">{{ showProduct.created_at }}</p>
      <div class="text-2xl">${{ showProduct.price }}</div>
      <div class="text-neutral-500 text-lg">
        {{ showProduct.description }}
      </div>
      <div class="flex">
        <v-icon
          v-if="isBookmarked"
          name="bi-bookmark-fill"
          fill="#262626"
          scale="2.6"
          @click="bookmark"
          class="cursor-pointer"
        />
        <v-icon
          v-else
          name="bi-bookmark"
          fill="#262626"
          scale="2.6"
          @click="bookmark"
          class="cursor-pointer"
        />
        <div class="btn transition-all text-lg w-[100%]">Add to Cart</div>
      </div>
      <div>
        <ul>
          <li
            v-for="menuItem in menu"
            :key="menuItem.title"
            @click="menuItem.readMore = !menuItem.readMore"
          >
            <p>
              {{ menuItem.title }}
              <span class="float-right"
                ><v-icon
                  v-if="!menuItem.readMore"
                  name="md-keyboardarrowdown"
                /><v-icon
                  v-if="menuItem.readMore"
                  name="md-keyboardarrowdown"
                  flip="vertical"
                />
              </span>
            </p>
            <Transition name="slide-fade">
              <p v-if="menuItem.readMore">{{ menuItem.text }}</p>
            </Transition>
          </li>
        </ul>
      </div>
      <div class="btn transition-all text-lg">Checkout</div>
    </div>
  </div>
</template>
<style>
  .slide-fade-enter-active {
    transition: all 0.3s;
    height: 1.4em;
  }

  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    height: 1.4em;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
    height: 0;
  }
</style>
