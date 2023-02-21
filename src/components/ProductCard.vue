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
        filledBookmark: localStorage.getItem("bookmarked") || "bi-bookmark",
      }
    },
    methods: {
      bookmark() {
        if (this.filledBookmark === "bi-bookmark") {
          this.filledBookmark = "bi-bookmark-fill"
        } else {
          this.filledBookmark = "bi-bookmark"
        }
      },
    },
  }
</script>
<template>
  <div class="sm:flex flex-row flex-wrap gap-10 justify-center">
    <!--REMOVE PARENT-->
    <div class="flex-row" :class="maxWidth">
      <img src="https://via.placeholder.com/200x250" alt="placeholder" />
      <div class="flex justify-between">
        <h3>TITLE</h3>
        <v-icon :name="filledBookmark" scale="1.5" @click="bookmark" />
      </div>
      <div>Info</div>
      <div class="flex justify-between">
        <h3>Price</h3>
        <p>Buy</p>
      </div>
    </div>
  </div>
</template>
