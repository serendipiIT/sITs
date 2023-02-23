<script>
  import { mapGetters } from 'vuex'
  import Carousel from '../components/Carousel.vue'
  import DiscoverSection from '../components/DiscoverSection.vue'
  import NewProducts from '../components/NewProducts.vue'
  import Hero from '../components/HeroSection.vue'

  export default {
    components: {
      Carousel,
      DiscoverSection,
      NewProducts,
      Hero,
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
    <Hero />
    <Carousel
      class="max-w-[95vw]"
      :height="'h-[60vh]'"
      :number-of-slides="1"
      :product-list="categories"
      :breakpoints="{ 1024: { slidesPerView: 4 }, 768: { slidesPerView: 2 } }"
    />
    <DiscoverSection />
    <NewProducts />
  </main>
</template>
