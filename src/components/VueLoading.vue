<template>
  <VueLoading
    :active="loadings.fullLoading"
    :background-color="'#000'"
    :opacity="loadings.opacity"
    :blur="'5px'"
  >
    <!-- 首頁 loading 才顯示漸層效果 -->
    <div
      v-if="loadings.opacity === 1"
      class="fixed top-0 left-0 w-full h-screen"
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
    ></div>
    <div class="loading-spinners relative">
      <div class="loading-effect">
        <div></div>
        <div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div>
      <img
        src="@/assets/images/Logo.png"
        class="absolute top-[68px] left-[68px] w-36 h-36"
        alt="logo"
      />
    </div>
    <!-- progress bar -->
    <div
      class="mt-4 w-full bg-gray-500 rounded-full relative overflow-hidden"
      v-if="loadings.opacity === 1"
    >
      <div class="absolute text-xs font-medium left-[calc(50%-8px)] text-white">
        {{ loadings.progress }}%
      </div>
      <div
        class="bar bg-primary2 p-0.5 leading-none rounded-full transition-all h-4"
        :style="`width: ${loadings.progress}%`"
      ></div>
    </div>
  </VueLoading>
</template>

<script>
// vue-loading
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import { mapState } from 'pinia'
import loadingStore from '@/stores/loadingStore.js'

export default {
  computed: {
    ...mapState(loadingStore, ['loadings'])
  },
  components: {
    VueLoading
  }
}
</script>

<!-- loading css -->
<style type="text/css">
@keyframes loading-effect {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-effect div {
  box-sizing: border-box !important;
}
.loading-effect > div {
  position: absolute;
  width: 260.4px;
  height: 260.4px;
  top: 9.799999999999999px;
  left: 9.799999999999999px;
  border-radius: 50%;
  border: 14px solid #000;
  border-color: #553c99 transparent #553c99 transparent;
  animation: loading-effect 1s linear infinite;
}

.loading-effect > div:nth-child(2),
.loading-effect > div:nth-child(4) {
  width: 226.79999999999998px;
  height: 226.79999999999998px;
  top: 26.599999999999998px;
  left: 26.599999999999998px;
  animation: loading-effect 1s linear infinite reverse;
}
.loading-effect > div:nth-child(2) {
  border-color: transparent #7fcce3 transparent #7fcce3;
}
.loading-effect > div:nth-child(3) {
  border-color: transparent;
}
.loading-effect > div:nth-child(3) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.loading-effect > div:nth-child(3) div:before,
.loading-effect > div:nth-child(3) div:after {
  content: "";
  display: block;
  position: absolute;
  width: 14px;
  height: 14px;
  top: -14px;
  left: 109.19999999999999px;
  background: #553c99;
  border-radius: 50%;
  box-shadow: 0 246.39999999999998px 0 0 #553c99;
}
.loading-effect > div:nth-child(3) div:after {
  left: -14px;
  top: 109.19999999999999px;
  box-shadow: 246.39999999999998px 0 0 0 #553c99;
}

.loading-effect > div:nth-child(4) {
  border-color: transparent;
}
.loading-effect > div:nth-child(4) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.loading-effect > div:nth-child(4) div:before,
.loading-effect > div:nth-child(4) div:after {
  content: "";
  display: block;
  position: absolute;
  width: 14px;
  height: 14px;
  top: -14px;
  left: 92.39999999999999px;
  background: #7fcce3;
  border-radius: 50%;
  box-shadow: 0 212.79999999999998px 0 0 #7fcce3;
}
.loading-effect > div:nth-child(4) div:after {
  left: -14px;
  top: 92.39999999999999px;
  box-shadow: 212.79999999999998px 0 0 0 #7fcce3;
}
.loading-spinners {
  width: 280px;
  height: 280px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.loading-effect {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.loading-effect div {
  box-sizing: content-box;
}
/* generated by https://loading.io/ */
</style>
