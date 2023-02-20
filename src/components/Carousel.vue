<script>
  import { Swiper, SwiperSlide } from "swiper/vue"
  import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper"

  import "swiper/css"
  import "swiper/css/navigation"
  import "swiper/css/pagination"
  import "swiper/css/scrollbar"

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper)
      }
      const onSlideChange = () => {
        console.log("slide change")
      }
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, A11y, Autoplay],
      }
    },
    props: {
      height: String,
    },
  }
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="4"
    :space-between="10"
    navigation
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :class="height"
  >
    <swiper-slide>
      <img
        src="https://via.placeholder.com/200x250"
        alt="placeholder"
        class="w-full h-full object-cover"
    /></swiper-slide>
    <swiper-slide>
      <img
        src="https://via.placeholder.com/200x250"
        alt="placeholder"
        class="w-full h-full object-cover" /></swiper-slide
    ><swiper-slide>
      <img
        src="https://via.placeholder.com/200x250"
        alt="placeholder"
        class="w-full h-full object-cover" /></swiper-slide
    ><swiper-slide>
      <img
        src="https://via.placeholder.com/200x250"
        alt="placeholder"
        class="w-full h-full object-cover" /></swiper-slide
    ><swiper-slide>
      <img
        src="https://via.placeholder.com/200x250"
        alt="placeholder"
        class="w-full h-full object-cover"
    /></swiper-slide>
  </swiper>
</template>
