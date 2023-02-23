<script>
  import { OhVueIcon, addIcons } from 'oh-vue-icons'
  import { BiBookmark, BiBookmarkFill } from 'oh-vue-icons/icons'
  addIcons(BiBookmark, BiBookmarkFill)

  export default {
    components: {
      'v-icon': OhVueIcon,
    },
    data() {
      return {
        // ÄNDRA ALLA "0" TILL KORTETS :KEY
        filledBookmark:
          this.$store.state.bookmarks.bookmarked[0]?.filled || 'bi-bookmark',
      }
    },
    props: {
      productList: {
        type: Object,
        default: null,
      },
      maxWidth: {
        default: 'max-w-[100%]',
        type: String,
      },
    },
    methods: {
      bookmark() {
        if (this.filledBookmark === 'bi-bookmark') {
          this.filledBookmark = 'bi-bookmark-fill'
          this.$store.commit('bookmarks/bookmarkedProducts', {
            id: this.productList.id,
            filled: 'bi-bookmark-fill',
          })
          console.log('lägger till', this.filledBookmark)
        } else {
          this.filledBookmark = 'bi-bookmark'
          this.$store.commit('bookmarks/remove', {
            id: this.productList.id,
          })
          console.log('tar bort', this.filledBookmark)
        }
      },
      buy() {
        console.log('KÖPER')
        this.$store
          .dispatch('cart/addItem', this.productList)
          .then((res) => console.log(res))
      },
    },
  }
</script>
<template>
  <div class="flex-row border" :class="maxWidth">
    <img
      :src="productList.image"
      alt="placeholder"
      class="h-[20rem] w-[100%] object-contain bg-white"
    />
    <div class="p-2">
      <div class="flex justify-between">
        <h3>{{ productList.title }}</h3>
        <v-icon :name="filledBookmark" scale="1.2" @click="bookmark" />
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae earum
        dolor sint voluptates! Consectetur vel, modi reiciendis aut, adipisci
        impedit suscipit in aperiam enim, cum doloremque vero. Distinctio,
        eveniet fuga!
      </div>
    </div>
    <div class="flex justify-between">
      <h3>Price</h3>
      <p @click="buy">Buy</p>
    </div>
  </div>
</template>
