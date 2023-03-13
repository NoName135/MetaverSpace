<template>
  <section
    class="h-screen-nav py-16 text-center flex flex-col justify-around md:hidden"
  >
    <div>
      <h2 class="font-bold text-3xl mb-4">打開元宇宙大門</h2>
      <p>進入元宇宙體驗新生活</p>
      <p>在虛擬世界中沒有距離</p>
    </div>
    <div ref="swiperCards">
      <swiper
        ref="indexCardSwiper"
        :slidesPerView="1.8"
        :breakpoints="{
          480: {
            slidesPerView: 2.6,
          },
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
            style="
              background: linear-gradient(
                142.88deg,
                rgba(255, 255, 255, 0.16) 8.09%,
                rgba(255, 255, 255, 0.064) 27.24%,
                rgba(255, 255, 255, 0.064) 34.42%,
                rgba(255, 255, 255, 0.1088) 48.78%,
                rgba(255, 255, 255, 0) 100%
              );
            "
          >
            <img class="h-12 mx-auto" :src="card.img" alt="" />
            <p class="mt-2 font-bold text-2xl">{{ card.text }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <section
    ref="indexCards"
    class="h-screen-nav container py-16 hidden md:grid auto-rows-fr grid-cols-2 lg:grid-cols-4 md:gap-2 lg:gap-6 justify-center items-center text-center overflow-x-hidden"
  >
    <div>
      <h2 class="font-bold text-2xl lg:text-3xl mb-4">打開元宇宙大門</h2>
      <p>進入元宇宙體驗新生活</p>
      <p>在虛擬世界中沒有距離</p>
    </div>
    <div
      v-for="(card, index) in cards"
      :ref="`card${index}`"
      :key="card.text"
      class="h-4/5 lg:h-3/4 relative"
      @mouseenter="playCard(index)"
      @mouseleave="reverseCard(index)"
    >
      <div
        :ref="`cardFront${index}`"
        class="card-front backdrop-blur-[2px] border rounded w-[calc(100%-80px)] lg:w-[calc(100%-32px)] mx-auto py-8 h-full flex flex-col justify-around absolute backFaceHidden"
        style="
          background: linear-gradient(
            142.88deg,
            rgba(255, 255, 255, 0.16) 8.09%,
            rgba(255, 255, 255, 0.064) 27.24%,
            rgba(255, 255, 255, 0.064) 34.42%,
            rgba(255, 255, 255, 0.1088) 48.78%,
            rgba(255, 255, 255, 0) 100%
          );
        "
      >
        <img class="h-2/5 mx-auto" :src="card.img" />
        <p class="mt-2 font-bold text-2xl">{{ card.text }}</p>
      </div>
      <div
        :ref="`cardBack${index}`"
        class="card-front backdrop-blur-[2px] border rounded w-[calc(100%-80px)] lg:w-[calc(100%-32px)] mx-auto p-8 h-full flex flex-col justify-around absolute backFaceHidden"
        style="
          background: linear-gradient(
            142.88deg,
            rgba(255, 255, 255, 0.16) 8.09%,
            rgba(255, 255, 255, 0.064) 27.24%,
            rgba(255, 255, 255, 0.064) 34.42%,
            rgba(255, 255, 255, 0.1088) 48.78%,
            rgba(255, 255, 255, 0) 100%
          );
        "
      >
        <img class="h-2/5 mx-auto opacity-30" :src="card.img" />
        <div
          class="flex flex-col justify-around items-start w-full h-full p-4 absolute left-0"
        >
          <p
            class="text-left text-md leading-relaxed xl:text-lg xl:leading-loose"
          >
            {{ card.description }}
          </p>
          <p class="text-xl xl:text-2xl font-bold self-center">
            {{ card.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import Swiper required modules
import { Navigation } from "swiper";

import gsapMixin from "@/mixins/gsap.js";

import game from "@/images/cards/game.png";
import sport from "@/images/cards/sport.png";
import movie from "@/images/cards/movie.png";
import active from "@/images/cards/active.png";
import social from "@/images/cards/social.png";
import work from "@/images/cards/work.png";
import study from "@/images/cards/study.png";

export default {
  mixins: [gsapMixin],
  data() {
    return {
      cardModules: [Navigation],
      cards: [
        {
          img: game,
          text: "遊戲",
          description:
            "提供上百款多人和更多類型的遊戲，在前所未有的環境中享受無與倫比的自由。",
          flipCard: "",
        },
        {
          img: sport,
          text: "運動",
          description:
            "體驗各種室內或戶外運動，不再被距離、天氣或是其他意外狀況影響訓練。",
          flipCard: "",
        },
        {
          img: movie,
          text: "電影",
          description:
            "和朋友一起觀看電影、紀錄片、綜藝或各種節目，宛如與大家同處一室。",
          flipCard: "",
        },
        {
          img: active,
          text: "活動",
          description:
            "觀看各種表演、體育賽事、唱歌或是參加派對，朋友在世界各地也可同聚狂歡。",
          flipCard: "",
        },
        {
          img: social,
          text: "社交",
          description:
            "聯絡親友的方式變得更加有趣，社群應用或多人遊戲，隨時隨地與朋友同樂。",
          flipCard: "",
        },
        {
          img: work,
          text: "工作",
          description:
            "在世界各地相聚開會，或是使用可縮放畫面多工處理，讓工作變的方便有趣。",
          flipCard: "",
        },
        {
          img: study,
          text: "學習",
          description:
            "提供安全、符合成本的環境來學習真實情境，遇到任何失敗都可以重新來過。",
          flipCard: "",
        },
      ],
    };
  },
  methods: {
    gsapMoveCards() {
      const moveCard = this.gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.indexCards,
          scrub: true,
          pin: true,
          start: "top 64px",
          end: "bottom -300%",
          // markers: true,
        },
      });

      this.ScrollTrigger.matchMedia({
        "(max-width: 767px)": () => {
          this.gsap.from(this.$refs.swiperCards, {
            scrollTrigger: {
              trigger: this.$refs.swiperCards,
              start: "top 75%",
              toggleActions: "play none none none",
              // markers: true,
            },
            y: 100,
            opacity: 0,
            ease: "back",
            duration: 0.8,
          });
        },
        "(min-width: 768px) and (max-width: 975px)": () => {
          moveCard.from(this.$refs.card0, { xPercent: "150", ease: "circ" });
          moveCard.from(this.$refs.card1, { xPercent: "250", ease: "circ" });
          moveCard.from(this.$refs.card2, { xPercent: "150", ease: "circ" });
          moveCard.from(this.$refs.card3, { xPercent: "250", ease: "circ" });
          moveCard.from(this.$refs.card4, { xPercent: "150", ease: "circ" });
          moveCard.from(this.$refs.card5, { xPercent: "250", ease: "circ" });
          moveCard.from(this.$refs.card6, { xPercent: "150", ease: "circ" });
        },
        "(min-width: 976px)": () => {
          moveCard.from(this.$refs.card0, { xPercent: "350", ease: "circ" });
          moveCard.from(this.$refs.card1, { xPercent: "250", ease: "circ" });
          moveCard.from(this.$refs.card2, { xPercent: "150", ease: "circ" });
          moveCard.from(this.$refs.card3, { xPercent: "450", ease: "circ" });
          moveCard.from(this.$refs.card4, { xPercent: "350", ease: "circ" });
          moveCard.from(this.$refs.card5, { xPercent: "250", ease: "circ" });
          moveCard.from(this.$refs.card6, { xPercent: "150", ease: "circ" });
        },
      });
    },
    gsapFlipCards() {
      this.cards.forEach((card, i) => {
        this.gsap.set(this.$refs[`card${i}`], {
          transformStyle: "preserve-3d",
          transformPerspective: 800,
        });
        const q = this.gsap.utils.selector(this.$refs[`card${i}`]);
        this.gsap.set(q(this.$refs[`cardBack${i}`]), { rotationY: -180 });
        this.cards[i].flipCard = this.gsap
          .timeline({ paused: true })
          .to(q(this.$refs[`cardFront${i}`]), { duration: 1, rotationY: 180 })
          .to(q(this.$refs[`cardBack${i}`]), { duration: 1, rotationY: 0 }, 0)
          .to(this.$refs[`card${i}`], { z: 50 }, 0)
          .to(this.$refs[`card${i}`], { z: 0 }, 0.5);
      });
    },
    playCard(target) {
      this.cards[target].flipCard.play();
    },
    reverseCard(target) {
      this.cards[target].flipCard.reverse();
    },
  },
  mounted() {
    this.gsapMoveCards();
    this.gsapFlipCards();
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
.backFaceHidden {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
}
</style>
