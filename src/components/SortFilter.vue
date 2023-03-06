<template>
  <div class="flex justify-between p-2 mt-4">
    <button class="btn btn-invert" @click="isOpen = !isOpen" v-show="!isOpen">
      Filter
    </button>
    <button class="btn btn-invert">Sort By</button>
  </div>

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
        :to="{ name: 'about' }"
        class="block mb-2 font-semibold text-gray-800 py-2 px-3 hover:bg-gray-200 rounded cursor-pointer"
        >About</routerLink
      >
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'SortFilter',
    data() {
      return {
        isOpen: false,
      }
    },
    props: {
      toggle: {
        type: Boolean,
        default: true,
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

<style scoped>
  .btn-invert {
    background-color: rgb(255, 255, 255);
    color: black;
  }
  .btn-invert:hover {
    background-color: #ebebeb;
  }
</style>
