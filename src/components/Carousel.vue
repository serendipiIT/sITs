<script>
  import { Swiper, SwiperSlide } from "swiper/vue"
  import { Navigation, Pagination, A11y, Autoplay } from "swiper"

  import "swiper/css"
  import "swiper/css/navigation"
  import "swiper/css/pagination"
  import "swiper/css/scrollbar"

  export default {
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
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        imageHeight: this.infoText ? "h-[75%]" : "h-full",
        productList: this.$store.state.products.productList,
      }
    },
    props: {
      infoText: {
        type: Boolean,
        default: false,
      },
      height: String,
      numberOfSlides: Number,
    },
  }
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="numberOfSlides"
    :space-between="10"
    navigation
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :class="height"
  >
    <swiper-slide :key="product.id" v-for="product in productList">
      <!-- TODO RouterLink till produktsida TODO använda ProductCard? -->
      <img
        :alt="product.title"
        :class="`w-full ${imageHeight} object-contain`"
        :src="product.image"
      />
      <div class="flex flex-row justify-between mt-6" v-if="infoText">
        <div>
          <p class="font-medium">
            {{ product.title }}
          </p>
          <p class="font-medium">{{ product.price }}</p>
        </div>
        <div>
          <i>Spara</i>
          <i>Köp</i>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
