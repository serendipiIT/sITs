<script>
  export default {
    computed: {
      journals() {
        const arr = this.$store.state.journal.journal.slice(0, 2)
        return arr.reverse()
      },
    },
  }
</script>
<template>
  <h2 class="text-center mt-16 mb-8 text-4xl font-medium">The Journal</h2>
  <ul class="mb-16">
    <li
      v-for="journal in journals"
      :key="journal.id"
      class="p-8 border-y border-neutral-400 flex flex-col-reverse sm:flex-row justify-between items-center cursor-pointer"
      @click="$router.push(`/article/${journal.id}`)"
    >
      <div class="sm:self-start sm:mt-8">
        <h3 class="hidden sm:inline-flex text-neutral-500 text-sm">
          {{ journal.subtitle }}
        </h3>
        <h2
          class="sm:mt-12 mt-8 mb-4 text-3xl sm:w-[45vw] sm:text-left text-center"
        >
          {{ journal.title }}
        </h2>
        <p class="text-lg sm:w-[45vw] sm:text-left text-center">
          {{ journal.content }}
        </p>
      </div>
      <img
        :src="journal.image"
        class="object-cover w-[80%] h-[20rem] sm:max-w-[20rem]"
      />
    </li>
  </ul>
</template>
