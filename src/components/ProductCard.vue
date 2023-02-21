<script>
  import { OhVueIcon, addIcons } from "oh-vue-icons"
  import { BiBookmark, BiBookmarkFill } from "oh-vue-icons/icons"
  addIcons(BiBookmark, BiBookmarkFill)

  export default {
    components: {
      "v-icon": OhVueIcon,
    },
    props: {
      maxWidth: {
        type: String,
        default: "",
      },
    },
    data() {
      return {
        // ÄNDRA ALLA "0" TILL KORTETS :KEY
        filledBookmark:
          this.$store.state.bookmarks.bookmarked[0]?.filled || "bi-bookmark",
      }
    },
    methods: {
      bookmark() {
        if (this.filledBookmark === "bi-bookmark") {
          this.filledBookmark = "bi-bookmark-fill"
          this.$store.commit("bookmarks/bookmarkedProducts", {
            id: 0,
            filled: "bi-bookmark-fill",
          })
          console.log("lägger till", this.filledBookmark)
        } else {
          this.filledBookmark = "bi-bookmark"
          this.$store.commit("bookmarks/remove", {
            id: 0,
          })
          console.log("tar bort", this.filledBookmark)
        }
      },
    },
  }
</script>
<template>
  <div class="sm:flex flex-row flex-wrap gap-10 justify-center">
    <!--REMOVE PARENT-->
    <div class="flex-row border grow-1" :class="maxWidth">
      <img src="https://via.placeholder.com/300x400" alt="placeholder" />
      <div class="p-2">
        <div class="flex justify-between">
          <h3>TITLE</h3>
          <v-icon :name="filledBookmark" scale="1.2" @click="bookmark" />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae earum
          dolor sint voluptates! Consectetur vel, modi reiciendis aut, adipisci
          impedit suscipit in aperiam enim, cum doloremque vero. Distinctio,
          eveniet fuga!
        </div>
        <div class="flex justify-between">
          <h3>Price</h3>
          <p>Buy</p>
        </div>
      </div>
    </div>
    <div class="flex-row border grow-1" :class="maxWidth">
      <img src="https://via.placeholder.com/300x400" alt="placeholder" />
      <div class="p-2">
        <div class="flex justify-between">
          <h3>TITLE</h3>
          <v-icon :name="filledBookmark" scale="1.2" @click="bookmark" />
        </div>
        <div>lore</div>
        <div class="flex justify-between">
          <h3>Price</h3>
          <p>Buy</p>
        </div>
      </div>
    </div>
  </div>
</template>
