<script>
  import useAddedModal from '../addedModal'

  export default {
    setup() {
      const addedModal = useAddedModal()
      return {
        showModal: addedModal.showModal,
        closeAddedModal: addedModal.closeModal,
      }
    },
    data() {
      return {}
    },
    watch: {
      showModal() {
        console.log(this.showModal)
      },
    },
    computed: {
      // ADDTOCARTMODAL MED VUEX
      // showModal() {
      //   return this.$store.state.cart.modal
      // },
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
      @click="closeAddedModal"
      class="fixed z-50 top-2 right-2"
    >
      <div class="bg-neutral-800 rounded justify-center items-center p-12">
        <p class="text-white">Product has been added to basket!</p>
      </div>
    </div>
  </Transition>
</template>
