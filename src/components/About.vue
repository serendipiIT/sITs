<script>
  export default {
    data() {
      return {
        showInfo: false,
        showImage: true,
      }
    },

    methods: {
      moreInfo() {
        this.showInfo = !this.showInfo
      },
      toggleImage() {
        this.showImage = !this.showImage
      },
    },

    props: {
      title: {
        type: String,
        default: 'Title goes here',
      },
      paragraph: {
        type: String,
        default: 'Main text goes here',
      },
      source: {
        type: String,
        default: '../../assets/about-img/find-us.jpg',
      },
      description: {
        type: String,
        default: 'Image description',
      },
      reverse: {
        type: String,
        default:
          'flex flex-row-reverse border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white',
      },
    },
  }
</script>

<style></style>

<template>
  <section :class="reverse" class="w-[90%] md:w-auto">
    <div class="md:w-1/2 order-first">
      <h2 class="text-2xl font-bold ml-4">{{ title }}</h2>
      <article class="my-4 mx-4">
        <slot name="content" />
        <slot name="allContent" v-if="showInfo" />
      </article>
      <button
        class="my-4 mx-4 bg-transparent hover:bg-zinc-100 text-zinc-800 font-semibold hover:text-black py-2 px-4 border border-zinc-500 hover:border-transparent rounded"
        @click="
          () => {
            moreInfo()
            toggleImage()
          }
        "
        v-if="showInfo"
      >
        Read Less
      </button>
      <button
        class="my-4 mx-4 bg-transparent hover:bg-zinc-100 text-zinc-800 font-semibold hover:text-black py-2 px-4 border border-zinc-500 hover:border-transparent rounded"
        @click="
          () => {
            moreInfo()
            toggleImage()
          }
        "
        v-else
      >
        Read More
      </button>
    </div>
    <div class="w-1/2 hidden md:block" v-show="showImage">
      <img
        class="object-cover h-full"
        :src="source"
        :alt="description"
        @click="
          () => {
            moreInfo()
            toggleImage()
          }
        "
      />
    </div>
  </section>
</template>
