<template>
  <div class="h-screen flex justify-center items-center" :style="myStyles">
    <div
      class="w-full self-center h-[50%] flex flex-col items-center justify-center"
    >
      <slot name="title" />
      <slot name="sub-title" />
      <slot name="action" />
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      myStyles() {
        return {
          background: `center / cover no-repeat ${this.fallbackColor} url(${this.image})`,
          color: "red",
          height: this.height,
          minHeight: "fit-content",
        }
      },
      image() {
        return this.isMobile() ? this.mobileImage : this.desktopImage
      },
    },
    data() {
      return {
        screenSize: window.innerWidth,
      }
    },
    methods: {
      isMobile() {
        return this.screenSize < 767
      },
    },
    mounted() {
      window.addEventListener(
        "resize",
        () => (this.screenSize = window.innerWidth),
      )
    },
    props: {
      desktopImage: {
        required: true,
        type: String,
      },
      fallbackColor: {
        default: "black",
        type: String,
      },
      mobileImage: {
        required: true,
        type: String,
      },
      height: {
        default: "100vh",
        type: String,
      },
    },
  }
</script>

<style lang="scss" scoped></style>
