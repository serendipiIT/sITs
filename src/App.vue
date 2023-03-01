<script>
  import { mapGetters } from 'vuex'

  import Navbar from './components/Navbar.vue'
  import PageFooter from './components/PageFooter.vue'
  export default {
    data() {
      return {
        closeMenu: Boolean,
      }
    },
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
    methods: {
      toggleMenu() {
        this.closeMenu = !this.closeMenu
      },
    },
  }
</script>

<template>
  <body class="flex flex-col">
    <Navbar :toggle="this.closeMenu" class="z-50" />
    <main class="scroll-smooth container mx-auto" @click="toggleMenu">
      <RouterView />
    </main>
    <PageFooter class="justify-self-end" />
  </body>
</template>
