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
  }
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    class="text-center"
  >
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
  </swiper>
</template>
