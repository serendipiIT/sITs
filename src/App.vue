<script>
    import { mapGetters } from 'vuex'

    import Navbar from './components/Navbar.vue'
    import PageFooter from './components/PageFooter.vue'
    import GetJournal from './components/GetJournal.vue'
  <<<<<<< HEAD
    import Modal from './components/AddedToCartModal.vue'

    export default {
      setup() {
        const cartModal = useCartModal()
  =======
  >>>>>>> 0ff19da (fix cart preview modal remove item and hover exit close)

    export default {
      data() {
        return {
          closeMenu: Boolean,
          searchTerm: '',
        }
      },
      created() {
        this.$store.dispatch('products/getProducts')
      },
      watch: {
        $route(to) {
          document.title = to.meta.title || 'sITs'
        },
      },
      components: { Navbar, PageFooter, GetJournal, Modal },
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
  <body class="flex flex-col justify-between h-screen">
    <Modal />
    <Navbar :toggle="this.closeMenu" class="z-40" />
    <div @click="toggleMenu">
      <RouterView name="hero" />
    </div>
    <main class="scroll-smooth container mx-auto mb-auto" @click="toggleMenu">
      <RouterView />
    </main>
    <PageFooter class="justify-self-end" />
  </body>
  <GetJournal />
</template>
