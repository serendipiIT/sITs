<template>
  <h1 class="text-3xl text-center my-8">Cart</h1>
  <div>
    <ul>
      <li :key="item.id" v-for="item in itemList">
        <div class="flex flex-row mb-8 h-min">
          <!-- Måste lägga till bild -->
          <img
            :alt="item.title"
            class="h-[120px] mr-4 object-contain"
            src="../../assets/product-img/example.jpg"
          />
          <div class="flex flex-col">
            <h2>
              {{ item.title }}
            </h2>
            <p class="flex-1">Delivery: 1 to 7 day(s)</p>
            <p>Quantity: {{ item.amount }}</p>
            <p class="inline">
              $ {{ calculatedPrice(item.price, item.amount) }}
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      itemList() {
        return this.$store.state.cart.items
      },
    },
    methods: {
      calculatedPrice(price, amount) {
        return Math.ceil(price * amount)
      },
    },
  }
</script>

<style lang="scss" scoped></style>
