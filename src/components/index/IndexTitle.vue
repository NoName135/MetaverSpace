<template>
  <section
    ref="indexTitle"
    class="h-screen bg-fixed bg-cover relative overflow-hidden"
    :style="{
      backgroundImage: `url(${titleImg})`,
      backgroundPosition: 'top right 20%',
    }"
  >
    <div
      class="container px-2 lg:px-0 py-40 h-full flex flex-col justify-around"
    >
      <div class="mt-16 mb-4">
        <div class="flex">
          <h1
            class="text-4xl sm:text-6xl font-bold"
            v-for="(splitTitle, i) in title"
            :key="splitTitle"
            :ref="`split${i}`"
          >
            {{ splitTitle }}
          </h1>
        </div>
        <div class="w-12 border border-b-8 mt-2"></div>
      </div>
      <div ref="text">
        <p class="text-2xl sm:text-3xl font-bold">探索元宇宙的世界</p>
        <p class="text-sm sm:text-lg mt-6">
          結合現實和虛擬環境的穿戴式設備<br />以全新方式體驗工作、社交、遊戲的樂趣
        </p>
      </div>
    </div>
    <div ref="scrollDown" class="absolute bottom-4 left-[calc(50%-56px)]">
      <img :src="titleIcon" class="w-28" alt="scrollDown" />
      <div
        class="absolute bottom-7 left-[calc(50%-12px)] bg-white rounded-full w-6 h-6 animate-bounce-0.5"
      >
        <FontAwesomeIcon
          :icon="['fas', 'arrow-down']"
          class="text-primary text-lg font-bold mx-auto w-full"
        />
      </div>
    </div>
  </section>
</template>

<script>
import titleImg from '@/assets/images/title.jpg'
import titleIcon from '@/assets/images/controller.png'

import gsapMixin from '@/mixins/gsap.js'

export default {
  props: ['loading'],
  mixins: [gsapMixin],
  data () {
    return {
      title: 'MetaverSpace',
      titleImg,
      titleIcon
    }
  },
  methods: {
    gsapTitle () {
      const indexTitle = this.gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.indexTitle,
          start: 'top 50%',
          toggleActions: 'play none none none'
          // markers: true,
        }
      })
      this.title.split('').forEach((split, i) => {
        indexTitle.from(
          this.$refs[`split${i}`],
          {
            yPercent: -100,
            opacity: 0,
            ease: 'expo',
            duration: 0.8,
            delay: 0.1
          },
          '<'
        )
      })
      indexTitle.from(
        this.$refs.text,
        { yPercent: 100, opacity: 0, ease: 'back', duration: 0.8, delay: 0.3 },
        '<'
      )
      indexTitle.from(
        this.$refs.scrollDown,
        { y: 500, opacity: 0, ease: 'back', duration: 0.8, delay: 0.5 },
        '<'
      )
    }
  },
  watch: {
    loading () {
      this.gsapTitle()
    }
  }
}
</script>
