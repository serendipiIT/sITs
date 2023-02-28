<script>
  export default {
    data() {
      return {
        showInfo: false,
      }
    },

    methods: {
      moreInfo() {
        this.showInfo = !this.showInfo
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
      <p class="mt-4 ml-4">
        <slot name="content"></slot>
        <slot name="allContent" v-if="showInfo"></slot>
      </p>
      <button
        class="w-24 mt-4 ml-8 bg-sky-500 hover:bg-indigo-700"
        @click="moreInfo"
        v-if="showInfo"
      >
        Read Less
      </button>
      <button
        class="w-24 mt-4 ml-8 bg-indigo-500 hover:bg-indigo-700"
        @click="moreInfo"
        v-else
      >
        Read More
      </button>
    </div>
    <div class="w-1/2">
      <img class="object-cover h-full" :src="source" :alt="description" />
    </div>
  </section>
</template>
