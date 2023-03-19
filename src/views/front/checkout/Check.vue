<template>
  <div class="lg:pt-8">
    <section class="border-2 rounded-lg">
      <h1 class="p-4 bg-black/50 text-xl font-bold border-b-2">訂單內容</h1>
      <div class="py-8 flex flex-col">
        <div
          class="mx-auto text-md md:text-lg px-4 w-[235px] sm:w-[285px] md:w-[450px] lg:w-[565px] xl:w-[620px]"
        >
          <h5 class="mb-4 leading-loose md:flex justify-between">
            <p>訂單編號：</p>
            <span>-L9u11NAE0m0SpSBUDIq</span>
          </h5>
          <h5 class="mb-4 leading-loose md:flex justify-between">
            <p>訂單日期：</p>
            <span>2023/01/29</span>
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
          <h5 class="mb-4 leading-loose md:flex justify-between">
            <p>付款方式：</p>
            <span>信用卡</span>
          </h5>
          <h5 class="mb-6 leading-loose md:flex justify-between">
            <p>訂單金額：</p>
            <span class="font-bold">NT$ 50,800</span>
          </h5>
          <div class="md:flex flex-wrap items-end">
            <div class="mb-10 md:mb-0">
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
              <div
                ref="detailCollapseMenu"
                class="px-2 md:px-4 border-2 rounded mb-10"
              >
                <div class="py-8 grid grid-cols-5 gap-4">
                  <img
                    src="@/images/products/Meta_Oculus_Quest2.jpg"
                    alt=""
                    class="hidden md:flex self-center w-full h-16 xl:h-24 object-cover rounded"
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
                    class="hidden md:flex self-center w-full h-16 xl:h-24 object-cover rounded"
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
            <div class="ml-auto">
              <button
                type="button"
                class="w-full md:w-36 primary-button"
                @click="nextStep()"
              >
                確認付款
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Collapse } from "flowbite";

export default {
  methods: {
    nextStep() {
      this.$router.replace("/checkout/send/id");
    },
  },
  mounted() {
    this.$emit("emit-step", 2);

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
