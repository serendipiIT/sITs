<script>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination, A11y, Autoplay } from 'swiper'

  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import 'swiper/css/scrollbar'

  import ProductCard from './ProductCard.vue'

  export default {
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper)
      }
      const onSlideChange = () => {
        console.log('slide change')
      }
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, A11y, Autoplay],
      }
    },
    components: {
      ProductCard,
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        imageHeight: this.infoText ? 'h-[75%]' : 'h-full',
      }
    },
    props: {
      infoText: {
        default: false,
        type: Boolean,
      },
      height: {
        default: '40vh',

        type: String,
      },
      productList: {
        required: true,
        type: Array,
      },
      numberOfSlides: {
        default: 4,
        type: Number,
      },
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
    @slide-change="onSlideChange"
    :class="height"
  >
    <swiper-slide :key="product.id" v-for="product in productList">
      <img
        v-if="!infoText"
        :alt="product.category"
        :class="`w-full ${imageHeight} object-contain`"
        :src="product.image"
      />
      <ProductCard v-if="infoText" :product="product" />
    </swiper-slide>
  </swiper>
</template>
