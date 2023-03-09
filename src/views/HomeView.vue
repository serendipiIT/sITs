<script>
  import { mapGetters } from 'vuex'
  // import Carousel from '../components/Carousel.vue'
  import DiscoverSection from '../components/DiscoverSection.vue'
  import NewProducts from '../components/NewProducts.vue'
  import Articles from '../components/TheJournal.vue'

  export default {
    components: {
      DiscoverSection,
      NewProducts,
      Articles,
    },
    computed: {
      ...mapGetters({
        categories: 'products/getCategories',
      }),
    },
    created() {
      console.log(this.categories)
    },
  }
</script>

<template>
  <main>
    <NewProducts />
    <DiscoverSection class="mt-12" />
    <Articles />
  </main>
</template>
