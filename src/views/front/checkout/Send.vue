<template>
  <!-- 付款成功區塊 -->
  <div class="pt-8">
    <section
      class="mx-auto w-full md:w-[28rem] h-32 md:h-40 rounded-lg backdrop-blur-[2px] border"
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
      <div class="flex justify-center items-center pt-6 sm:pt-4 md:pt-7">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>

        <h1 class="text-lg sm:text-2xl md:text-3xl ml-4">付款成功</h1>
      </div>
      <h3 class="text-md sm:text-xl md:text-2xl text-center mt-4">
        感謝您的購買，我們會盡快出貨
      </h3>
    </section>
    <div class="mt-10 flex justify-center">
      <router-link
        :to="{ name: '商品列表' }"
        replace
        class="w-40 primary-button"
        >繼續購物</router-link
      >
    </div>
  </div>
  <!-- 訂單資訊區塊 -->
  <div class="grid grid-cols-5 gap-6">
    <!-- 訂單內容區塊 -->
    <div class="col-span-full lg:col-span-3 mt-8">
      <section class="border-2 rounded-lg overflow-hidden">
        <h1 class="p-4 bg-black/50 text-xl font-bold border-b-2">訂單資訊</h1>
        <div class="mx-auto text-md md:text-lg p-8">
          <h5 class="mb-4 leading-loose md:flex justify-between">
            <p>訂單編號：</p>
            <span>-L9u11NAE0m0SpSBUDIq</span>
          </h5>
          <h5 class="mb-4 leading-loose md:flex justify-between">
            <p>訂單日期：</p>
            <span>2023/01/29</span>
          </h5>
          <div class="mb-4">
            <button
              type="button"
              ref="detailCollapseBtn"
              class="flex justify-around items-center w-28 focus:outline-none font-medium rounded-lg text-sm text-white p-1.5 bg-secondary hover:bg-secondary2"
            >
              <p>訂單內容</p>
              <svg
                data-accordion-icon
                class="w-6 h-6 shrink-0 duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                ></path>
              </svg>
            </button>
            <!-- 明細區塊 -->
            <div ref="detailCollapseMenu" class="px-2 md:px-4 border-2 rounded">
              <div class="py-8 grid grid-cols-5 gap-4">
                <img
                  src="@/images/products/Meta_Oculus_Quest2.jpg"
                  alt=""
                  class="hidden md:flex self-center w-full h-20 xl:h-24 object-cover rounded"
                />
                <div
                  class="col-span-full md:col-span-4 flex flex-col justify-between"
                >
                  <h2 class="text-md xl:text-lg">Meta</h2>
                  <h3 class="text-lg xl:text-xl mt-2 lg:mt-3">
                    Oculus Quest 2 256G
                  </h3>
                  <div>
                    <div class="md:flex justify-between items-center mt-2">
                      <div
                        class="flex flex-row justify-between md:justify-start mt-4 md:mt-1 text-sm xl:text-md"
                      >
                        <p>規格：無</p>
                        <p class="md:ml-4">數量：1</p>
                      </div>
                      <h5 class="text-md xl:text-lg mt-4 md:mt-0 text-end">
                        總計：<span class="font-bold">NT$ 17,500</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-8 grid grid-cols-5 gap-4 border-t">
                <img
                  src="@/images/products/VIVE_XR_ELITE.jpg"
                  alt=""
                  class="hidden md:flex self-center w-full h-20 xl:h-24 object-cover rounded"
                />
                <div
                  class="col-span-full md:col-span-4 flex flex-col justify-between"
                >
                  <h2 class="text-md xl:text-lg">VIVE</h2>
                  <h3 class="text-lg xl:text-xl mt-2 lg:mt-3">XR_ELITE</h3>
                  <div>
                    <div class="md:flex justify-between items-center mt-2">
                      <div
                        class="flex flex-row justify-between md:justify-start mt-4 md:mt-1 text-sm xl:text-md"
                      >
                        <p>規格：無</p>
                        <p class="md:ml-4">數量：1</p>
                      </div>
                      <h5 class="text-md xl:text-lg mt-4 md:mt-0 text-end">
                        總計：<span class="font-bold">NT$ 34,300</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="border-t">
                <p class="text-warm text-lg py-4 text-end">折扣：1,000</p>
              </div>
            </div>
          </div>
          <h5 class="mb-4 leading-loose md:flex justify-between">
            <p>付款方式：</p>
            <span>信用卡</span>
          </h5>
          <h5 class="leading-loose md:flex justify-between">
            <p>訂單金額：</p>
            <span class="font-bold">NT$ 50,800</span>
          </h5>
        </div>
      </section>
    </div>
    <!-- 訂單資料區塊 -->
    <div class="col-span-full lg:col-span-2">
      <div class="lg:pt-8 sticky top-nav">
        <section class="border-2 rounded-lg overflow-hidden">
          <h1 class="p-4 bg-black/50 text-xl font-bold border-b-2">
            訂購人資訊
          </h1>
          <div class="px-8 py-8">
            <h5 class="mb-4 leading-loose md:flex justify-between">
              <p>訂購人姓名：</p>
              <span>無名</span>
            </h5>
            <h5 class="mb-4 leading-loose md:flex justify-between">
              <p>訂購人電話：</p>
              <span>0912345678</span>
            </h5>
            <h5 class="mb-4 leading-loose md:flex justify-between">
              <p>訂購人Email：</p>
              <span>qq@qq.qq</span>
            </h5>
            <h5 class="mb-4 leading-loose md:flex justify-between">
              <p>訂購人地址：</p>
              <span>台灣的某個角落</span>
            </h5>
            <h5 class="mb-2">訂購人備註：</h5>
            <p class="leading-loose text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus voluptatum molestiae nemo inventore totam doloremque
              assumenda architecto illo maiores aut modi repellendus magni
              cupiditate debitis nobis adipisci, nostrum voluptatem molestias?
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { Collapse } from "flowbite";

export default {
  mounted() {
    this.$emit("emit-step", 3);

    const detailCollapseOptions = {
      onToggle: (item) => {
        if (item._visible) {
          item._triggerEl
            .querySelector("[data-accordion-icon]")
            .classList.add("-rotate-180");
        } else {
          item._triggerEl
            .querySelector("[data-accordion-icon]")
            .classList.remove("-rotate-180");
        }
      },
    };
    this.detailCollapse = new Collapse(
      this.$refs.detailCollapseMenu,
      this.$refs.detailCollapseBtn,
      detailCollapseOptions
    );
    this.detailCollapse.collapse();
  },
};
</script>
