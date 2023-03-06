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
  <h1 class="text-center mb-8 text-3xl mt-12">Favorites</h1>
  <ul v-if="bookmarks.length >= 1">
    <FavouriteCard
      v-for="bookmark in bookmarks"
      :key="bookmark.product.id"
      :product="bookmark.product"
    />
  </ul>
  <div v-else class="text-center mb-8 text-xl italic">
    <p>
      You have no items bookmarked. In your Favorites, you can add products you
      would like or plan to buy in the future.
    </p>
    <p>
      <span class="font-bold">How to add a product:</span> To add a product to
      your Favorites, use the bookmark that appears to the right of the product
      title of the product.
    </p>
  </div>
</template>
