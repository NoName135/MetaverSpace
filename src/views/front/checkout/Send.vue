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
      <RouterLink
        :to="{ name: '商品列表' }"
        replace
        class="w-40 primary-button"
        >繼續購物</RouterLink
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
            <span>{{ order.id }}</span>
          </h5>
          <h5 class="mb-4 leading-loose md:flex justify-between">
            <p>訂單日期：</p>
            <span>{{ $filters.date(order.create_at) }}</span>
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
              <div
                class="py-8 grid grid-cols-5 gap-4"
                :class="{ 'border-t': i > 0 }"
                v-for="(cart, id, i) in order.products"
                :key="id"
              >
                <img
                  :src="cart.product.imageUrl"
                  alt=""
                  class="hidden md:flex w-full h-16 xl:h-24 object-cover rounded bg-white"
                />
                <div
                  class="col-span-full md:col-span-4 flex flex-col justify-between"
                >
                  <h2 class="text-md xl:text-lg">{{ cart.product.brand }}</h2>
                  <h3 class="text-lg xl:text-xl mt-2 lg:mt-3">
                    {{ cart.product.title }}
                  </h3>
                  <div
                    class="flex items-start sm:items-center mt-4 text-md xl:text-lg"
                    v-for="spec in cart.cart_spec"
                    :key="spec.title"
                  >
                    <div class="flex flex-col sm:flex-row justify-between">
                      規格：{{ spec.title }}
                      <div class="flex mt-1 sm:mt-0 sm:ml-4">
                        數量：{{ spec.qty }}
                      </div>
                    </div>
                  </div>
                  <div
                    class="flex flex-col sm:flex-row justify-between items-center"
                  >
                    <div
                      class="flex items-center self-start mt-4"
                      v-if="!cart.cart_spec"
                    >
                      <span class="text-md lg:text-lg"
                        >數量：{{ cart.qty }}</span
                      >
                    </div>
                    <div v-else></div>
                    <h5 class="self-end text-lg lg:text-xl mt-4">
                      總計：<span class="font-bold"
                        >NT$ {{ $filters.currency(cart.final_total) }}</span
                      >
                    </h5>
                  </div>
                </div>
              </div>
              <div class="border-t border-gray-300" v-if="discount">
                <p class="text-warm text-lg py-4 text-end">
                  折扣：{{ discount }}
                </p>
              </div>
            </div>
          </div>
          <h5 class="mb-4 leading-loose md:flex justify-between">
            <p>付款方式：</p>
            <span>{{ order.user?.pay }}</span>
          </h5>
          <h5 class="leading-loose md:flex justify-between">
            <p>訂單金額：</p>
            <span class="font-bold"
              >NT$ {{ $filters.currency(order.total) }}</span
            >
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
              <span>{{ order.user?.name }}</span>
            </h5>
            <h5 class="mb-4 leading-loose md:flex justify-between">
              <p>訂購人電話：</p>
              <span>{{ order.user?.tel }}</span>
            </h5>
            <h5 class="mb-4 leading-loose md:flex justify-between">
              <p>訂購人Email：</p>
              <span>{{ order.user?.email }}</span>
            </h5>
            <h5 class="mb-4 leading-loose md:flex justify-between">
              <p>訂購人地址：</p>
              <span>{{ order.user?.address }}</span>
            </h5>
            <h5 class="mb-2" v-if="order.message">訂購人備註：</h5>
            <p class="leading-loose text-sm" v-if="order.message">
              {{ order.message }}
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { Collapse } from "flowbite";
import loadingStore from "@/stores/loadingStore.js";
import { mapState } from "pinia";

import swalMixin from "@/mixins/swal.js";

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  emits: ["emit-step"],
  mixins: [swalMixin],
  data() {
    return {
      order: {},
      discount: 0,
    };
  },
  methods: {
    getOrder() {
      this.loadings.fullLoading = true;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/order/${this.$route.params.id}`)
        .then((res) => {
          // console.log(res.data);
          this.loadings.fullLoading = false;
          this.order = res.data.order;
          this.discount = Object.values(this.order.products).reduce(
            (acc, cur) => {
              return acc + (cur.total - cur.final_total);
            },
            0
          );
        })
        .catch((err) => {
          this.loadings.fullLoading = false;
          //Swal
          this.userToast("error", err.response.data.message);
        });
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
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

    this.getOrder();
  },
};
</script>
