<script>
  import DiscoverSection from '../components/DiscoverSection.vue'
  import NewProducts from '../components/NewProducts.vue'
  import Articles from '../components/TheJournal.vue'

  export default {
    components: {
      DiscoverSection,
      NewProducts,
      Articles,
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
