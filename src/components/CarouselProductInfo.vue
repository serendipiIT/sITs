<script>
  import { register } from 'swiper/element/bundle'
  // import 'swiper/css'
  // import 'swiper/css/free-mode'
  // import 'swiper/css/navigation'
  // import 'swiper/css/thumbs'
  register()

  export default {
    components: {},
    data() {
      return {}
    },
  }
</script>

<template>
  <swiper-container
    style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
    class="mySwiper"
    thumbs-swiper=".mySwiper2"
    space-between="10"
    navigation="true"
  >
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
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
      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
    </swiper-slide>
  </swiper-container>
</template>

<style>
  swiper-container {
    width: 100%;
    height: 100%;
  }

  swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
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
  }
</style>
