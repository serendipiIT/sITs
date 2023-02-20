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
    <routerLink :to="{ name: 'home' }">sITs</routerLink>
    <ul class="flex gap-4">
      <routerLink :to="{ name: 'products' }">Products</routerLink>
      <routerLink to="/about">About</routerLink>
      <li>Länk</li>
      <li>Länk</li>
    </ul>
  </nav>
</template>
