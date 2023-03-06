<script>
  import { register } from 'swiper/element/bundle'
  register()

  export default {
    data() {
      return {}
    },
    props: {
      product: {
        required: true,
        type: Object,
      },
    },
  }
</script>

<template>
  <div class="lg:w-[40%] md:w-[50%] w-[90%] h-[60vh] sm:h-auto">
    <swiper-container
      style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
      class="mySwiper"
      thumbs-swiper=".mySwiper2"
      space-between="10"
      navigation="true"
    >
      <swiper-slide>
        <img :src="this.product?.image" />
      </swiper-slide>
      <swiper-slide>
        <img :src="this.product?.image" />
      </swiper-slide>
      <swiper-slide>
        <img :src="this.product?.image" />
      </swiper-slide>
      <swiper-slide>
        <img :src="this.product?.image" />
      </swiper-slide>
      <swiper-slide>
        <img :src="this.product?.image" />
      </swiper-slide>
    </swiper-container>

    <swiper-container
      class="mySwiper2"
      space-between="10"
      slides-per-view="4"
      free-mode="true"
      watch-slides-progress="true"
    >
      <swiper-slide>
        <img :src="this.product?.image" />
      </swiper-slide>
      <swiper-slide>
        <img :src="this.product?.image" />
      </swiper-slide>
      <swiper-slide>
        <img :src="this.product?.image" />
      </swiper-slide>
      <swiper-slide>
        <img :src="this.product?.image" />
      </swiper-slide>
      <swiper-slide>
        <img :src="this.product?.image" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style>
  swiper-container {
    width: 100%;
    height: 100%;
  }

  swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  swiper-container {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper {
    height: 80%;
    width: 100%;
  }

  .mySwiper2 {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .mySwiper2 swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }

  .mySwiper2 .swiper-slide-thumb-active {
    opacity: 1;
  }

  swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }
</style>
