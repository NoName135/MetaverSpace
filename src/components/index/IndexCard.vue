<template>
  <section class="h-screen-nav py-16 text-center flex flex-col justify-around md:hidden">
    <div>
      <h2 class="font-bold text-3xl mb-4">打開元宇宙大門</h2>
      <p>進入元宇宙體驗新生活</p>
      <p>在虛擬世界中沒有距離</p>
    </div>
    <swiper
      ref="{indexCardSwiper}"
      :slidesPerView="1.8"
      :breakpoints= "{
        480: {
          slidesPerView: 2.6,
        }
      }"
      :centeredSlides="true"
      :loop="true"
      :spaceBetween="30"
      :navigation="true"
      :modules="cardModules"
      class="indexCardSwiper text-white mt-6"
    >
      <swiper-slide v-for="card in cards" :key="card.text">
        <div
          class="backdrop-blur-[2px] border rounded w-40 h-full mx-auto py-8"
          style="background: linear-gradient(142.88deg, rgba(255, 255, 255, 0.16) 8.09%, rgba(255, 255, 255, 0.064) 27.24%, rgba(255, 255, 255, 0.064) 34.42%, rgba(255, 255, 255, 0.1088) 48.78%, rgba(255, 255, 255, 0) 100%)">
          <img class="h-12 mx-auto" :src="card.img" alt="">
          <p class="mt-2 font-bold text-2xl">{{card.text}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
  <section class="h-screen-nav container py-16 hidden md:grid auto-rows-fr grid-cols-2 lg:grid-cols-4 md:gap-2 lg:gap-6 justify-center items-center text-center">
    <div>
      <h2 class="font-bold text-2xl lg:text-3xl mb-4">打開元宇宙大門</h2>
      <p>進入元宇宙體驗新生活</p>
      <p>在虛擬世界中沒有距離</p>
    </div>
    <div v-for="card in cards" :key="card.text" class="h-4/5 lg:h-3/4">
      <div
        class="backdrop-blur-[2px] border rounded w-[calc(100%-80px)] lg:w-[calc(100%-32px)] mx-auto py-8 h-full flex flex-col justify-around"
        style="background: linear-gradient(142.88deg, rgba(255, 255, 255, 0.16) 8.09%, rgba(255, 255, 255, 0.064) 27.24%, rgba(255, 255, 255, 0.064) 34.42%, rgba(255, 255, 255, 0.1088) 48.78%, rgba(255, 255, 255, 0) 100%)">
        <img class="h-2/5 mx-auto" :src="card.img">
        <p class="mt-2 font-bold text-2xl">{{card.text}}</p>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import game from "@/images/cards/game.png"
import sport from "@/images/cards/sport.png"
import movie from "@/images/cards/movie.png"
import active from "@/images/cards/active.png"
import social from "@/images/cards/social.png"
import work from "@/images/cards/work.png"
import study from "@/images/cards/study.png"


export default {
  data() {
    return {
      cardModules: [Navigation],
      cards: [
        {
          img: game,
          text: "遊戲"
        },
        {
          img: sport,
          text: "運動"
        },
        {
          img: movie,
          text: "電影"
        },
        {
          img: active,
          text: "活動"
        },
        {
          img: social,
          text: "社交"
        },
        {
          img: work,
          text: "工作"
        },
        {
          img: study,
          text: "學習"
        },
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>