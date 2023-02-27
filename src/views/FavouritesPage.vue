<script>
  import FavouriteCard from '../components/FavouriteCard.vue'

  export default {
    components: {
      FavouriteCard,
    },
    computed: {
      bookmarks() {
        return this.$store.state.bookmarks.bookmarked
      },
    },
    created() {
      console.log(this.bookmarks)
    },
  }
</script>

<template>
  <ul v-if="bookmarks.length >= 1">
    <FavouriteCard
      v-for="bookmark in bookmarks"
      :key="bookmark.product.id"
      :product="bookmark.product"
    />
  </ul>
  <p v-else class="text-center mb-8 text-xl italic">
    You haven't saved any products!
  </p>
</template>
