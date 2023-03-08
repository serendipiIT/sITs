<script>
  import Hero from '../components/ImageTextAction.vue'
  import ArticlePost from '../components/Article.vue'

  export default {
    components: {
      Hero,
      ArticlePost,
    },
    data() {
      return {
        articleID: parseInt(this.$route.params.id),
        articles: this.$store.state.journal.journal,
      }
    },
    computed: {
      post() {
        return this.articles.find((o) => o.id === this.articleID)
      },
    },
    watch: {
      $route() {
        this.articleID = parseInt(this.$route.params.id)
        this.post = this.articles.find((o) => o.id === this.articleID)
      },
    },
  }
</script>

<template>
  <div class="sm:max-w-[75%] mx-auto">
    <Hero
      :mobile-image="this.post.image"
      :desktop-image="this.post.image"
      fallback-color="black"
      height="35vh"
    >
      <template #title>
        <h2 class="mb-4 text-center text-5xl text-black">
          {{ post.title }}
        </h2>
      </template>
      <template #sub-title>
        <p class="mb-12 text-center text-2xl text-black">
          {{ post.subtitle }}
        </p>
      </template>
    </Hero>
    <ArticlePost :post="post" />
  </div>
</template>
