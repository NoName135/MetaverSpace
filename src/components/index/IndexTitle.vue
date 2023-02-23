<template>
  <div class="h-screen bg-fixed bg-cover bg-right-20% relative" :style="{backgroundImage: `url(${titleImg})`}">
    <div class="container px-2 lg:px-0 py-28 h-full flex flex-col justify-around">
      <div class="mt-32 lg:mt-20">
        <h1 class="text-4xl sm:text-6xl font-bold">MetaverSpace</h1>
        <div class="w-12 border border-b-8 mt-2"></div>
      </div>
      <div>
        <p class="text-2xl sm:text-3xl font-bold">探索元宇宙的世界</p>
        <p class="text-sm sm:text-lg mt-6">結合現實和虛擬環境的穿戴式設備<br>以全新方式體驗工作、社交、遊戲的樂趣</p>
      </div>
    </div>
    <div class="absolute bottom-4 left-[calc(50%-56px)]">
      <img :src="titleIcon" class="w-28" alt="">
      <div class="absolute bottom-7 left-[calc(50%-12px)] bg-white rounded-full w-6 h-6 animate-bounce-0.5">
        <font-awesome-icon
          :icon="['fas', 'arrow-down']"
          class="text-primary text-lg font-bold mx-auto w-full"
        />
      </div>
    </div>
  </div>
</template>

<script>
import titleImg from '@/images/title.jpg';
import titleIcon from '@/images/controller.png';

export default {
  data() {
    return {
      titleImg: titleImg,
      titleIcon: titleIcon
    }
  }
}
</script>