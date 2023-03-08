import { ref } from 'vue'

const showModal = ref(false)

export default function useAddedModal() {
  function openModal() {
    showModal.value = true
    setTimeout(() => (showModal.value = false), 5000)
  }
  function closeModal() {
    showModal.value = false
  }

  return {
    showModal,
    openModal,
    closeModal,
  }
}
