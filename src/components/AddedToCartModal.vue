<script>
  export default {
    data() {
      return {
        showModal: Boolean,
      }
    },
  }
</script>
<template>
  <Transition
    enter-from-class="translate-x-[200%] opacity-0"
    leave-to-class="translate-x-[200%] opacity-0"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-300"
  >
    <div
      v-if="showModal"
      @click="showModal = !showModal"
      class="absolute z-50 top-2 right-2"
    >
      <div class="w-[10rem] h-[3rem] bg-black">
        <p class="text-white">Produkt tillagd</p>
      </div>
    </div>
  </Transition>
</template>
