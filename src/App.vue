<script>
  import { mapGetters } from 'vuex'

  import Navbar from './components/Navbar.vue'
  import PageFooter from './components/PageFooter.vue'
  export default {
    created() {
      this.$store.dispatch('products/getProducts')
      // console.log("KATEGORIER: ", this.categories)
    },
    watch: {
      $route(to) {
        document.title = to.meta.title || 'sITs'
      },
    },
    components: { Navbar, PageFooter },
    computed: {
      ...mapGetters({
        categories: 'products/getCategories',
      }),
    },
  }
</script>

<template>
  <body class="">
    <Navbar />
    <main class="scroll-smooth container mx-auto">
      <RouterView />
    </main>
    <PageFooter />
  </body>
</template>
