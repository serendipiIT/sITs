<script>
  import MoreArticles from './MoreArticles.vue'
  export default {
    components: {
      MoreArticles,
    },
    data() {
      return {
        allPosts: this.$store.state.journal.journal,
      }
    },
    props: {
      post: {
        type: Object,
        default: null,
      },
    },
    computed: {
      showNextButton() {
        const showNext = this.allPosts.find(
          (o) => o.id === parseInt(this.$route.params.id) + 1,
        )
        if (showNext) return true
        else return false
      },
      showPrevButton() {
        const showPrev = this.allPosts.find(
          (o) => o.id === parseInt(this.$route.params.id) - 1,
        )
        if (showPrev) return true
        else return false
      },
    },
    created() {
      console.log(this.allPosts)
    },
  }
</script>
<template>
  <div class="text-center border-b">
    <h1 class="text-3xl font-bold mt-6">{{ post.title }}</h1>
    <h3 class="text-sm text-neutral-500">{{ post.subtitle }}</h3>
    <div class="text-left mt-6 [&>p]:mb-6 [&>h2]:font-bold">
      <p class="px-6 sm:px-0">
        {{ post.content }}
      </p>
    </div>
  </div>
  <div
    class="flex justify-between p-6 border-b mb-6 text-gray-500 [&>button]:italic"
  >
    <button
      v-if="showPrevButton"
      @click="$router.push(`/article/${parseInt(this.$route.params.id) - 1}`)"
    >
      Previous
    </button>
    <div v-else />
    <button
      v-if="showNextButton"
      @click="$router.push(`/article/${parseInt(this.$route.params.id) + 1}`)"
    >
      Next
    </button>
    <div v-else />
  </div>
  <MoreArticles />
</template>
