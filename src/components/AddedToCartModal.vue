<script>
  export default {
    data() {
      return {}
    },
    computed: {
      showModal() {
        return this.$store.state.cart.modal
      },
    },
    // watch: {
    //   showModal() {
    //     setTimeout(this.$store.dispatch('cart/showModal', false), 5000)
    //   },
    // },
  }
</script>
<template>
  <Transition
    enter-from-class="translate-x-[200%] opacity-0"
    leave-to-class="translate-x-[200%] opacity-0"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-300"
  >
    <div v-if="showModal" class="fixed z-50 top-2 right-2">
      <div class="bg-neutral-800 rounded justify-center items-center p-12">
        <p class="text-white">Product has been added to basket!</p>
      </div>
    </div>
  </Transition>
</template>
