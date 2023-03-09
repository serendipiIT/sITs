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
      <h2 class="m-4 text-2xl font-bold">{{ title }}</h2>
      <p class="m-4">
        <slot />
      </p>
    </div>
    <form class="flex flex-col" @submit.prevent="signUp">
      <label class="m-4" for="newsletter"
        >Sign up to get the latest news:</label
      >
      <input
        class="md:w-72 h-12 m-4"
        type="email"
        name="newsletter"
        id="email"
        v-model="email"
        placeholder="your@email.here"
      />
      <input
        class="md:w-72 my-4 mx-4 bg-transparent hover:bg-zinc-100 text-zinc-800 font-semibold hover:text-black py-2 px-4 border border-zinc-500 hover:border-transparent rounded"
        type="button"
        value="Sign up"
        @click="signUp"
      />
    </form>
    <p class="m-4" v-if="emailProvided">
      Thank you! Check your mail for a premium offer. {{ storeEmail }}
    </p>
    <p class="m-4" v-else>Please provide a valid e-mail {{ email }}</p>
  </section>
</template>
