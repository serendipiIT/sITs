import { ref } from 'vue'

const isOpen = ref(false)

export default function useCartModal() {
  function openModal() {
    isOpen.value = true
  }
  function closeModal() {
    isOpen.value = false
  }

  return {
    isOpen,
    openModal,
    closeModal,
  }
}
