<script>
  export default {}
</script>

<template>
  <div
    class="h-[94vh] flex items-center bg-[url('../../assets/img/landscape/force-majeure-Hfjc53jRO-Y-unsplash.jpg')] bg-cover bg-left"
  >
    <div class="text-center">
      <h1 class="text-2xl mb-8 sm:max-w-[40%] px-8 mx-auto">
        Step up your fashion game without breaking the bank!
        <span class="text-indigo-600">Discover</span> our trendy and affordable
        clothing collection. From casual tops to chic dresses, we've got you
        covered for every occasion. Shop now and upgrade your wardrobe today!
      </h1>

      <div class="md:max-w-[40%] mx-auto px-8">
        <p class="text-gray-800">
          Elevate your fashion game with our trendy and affordable clothing
          collection!
        </p>
      </div>

      <div class="mb-6 mt-12">
        <button
          @click="$router.push('/products')"
          class="py-2 px-4 md:py-4 md:px-6 mr-2 border select-none hover:bg-neutral-400 bg-neutral-800 rounded shadow-lg text-white"
        >
          SHOW PRODUCTS
        </button>
      </div>
    </div>
  </div>
</template>
