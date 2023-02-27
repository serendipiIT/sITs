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
  <ul>
    <FavouriteCard
      v-for="bookmark in bookmarks"
      :key="bookmark.product.id"
      :product="bookmark.product"
    />
  </ul>
</template>
