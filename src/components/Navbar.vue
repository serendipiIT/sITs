<script>
  export default {
    data() {
      return {}
    },
  }
</script>

<template>
  <nav
    class="flex justify-between px-12 border-b py-1 mb-6 drop-shadow-sm sticky top-0 bg-white"
  >
    <router-link :to="{ name: 'home' }">sITs</router-link>
    <ul class="flex gap-4">
      <li><router-link :to="{ name: 'products' }">Products</router-link></li>
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'about' }">About</router-link></li>
    </ul>
  </nav>
</template>
