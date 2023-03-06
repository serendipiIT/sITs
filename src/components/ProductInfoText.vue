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
          { title: 'title1', text: 'jhgjhgjhgjhjg', readMore: false },
          { title: 'title2', text: 'jhgjhgjhgjhjg', readMore: false },
          { title: 'title3', text: 'jhgjhgjhgjhjg', readMore: false },
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

      for (let i = 0; i < this.menu.length; i++) {
        this.menu[i].title = `Title ${i}`
        // this.menu[i].text = `${this.product.description}`
      }
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
    <h3 class="text-3xl">{{ product.title }}</h3>
    <p class="text-neutral-500 text-lg">{{ product.category }}</p>
    <div class="text-2xl">${{ product.price }}</div>
    <div class="text-neutral-500 text-lg">
      {{ product.description }}
    </div>
    <div class="flex">
      <v-icon
        v-if="isBookmarked"
        name="bi-bookmark-fill"
        fill="#262626"
        scale="2.5"
        @click="bookmark"
        class="cursor-pointer"
      />
      <v-icon
        v-else
        name="bi-bookmark"
        fill="#262626"
        scale="2.5"
        @click="bookmark"
        class="cursor-pointer"
      />
      <div class="btn transition-all text-lg w-[100%]">Add to Cart</div>
    </div>
    <div>
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
