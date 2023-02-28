<!-- import { saveEmail } from 'store/modules/email' -->
<script>
  export default {
    components: {},

    computed: {
      storeEmail() {
        return this.$store.getters.getEmail
      },
    },

    data() {
      return {
        emailProvided: false,
        email: '',
      }
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
    },

    methods: {
      signUp() {
        this.$store.dispatch('email/saveEmail', this.email)
        this.email = ''
        this.emailProvided = true
      },
    },
  }
</script>

<style></style>

<template>
  <section class="border border-gray-300 bg-gray-100 p-4 mt-4 hover:bg-white">
    <div class="">
      <h2 class="text-2xl font-bold">{{ title }}</h2>
      <p class="mt-4">
        <slot />
      </p>
    </div>
    <form class="flex flex-col" @submit.prevent="signUp">
      <label for="newsletter">Sign up to get the latest news:</label>
      <input
        class="w-72 mt-4"
        type="email"
        name="newsletter"
        id="email"
        v-model="email"
        placeholder="your@email.here"
      />
      <input
        class="w-24 mt-4 bg-indigo-500 hover:bg-indigo-700"
        type="button"
        value="Sign up"
        @click="signUp"
      />
    </form>
    <p v-if="emailProvided">Thank you! {{ storeEmail }}</p>
    <p v-else>Please provide a valid e-mail {{ email }}</p>
  </section>
</template>
