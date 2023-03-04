<template>
  <section ref="indexTitle" class="h-screen bg-fixed bg-cover relative" :style="{backgroundImage: `url(${titleImg})`, backgroundPosition: 'top right 20%'}">
    <div class="container px-2 lg:px-0 py-40 h-full flex flex-col justify-around">
      <div class="mt-16 mb-4">
        <h1 ref="title" class="text-4xl sm:text-6xl font-bold">MetaverSpace</h1>
        <div class="w-12 border border-b-8 mt-2"></div>
      </div>
      <div ref="text">
        <p class="text-2xl sm:text-3xl font-bold">探索元宇宙的世界</p>
        <p class="text-sm sm:text-lg mt-6">結合現實和虛擬環境的穿戴式設備<br>以全新方式體驗工作、社交、遊戲的樂趣</p>
      </div>
    </div>
    <div ref="scrollDown" class="absolute bottom-4 left-[calc(50%-56px)]">
      <img :src="titleIcon" class="w-28" alt="">
      <div class="absolute bottom-7 left-[calc(50%-12px)] bg-white rounded-full w-6 h-6 animate-bounce-0.5">
        <font-awesome-icon
          :icon="['fas', 'arrow-down']"
          class="text-primary text-lg font-bold mx-auto w-full"
        />
      </div>
    </div>
  </section>
</template>

<script>
import titleImg from '@/images/title.jpg';
import titleIcon from '@/images/controller.png';

// import gsap
import { gsap } from "gsap";
// get other gsap plugins
import { ScrollTrigger } from "gsap/ScrollTrigger";
// register gsap plugins
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      titleImg: titleImg,
      titleIcon: titleIcon
    }
  },
  methods: {
    gsapTitle() {
      this.gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.indexTitle,
          start: "top 50%",
          toggleActions:"play none none none",
          // markers: true,
        }
      })
      .from(this.$refs.title, {xPercent:-100, ease:"expo", duration: 0.8, delay: 0.5})
      .from(this.$refs.text, {y:100, opacity:0, ease:"back", duration: 1, delay: 0.5}, "<")
      .from(this.$refs.scrollDown, {yPercent:-1000, ease:"bounce", duration: 1, delay: 0.5}, "<")
    },
  },
  mounted() {
    this.gsap = gsap;
    ScrollTrigger.refresh();
    this.gsapTitle();
  },
  unmounted() {
    const triggers = ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      trigger.kill();
    });
    ScrollTrigger.clearMatchMedia();
  },
}
</script>