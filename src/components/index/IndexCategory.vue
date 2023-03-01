<template>
  <section class="bg-black/50">
    <div class="container py-24">
      <h2 class="text-3xl font-bold text-center mb-4">四大類型</h2>
      <p class="text-center">擺脫物理上的束縛</p>
      <p class="text-center mb-10">體驗自由自在的虛擬世界</p>
      <div class="timeline">
        <div class="number-bg hidden lg:block">
          <div class="number num1"></div>
        </div>
        <div class="flex flex-wrap justify-around lg:flex-row-reverse mx-4">
          <div class="basis-full lg:basis-2/5 bg-cover bg-center h-[460px] lg:h-[600px] rounded"
            :style="{ backgroundImage: `linear-gradient(180deg, rgba(21, 20, 23, 0) 73.01%, #151417 89.8%), url(${AR})`}">
          </div>
          <div class="basis-full lg:basis-2/5 flex flex-col justify-center mb-16 lg:mb-0">
            <h3 class="text-xl text-primary font-bold mb-4">擴增實境 AR（Augmented Reality）</h3>
            <p class="mb-12">透過攝影機影像的位置及角度精算並加上圖像分析技術，讓螢幕上的虛擬世界能夠與現實世界場景進行結合與互動的技術。</p>
            <button type="button" class="w-24 primary-button">前往購買</button>
          </div>
        </div>
        <p class="text-8xl xl:text-9xl font-bold text-center text-white/20 -mt-32 hidden lg:block">Augmented Reality</p>
      </div>
      <div class="timeline">
        <div class="number-bg hidden lg:block">
          <div class="number num2"></div>
        </div>
        <div class="flex flex-wrap justify-around mx-4">
          <div class="basis-full lg:basis-2/5 bg-cover bg-left h-[460px] lg:h-[600px] rounded"
            :style="{ backgroundImage: `linear-gradient(180deg, rgba(21, 20, 23, 0) 73.01%, #151417 89.8%), url(${VR})`}">
          </div>
          <div class="basis-full lg:basis-2/5 flex flex-col justify-center mb-16 lg:mb-0">
            <h3 class="text-xl text-primary font-bold mb-4">虛擬實境 VR（Virtual Reality）</h3>
            <p class="mb-12">利用電腦類比產生一個三維空間的虛擬世界，提供使用者視覺等感官的類比，感覺彷彿身歷其境，可以即時、沒有限制地觀察三維空間內的事物。</p>
            <button type="button" class="w-24 primary-button">前往購買</button>
          </div>
          <p class="text-8xl xl:text-9xl font-bold text-center text-white/20 -mt-32 hidden lg:block">Virtual Reality</p>
        </div>
      </div>
      <div class="timeline">
        <div class="number-bg hidden lg:block">
          <div class="number num3"></div>
        </div>
        <div class="flex flex-wrap justify-around lg:flex-row-reverse mx-4">
          <div class="basis-full lg:basis-2/5 bg-cover bg-center h-[460px] lg:h-[600px] rounded"
            :style="{ backgroundImage: `linear-gradient(180deg, rgba(21, 20, 23, 0) 73.01%, #151417 89.8%), url(${MR})`}">
          </div>
          <div class="basis-full lg:basis-2/5 flex flex-col justify-center mb-16 lg:mb-0">
            <h3 class="text-xl text-primary font-bold mb-4">混合實境 MR ( Mixed Reality )</h3>
            <p class="mb-12">混合了現實、擴增實境、增強虛擬和虛擬實境技術，混合實境 (MR) 是一種虛擬實境 (VR) 加 擴增實境 (AR) 的合成品。</p>
            <button type="button" class="w-24 primary-button">前往購買</button>
          </div>
          <p class="text-8xl xl:text-9xl font-bold text-center text-white/20 -mt-32 hidden lg:block">Mixed Reality</p>
        </div>
      </div>
      <div class="timeline">
        <div class="number-bg hidden lg:block">
          <div class="number num4"></div>
        </div>
        <div class="flex flex-wrap justify-around mx-4">
          <div class="basis-full lg:basis-2/5 bg-cover bg-center h-[460px] lg:h-[600px] rounded"
            :style="{ backgroundImage: `linear-gradient(180deg, rgba(21, 20, 23, 0) 73.01%, #151417 89.8%), url(${XR})`}">
          </div>
          <div class="basis-full lg:basis-2/5 flex flex-col justify-center">
            <h3 class="text-xl text-primary font-bold mb-4">延展實境 XR（Extended Reality）</h3>
            <p class="mb-12">結合了實境和虛擬環境以及人機互動設備。其中可能包括了擴增實境(AR)、虛擬實境(VR)、混合實境(MR)，以及在這些之類的區域。</p>
            <button type="button" class="w-24 primary-button">前往購買</button>
          </div>
          <p class="text-8xl xl:text-9xl font-bold text-center text-white/20 -mt-32 hidden lg:block">Extended Reality</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AR from '@/images/AR.jpg';
import VR from '@/images/VR.jpg';
import MR from '@/images/MR.jpg';
import XR from '@/images/XR.jpg';

export default {
  data() {
    return {
      AR: AR,
      VR: VR,
      MR: MR,
      XR: XR
    }
  }
}
</script>

<style>
.timeline {
  position: relative;
  margin: 0 auto;
  height: auto;
}

@media (min-width:976px){
  .timeline {
    height: 680px;
  }
  .timeline::after {
    content: '';
    position: absolute;
    width: 1px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -0.5px;
  }
}

.number-bg {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  z-index: 1;
}

.number-bg::after {
  content: '';
  position: absolute;
  width: 32px;
  height: 64px;
  right: -16px;
  background-color: white;
  top: 64px;
}

.number {
  position: relative;
  background-color: inherit;
  width: 100%;
  z-index: 5;
}

.number::after {
  text-align: center;
  color: white;
  position: absolute;
  width: 32px;
  height: 64px;
  right: -56px;
  background-color: rgba(0, 0, 0, 0.9);
  top: 54px;
  padding-top: 20px;
  z-index: 1;
}

.num1::after {
  content: '01';
}
.num2::after {
  content: '02';
}
.num3::after {
  content: '03';
}
.num4::after {
  content: '04';
}
</style>