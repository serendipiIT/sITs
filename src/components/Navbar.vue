<script>
  import { mapGetters } from 'vuex'
  import { OhVueIcon, addIcons } from 'oh-vue-icons'
  import { BiBookmarkHeart, BiCart } from 'oh-vue-icons/icons'

  import useCartModal from '../cartModal'
  import SearchBar from './SearchBar.vue'
  import CartPreviewModal from './CartPreviewModal.vue'
  addIcons(BiBookmarkHeart, BiCart)

  export default {
    setup() {
      const cartModal = useCartModal()
      return {
        showCartModal: cartModal.isOpen,
        openCartModal: cartModal.openModal,
        // closeCartModal: cartModal.closeModal,
      }
    },
    components: {
      'v-icon': OhVueIcon,
      SearchBar,
      CartPreviewModal,
    },
    computed: {
      ...mapGetters({
        ItemCount: 'cart/totalItems',
      }),
    },
    data() {
      return {
        isOpen: false,
      }
    },
    props: {
      toggle: {
        required: true,
        type: [Function, Boolean],
      },
    },
    watch: {
      isOpen() {
        if (this.isOpen) {
          document.documentElement.style.overflow = 'hidden'
          return
        } else {
          document.documentElement.style.overflow = 'auto'
        }
      },
      toggle() {
        if (this.isOpen) {
          this.isOpen = false
        }
      },
      $route() {
        this.isOpen = false
      },
    },
  }
</script>

<template>
  <nav
    class="py-4 px-6 sm:px-12 flex justify-between items-center select-none border-b bg-white"
  >
    <div class="text-2xl font-semibold flex justify-between items-center">
      <div>
        <div @click="isOpen = !isOpen" v-show="!isOpen">
          <svg
            class="fill-current w-6 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </div>
        <div @click="isOpen = !isOpen" v-show="isOpen">
          <svg
            class="fill-current w-6 cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
            />
          </svg>
        </div>
        <slot />
      </div>
    </div>

    <h1 class="text-xl cursor-pointer" @click="$router.push(`/`)">
      serendip<span class="text-2xl font-medium">IT</span> Solutions
    </h1>

    <!-- Icons -->
    <div class="flex gap-4">
      <div class="hidden sm:block">
        <v-icon
          @click="$router.push('/favorutites')"
          name="bi-bookmark-heart"
          scale="1.4"
          class="cursor-pointer"
        />
      </div>
      <div
        @mouseenter="openCartModal"
        @click="$router.push('/cart')"
        class="w-min h-min relative"
      >
        <v-icon name="bi-cart" scale="1.4" class="cursor-pointer" />
        <div
          v-if="ItemCount"
          :class="`${
            ItemCount >= 10 ? 'px-1' : 'px-2'
          } bg-yellow-300 rounded-full h-fit absolute right-[-10px] top-[-10px] cursor-pointer`"
        >
          <p :class="ItemCount >= 10 ? 'text-xs' : 'text-s'">
            {{ ItemCount }}
          </p>
        </div>
      </div>
    </div>

    <!-- Hamburger Links -->
    <transition
      enter-from-class="translate-x-[-100%] opacity-0"
      leave-to-class="translate-x-[-100%] opacity-0"
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-300"
    >
      <div
        class="select-none md:flex-col absolute top-16 left-0 h-screen bg-neutral-50 px-10"
        v-if="isOpen"
      >
        <SearchBar class="mt-8" />
        <routerLink
          :to="{ name: 'home' }"
          class="block mb-2 font-semibold text-gray-800 py-2 px-3 hover:bg-gray-200 rounded cursor-pointer"
          >Home</routerLink
        >
        <routerLink
          :to="{ name: 'products' }"
          class="block mb-2 font-semibold text-gray-800 py-2 px-3 hover:bg-gray-200 rounded cursor-pointer"
          >Products</routerLink
        >

        <routerLink
          :to="{ name: 'about' }"
          class="block mb-2 font-semibold text-gray-800 py-2 px-3 hover:bg-gray-200 rounded cursor-pointer"
          >About</routerLink
        >
        <div class="sm:hidden flex gap-4">
          <v-icon name="bi-bookmark-heart" scale="1.5" />
        </div>
      </div>
    </transition>

    <transition
      enter-from-class="translate-x-[100%] opacity-0"
      leave-to-class="translate-x-[100%] opacity-0"
      enter-active-class="transition duration-400"
      leave-active-class="transition duration-500"
    >
      <CartPreviewModal v-show="showCartModal" />
    </transition>
  </nav>
</template>
