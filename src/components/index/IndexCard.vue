<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';

  // import required modules
  import { Navigation } from 'swiper';

  export default {
    setup() {
      return {
        modules: [Navigation],
      };
    },
    components: {
      Swiper,
      SwiperSlide,
    },
  };
</script>