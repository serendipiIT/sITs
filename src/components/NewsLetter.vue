<script>
  export default {
    components: {},

    data() {
      return {
        emailProvided: false,
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
      <p class="justify-end">Learn more >>></p>
    </div>
    <form class="flex flex-col">
      <label for="newsletter">Sign up to get the latest news:</label>
      <input
        class="w-72 mt-4"
        type="email"
        name="newsletter"
        placeholder="your@email.here"
      />
      <input
        class="w-24 mt-4 bg-indigo-500 hover:bg-indigo-700"
        type="button"
        value="Sign up"
        @click="signUp"
      />
    </form>
    <p v-if="emailProvided">Thank you!</p>
    <p v-else>Please provide a valid e-mail</p>
  </section>
</template>
