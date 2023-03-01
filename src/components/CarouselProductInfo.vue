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
  <div>
    <swiper-container
      style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff"
      class="mySwiper lg:w-[40vw] w-[90vw]"
      thumbs-swiper=".mySwiper2"
      space-between="10"
      navigation="true"
    >
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-2.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-3.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-4.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-5.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-6.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-7.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-8.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-9.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-10.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
    </swiper-container>

    <swiper-container
      class="mySwiper2 lg:w-[40vw] w-[90vw]"
      space-between="10"
      slides-per-view="4"
      free-mode="true"
      watch-slides-progress="true"
    >
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-2.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-3.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-4.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-5.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-6.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-7.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-8.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-9.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://swiperjs.com/demos/images/nature-10.jpg"
          class="lg:w-[40vw] w-[90vw]"
        />
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style>
  swiper-slide {
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  swiper-slide img {
    object-fit: cover;
  }

  swiper-container {
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }

  swiper-slide {
    background-size: cover;
    background-position: center;
  }

  .mySwiper {
    height: 80%;
  }

  .mySwiper2 {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
  }

  .mySwiper2 swiper-slide {
    height: 100%;
    opacity: 0.4;
  }

  .mySwiper2 .swiper-slide-thumb-active {
    opacity: 1;
  }

  swiper-slide img {
    display: block;
    height: 100%;
    object-fit: cover;
  }
</style>
