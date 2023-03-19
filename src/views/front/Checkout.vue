<template>
  <div class="mt-nav container px-2 md:px-0">
    <ol
      class="pt-8 flex items-center w-full mb-4 sm:mb-5 px-0 md:px-20 lg:px-32 xl:px-40 relative"
    >
      <li
        class="z-10 flex w-full items-center after:content-[''] after:h-1.5 after:bg-primary2 after:transition-all after:duration-500"
        :class="[step > 1 ? 'after:w-full' : 'after:w-0']"
      >
        <div
          class="flex items-center justify-center rounded-full w-10 h-10 md:h-12 md:w-12 xl:w-14 xl:h-14 bg-primary shrink-0"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 md:w-6 md:h-6 xl:w-7 lg:h-7 text-primary3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </li>
      <li
        class="z-10 flex w-full items-center after:content-[''] after:h-1.5 after:bg-primary2 after:transition-all after:duration-500"
        :class="[step > 2 ? 'after:w-full' : ' after:w-0']"
      >
        <div
          class="flex items-center justify-center rounded-full w-10 h-10 md:h-12 md:w-12 xl:w-14 xl:h-14 shrink-0 transition-all duration-500"
          :class="[step > 1 ? 'bg-primary' : ' bg-gray-700']"
          :style="{ transitionDelay: [step > 1 ? '400ms' : '0ms'] }"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 md:w-6 md:h-6 xl:w-7 lg:h-7 transition-all duration-500"
            :class="[step > 1 ? 'text-primary3' : ' text-gray-100']"
            :style="{ transitionDelay: [step > 1 ? '400ms' : '0ms'] }"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"></path>
            <path
              fill-rule="evenodd"
              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </li>
      <li class="z-10 flex items-center">
        <div
          class="flex items-center justify-center rounded-full w-10 h-10 md:h-12 md:w-12 xl:w-14 xl:h-14 shrink-0 transition-all duration-500"
          :class="[step > 2 ? 'bg-primary' : ' bg-gray-700']"
          :style="{ transitionDelay: [step > 2 ? '400ms' : '0ms'] }"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5 md:w-6 md:h-6 xl:w-7 lg:h-7 transition-all duration-500"
            :class="[step > 2 ? 'text-primary3' : ' text-gray-100']"
            :style="{ transitionDelay: [step > 2 ? '400ms' : '0ms'] }"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path
              fill-rule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </li>
      <div
        class="absolute w-full md:w-[calc(100%-10rem)] lg:w-[calc(100%-16rem)] xl:w-[calc(100%-20rem)] h-2 bg-gray-700 px-2"
      ></div>
    </ol>
    <router-view class="mt-14 md:mt-8" @emit-step="changeStep"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    changeStep(num) {
      this.step = num;
    },
  },
};
</script>
