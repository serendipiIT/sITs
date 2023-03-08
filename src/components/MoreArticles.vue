<script>
  export default {
    data() {
      return {}
    },
    computed: {
      journals() {
        return this.$store.state.journal.journal
      },
    },
  }
</script>
<template>
  <ul class="mb-6 flex gap-x-12 gap-y-6 flex-wrap p-12 sm:p-0">
    <li
      v-for="journal in journals"
      :key="journal.id"
      class="flex flex-col items-center sm:max-w-[29%] max-w-[90&] hover:shadow-lg transition-shadow duration-200 p-4"
    >
      <img
        :src="journal.image"
        class="object-cover w-full h-[15rem] mb-2 cursor-pointer"
        @click="$router.push(`/article/${journal.id}`)"
      />
      <div class="[&>*]:my-2">
        <h3 class="hidden sm:inline-flex text-neutral-500 text-sm">
          {{ journal.subtitle }}
        </h3>
        <h2 class="text-lg font-semibold sm:text-left text-center">
          {{ journal.title }}
        </h2>
        <p class="sm:text-left text-center text-sm">
          {{ journal.content.slice(0, 300) }}
        </p>
        <p
          class="float-right cursor-pointer border p-2 bg-neutral-800 text-white hover:bg-white hover:text-black transition-all duration-500"
          @click="$router.push(`/article/${journal.id}`)"
        >
          Read More...
        </p>
      </div>
    </li>
  </ul>
</template>
