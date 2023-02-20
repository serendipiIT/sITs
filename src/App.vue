<script>
  import CitiesList from "./components/CitiesList.vue"
  import HelloWorld from "./components/HelloWorld.vue"
  import Carousel from "./components/Carousel.vue"
  import NewProduct from "./components/NewProduct.vue"

  export default {
    created() {
      this.$store.dispatch("get").then(() => {
        this.products = this.$store.state.productList
      })
    },
    components: {
      CitiesList,
      HelloWorld,
      Carousel,
      NewProduct,
    },
    data() {
      return {
        products: null,
      }
    },
  }
</script>

<template>
  <nav class="flex col">
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </nav>
  <main class="scroll-smooth">
    <RouterView />
  </main>
  <HelloWorld msg="Hello World!" />
  <Carousel class="my-10" />
  <CitiesList />
  <div class="flex flex-row flex-wrap">
    <NewProduct
      :key="product.id"
      v-for="product in products"
      :product="product"
    />
  </div>
</template>
