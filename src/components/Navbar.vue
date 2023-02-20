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
      <router-link :to="{ name: 'products' }">Products</router-link>
      <li>Länk</li>
      <li>Länk</li>
      <li>Länk</li>
    </ul>
  </nav>
</template>
