<template>
  <div class="lg:pt-8">
    <section class="border-2 rounded-lg">
      <h1 class="p-4 bg-black/50 text-xl font-bold border-b-2">訂單內容</h1>
      <div class="py-8 flex flex-col">
        <div
          class="mx-auto text-md md:text-lg px-6 md:px-0 w-full md:w-[450px] lg:w-[565px] xl:w-[620px]"
        >
          <h5 class="mb-4 leading-loose xs:flex justify-between">
            <p>訂單編號：</p>
            <span>{{ order.id }}</span>
          </h5>
          <h5 class="mb-4 leading-loose xs:flex justify-between">
            <p>訂單日期：</p>
            <span>{{ $filters.date(order.create_at) }}</span>
          </h5>
          <h5 class="mb-4 leading-loose xs:flex justify-between">
            <p>訂購人姓名：</p>
            <span>{{ order.user?.name }}</span>
          </h5>
          <h5 class="mb-4 leading-loose xs:flex justify-between">
            <p>訂購人電話：</p>
            <span>{{ order.user?.tel }}</span>
          </h5>
          <h5 class="mb-4 leading-loose xs:flex justify-between">
            <p>訂購人Email：</p>
            <span>{{ order.user?.email }}</span>
          </h5>
          <h5 class="mb-4 leading-loose xs:flex justify-between">
            <p class="whitespace-nowrap mr-4">訂購人地址：</p>
            <span class="text-end">{{ order.user?.address }}</span>
          </h5>
          <h5 class="mb-4 leading-loose xs:flex justify-between">
            <p>付款方式：</p>
            <span>{{ order.user?.pay }}</span>
          </h5>
          <h5 class="mb-6 leading-loose xs:flex justify-between">
            <p>訂單金額：</p>
            <span class="font-bold"
              >NT$ {{ $filters.currency(order.total) }}</span
            >
          </h5>
          <div>
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
                <div
                  class="py-8 grid grid-cols-5 gap-4"
                  :class="{ 'border-t': i > 0 }"
                  v-for="(cart, id, i) in order.products"
                  :key="id"
                >
                  <img
                    :src="cart.product.imageUrl"
                    :alt="cart.product.title"
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
                          >NT$ {{ $filters.currency(cart.total) }}</span
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
            <div class="flex justify-end">
              <button
                type="button"
                class="w-full md:w-36 primary-button"
                :disabled="payLoading"
                @click="payOrder()"
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
      payLoading: false,
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
    payOrder() {
      this.payLoading = true;
      this.$http
        .post(`${VITE_API}/api/${VITE_PATH}/pay/${this.$route.params.id}`)
        .then((res) => {
          // console.log(res.data);
          this.payLoading = false;
          //Swal
          this.userToast("success", res.data.message);
          this.$router.replace(`/checkout/send/${this.$route.params.id}`);
        })
        .catch((err) => {
          this.payLoading = false;
          //Swal
          this.userToast("error", err.response.data.message);
        });
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
  mounted() {
    this.$emit("emit-step", 2);

    const detailCollapseOptions = {
      onToggle: function (item) {
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
