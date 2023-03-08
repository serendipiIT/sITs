<script>
  export default {
    data() {
      return {
        showInfo: false,
        showDiv: true,
      }
    },

    methods: {
      moreInfo() {
        this.showInfo = !this.showInfo
      },
      toggleDiv() {
        this.showDiv = !this.showDiv
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
  <section :class="reverse">
    <div class="w-1/2 order-first">
      <h2 class="text-2xl font-bold ml-4">{{ title }}</h2>
      <slot name="content" />
      <slot name="allContent" v-if="showInfo" />
      <button
        class="my-4 mx-4 bg-transparent hover:bg-zinc-100 text-zinc-800 font-semibold hover:text-black py-2 px-4 border border-zinc-500 hover:border-transparent rounded"
        @click="moreInfo"
        v-if="showInfo"
      >
        Close
      </button>
      <button
        class="my-4 mx-4 bg-transparent hover:bg-zinc-100 text-zinc-800 font-semibold hover:text-black py-2 px-4 border border-zinc-500 hover:border-transparent rounded"
        @click="moreInfo"
        v-else
      >
        Find store
      </button>
    </div>
    <div class="w-1/2" v-if="!showInfo">
      <img
        class="object-cover h-full"
        :src="source"
        :alt="description"
        v-if="!showInfo"
        @click="moreInfo"
      />
    </div>
  </section>
</template>
