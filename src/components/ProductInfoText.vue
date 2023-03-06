<script>
  import { OhVueIcon, addIcons } from 'oh-vue-icons'
  import {
    BiBookmarkHeart,
    BiCart,
    MdKeyboardarrowdown,
  } from 'oh-vue-icons/icons'

  addIcons(BiBookmarkHeart, BiCart, MdKeyboardarrowdown)

  export default {
    components: {
      'v-icon': OhVueIcon,
    },
    data() {
      return {
        isBookmarked: false,
        storedBookmarks: this.$store.state.bookmarks.bookmarked,

        menu: [
          { title: 'Material', text: '', readMore: false },
          { title: 'Size Guide', text: '', readMore: false },
          { title: 'Stock', text: '', readMore: false },
        ],
      }
    },
    methods: {
      bookmark() {
        this.isBookmarked = !this.isBookmarked
        if (this.isBookmarked) {
          console.log('Lägger till')
          this.$store.commit('bookmarks/bookmarkedProducts', {
            product: this.product,
          })
        } else {
          console.log('Tar bort')
          this.$store.commit('bookmarks/remove', {
            product: this.product,
          })
        }
      },
      checkIfBookmarked() {
        let bookmarkedProducts = this.storedBookmarks.find(
          (o) => o.product.id === this.product.id,
        )
        if (bookmarkedProducts !== undefined) {
          this.isBookmarked = true
        } else {
          this.isBookmarked = false
        }
      },
    },
    created() {
      this.checkIfBookmarked()

      // Object.keys(this.product).forEach((key) => {
      //   this.product[key] === 'material'
      // })
      // console.log(this.product)

      // const map = this.product.map((infoKey) => infoKey)
      // console.log(map)

      // for (let i = 0; i < this.menu.length; i++) {
      //   this.menu[i].text = this.product.stock
      // }
    },
    watch: {
      product() {
        this.checkIfBookmarked()
      },
    },
    props: {
      product: {
        type: Object,
        default: null,
      },
    },
  }
</script>
<template>
  <div>
    <div class="flex justify-between my-2">
      <h3 class="text-3xl">{{ product.title }}</h3>
      <v-icon
        v-if="isBookmarked"
        name="bi-bookmark-fill"
        fill="#262626"
        scale="1.7"
        @click="bookmark"
        class="cursor-pointer"
      />
      <v-icon
        v-else
        name="bi-bookmark"
        fill="#262626"
        scale="1.7"
        @click="bookmark"
        class="cursor-pointer"
      />
    </div>

    <div class="text-2xl mb-2">${{ product.price }}</div>
    <p class="text-neutral-500 text-lg mb-2">{{ product.category }}</p>

    <div class="text-neutral-500 text-lg mb-4">
      {{ product.description }}
    </div>

    <div class="btn transition-all text-lg w-[100%] mb-4">Add to Cart</div>
    <div class="mb-4">
      <ul>
        <li
          v-for="menuItem in menu"
          :key="menuItem.title"
          @click="menuItem.readMore = !menuItem.readMore"
        >
          <p>
            {{ menuItem.title }}
            <span class="float-right"
              ><v-icon
                v-if="!menuItem.readMore"
                name="md-keyboardarrowdown"
              /><v-icon
                v-if="menuItem.readMore"
                name="md-keyboardarrowdown"
                flip="vertical"
              />
            </span>
          </p>
          <Transition name="slide-fade">
            <p v-if="menuItem.readMore">{{ menuItem.text }}</p>
          </Transition>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
  .slide-fade-enter-active {
    transition: all 0.3s;
    height: 1.5rem;
  }

  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    height: 1.5rem;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
    height: 0;
  }
</style>
