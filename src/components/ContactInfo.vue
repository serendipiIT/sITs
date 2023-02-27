<script>
  export default {
    data() {
      return {
        showContact: false,
      }
    },

    methods: {
      moreContact() {
        this.showContact = !this.showContact
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
    },
  }
</script>

<style></style>

<template>
  <section
    class="border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white"
    @click="moreContact"
  >
    <h2 class="text-2xl font-bold ml-4">{{ title }}</h2>
    <p class="my-6">
      <slot name="content" />
    </p>
    <img :src="source" :alt="description" />
    <slot name="contactDetails" v-if="showContact" />
  </section>
</template>
