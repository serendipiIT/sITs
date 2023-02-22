<script>
  import SearchBar from "./SearchBar.vue"
  import { OhVueIcon, addIcons } from "oh-vue-icons"
  import { BiBookmarkHeart, BiCart } from "oh-vue-icons/icons"
  addIcons(BiBookmarkHeart, BiCart)

  export default {
    components: {
      "v-icon": OhVueIcon,
      SearchBar,
    },
    data() {
      return {
        isOpen: false,
      }
    },
    watch: {
      isOpen: function () {
        if (this.isOpen) {
          document.documentElement.style.overflow = "hidden"
          return
        } else {
          document.documentElement.style.overflow = "auto"
        }
      },
    },
  }
</script>

<template>
  <nav
    class="py-4 px-12 flex justify-between items-center select-none mb-12 border-b bg-white"
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
      </div>
    </div>

    <h1 class="text-xl">
      serendipi<span class="text-3xl font-medium">IT</span> Solutions
    </h1>

    <!-- Icons -->
    <div class="flex gap-4">
      <v-icon name="bi-bookmark-heart" scale="1.5" />
      <v-icon name="bi-cart" scale="1.4" />
    </div>

    <!-- Hamburger Links -->
    <transition
      enter-from-class="translate-x-[-100%] opacity-0"
      leave-to-class="translate-x-[-100%] opacity-0"
      enter-active-class="transition duration-300"
      leave-active-class="transition duration-300"
    >
      <div
        class="select-none md:flex-col absolute top-16 left-0 h-screen bg-white px-10 mt-[0.29rem]"
        v-if="isOpen"
      >
        <SearchBar class="mt-8" />
        <routerLink
          :to="{ name: 'home' }"
          class="block mb-2 font-semibold text-gray-800 py-2 px-3 hover:bg-gray-200 rounded cursor-pointer"
          >Home</routerLink
        >
        <routerLink
          :to="{ name: 'apiProducts' }"
          class="block mb-2 font-semibold text-gray-800 py-2 px-3 hover:bg-gray-200 rounded cursor-pointer"
          >ApiProducts</routerLink
        >
        <routerLink
          :to="{ name: 'products' }"
          class="block mb-2 font-semibold text-gray-800 py-2 px-3 hover:bg-gray-200 rounded cursor-pointer"
          >Products</routerLink
        >
        <routerLink
          :to="{ name: 'career' }"
          class="block mb-2 font-semibold text-gray-800 py-2 px-3 hover:bg-gray-200 rounded cursor-pointer"
          >Career</routerLink
        >

        <routerLink
          :to="{ name: 'about' }"
          class="block mb-2 font-semibold text-gray-800 py-2 px-3 hover:bg-gray-200 rounded cursor-pointer"
          >About</routerLink
        >
      </div>
    </transition>
  </nav>
</template>
