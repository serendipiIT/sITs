<template>
  <div class="m-auto text-center mt-[2rem]">
    <lottie-player
      class="m-auto mb-[2rem]"
      autoplay
      mode="normal"
      src="https://assets6.lottiefiles.com/packages/lf20_1zdomr99.json"
      style="width: 15rem"
    />
    <div v-html="orderInfo.content" />
    {{ email }}
  </div>
</template>

<script>
  // eslint-disable-next-line no-unused-vars
  import * as LottiePlayer from '@lottiefiles/lottie-player'
  export default {
    props: {
      email: {
        type: String,
        default: null,
      },
    },
    data() {
      return {
        orderInfo: this.$store.state.pages.pages[5],
      }
    },
  }
</script>

<style lang="scss" scoped></style>
