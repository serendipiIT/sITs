<template>
  <div>
    <lottie-player
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
