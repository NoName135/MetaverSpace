<template>
  <div
    ref="orderModal"
    id="orderModal"
    tabindex="-1"
    class="hidden fixed z-40 w-full px-4 overflow-x-hidden overflow-y-auto top-28 left-0 right-0 h-auto"
  >
    <div class="w-full max-w-4xl h-full max-h-[calc(100vh-8.5rem)]">
      <!-- Modal content -->
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b bg-black top-[6rem] w-[calc(100%-2rem)] max-w-4xl z-50 rounded-t-lg fixed"
        >
          <h3 class="text-xl font-semibold text-gray-300">編輯訂單</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            @click="orderModal.hide()"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 mt-12">
          <div class="w-full max-w-xl mx-auto space-y-6">
            <h3 class="font-medium">
              訂單編號<span class="ml-4 text-lg font-semibold text-gray-900">{{
                tempOrder.id
              }}</span>
            </h3>
            <h3 class="font-medium">
              訂單日期<span class="ml-4 text-lg font-semibold text-gray-900">{{
                $filters.date(tempOrder.create_at)
              }}</span>
            </h3>
            <div>
              <label for="name" class="block mb-2 font-medium"
                >訂購人姓名<span class="font-bold text-rose-500">*</span></label
              >
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                required
                v-model="tempOrder.user.name"
              />
            </div>
            <div>
              <label for="phone" class="block mb-2 font-medium"
                >訂購人電話<span class="font-bold text-rose-500">*</span></label
              >
              <input
                type="tel"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                required
                v-model="tempOrder.user.tel"
              />
            </div>
            <div>
              <label for="email" class="block mb-2 font-medium"
                >訂購人Email<span class="font-bold text-rose-500"
                  >*</span
                ></label
              >
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                required
                v-model="tempOrder.user.email"
              />
            </div>
            <div>
              <label for="address" class="block mb-2 font-medium"
                >訂購人地址<span class="font-bold text-rose-500">*</span></label
              >
              <input
                type="text"
                id="address"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                required
                v-model="tempOrder.user.address"
              />
            </div>
            <div>
              <label for="message" class="block mb-2 font-medium"
                >訂單備註</label
              >
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                v-model="tempOrder.message"
              ></textarea>
            </div>
            <h3 class="font-medium">
              付款方式<span class="ml-4 text-lg font-medium text-gray-900">
                {{ tempOrder.user.pay }}
              </span>
              <input
                type="text"
                id="address"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                required
                v-model="tempOrder.user.pay"
              />
            </h3>
            <h3 class="font-medium">
              訂單金額<span class="ml-4 text-xl font-semibold text-teal-500"
                >NT$ {{ $filters.currency(tempOrder.total) }}</span
              >
            </h3>
            <!-- 訂單內容區塊 -->
            <div>
              <button
                type="button"
                ref="detailCollapseBtn"
                class="flex justify-around items-center w-28 focus:outline-none font-medium rounded-lg text-sm p-1.5 bg-violet-300 hover:bg-violet-400"
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
              <div ref="detailCollapseMenu" class="px-6 border-2 rounded mb-10">
                <div
                  class="py-8 grid grid-cols-5 gap-4"
                  :class="{ 'border-t': i > 0 }"
                  v-for="(cart, id, i) in tempOrder.products"
                  :key="id"
                >
                  <img
                    :src="cart.product.imageUrl"
                    alt=""
                    class="flex w-full h-24 object-cover rounded bg-white"
                  />
                  <div
                    class="col-span-full md:col-span-4 flex flex-col justify-between"
                  >
                    <h2 class="text-lg">{{ cart.product.brand }}</h2>
                    <h3 class="text-xl mt-3">
                      {{ cart.product.title }}
                    </h3>
                    <div
                      class="flex items-center mt-4 text-lg"
                      v-for="spec in cart.cart_spec"
                      :key="spec.title"
                    >
                      <div class="flex flex-row justify-between">
                        規格：{{ spec.title }}
                        <div class="flex ml-4">數量：{{ spec.qty }}</div>
                      </div>
                    </div>
                    <div class="flex flex-row justify-between items-center">
                      <div
                        class="flex items-center self-start mt-4"
                        v-if="!cart.cart_spec"
                      >
                        <span class="text-lg">數量：{{ cart.qty }}</span>
                      </div>
                      <div v-else></div>
                      <h5 class="self-end text-xl mt-4">
                        總計：<span class="font-bold"
                          >NT$ {{ $filters.currency(cart.total) }}</span
                        >
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="border-t border-gray-300" v-if="discount">
                  <p class="text-rose-500 text-lg py-4 text-end">
                    折扣：{{ discount }}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="sr-only peer"
                    :checked="tempOrder.is_paid"
                    v-model="tempOrder.is_paid"
                  />
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"
                  ></div>
                  <span class="ml-3 text-md font-medium text-gray-900">{{
                    tempOrder.is_paid ? "已付款" : "未付款"
                  }}</span>
                </label>
              </div>
              <div class="flex justify-end">
                <button
                  type="button"
                  class="admin-delete-button"
                  @click="orderModal.hide()"
                >
                  取消
                </button>
                <button
                  type="button"
                  class="ml-6 admin-primary-button"
                  :disabled="
                    !tempOrder.user.name ||
                    !tempOrder.user.tel ||
                    !tempOrder.user.email ||
                    !tempOrder.user.address
                  "
                  :title="[
                    !tempOrder.user.name ||
                    !tempOrder.user.tel ||
                    !tempOrder.user.email ||
                    !tempOrder.user.address
                      ? '&quot;*&quot;號為必填欄位'
                      : '',
                  ]"
                  @click="updateOrder"
                >
                  確認
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Collapse, Modal } from "flowbite";

import { mapState } from "pinia";
import loadingStore from "@/stores/loadingStore.js";

import swalMixin from "@/mixins/swal.js";

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  props: ["page"],
  mixins: [swalMixin],
  data() {
    return {
      tempOrder: { user: {}, products: {} },
      discount: 0,
    };
  },
  methods: {
    openModal(item) {
      this.detailCollapse.collapse();
      this.tempOrder = JSON.parse(JSON.stringify(item));
      this.discount = Object.values(this.tempOrder.products).reduce(
        (acc, cur) => {
          return acc + (cur.total - cur.final_total);
        },
        0
      );
      this.orderModal.show();
      // modal 移到最上方
      this.$refs.orderModal.scrollTop = 0;
    },
    // 更新產品資料
    updateOrder() {
      this.loadings.fullLoading = true;
      this.$http
        .put(`${VITE_API}/api/${VITE_PATH}/admin/order/${this.tempOrder.id}`, {
          data: this.tempOrder,
        })
        .then(() => {
          // console.log(res.data);
          this.$emit("updateOrders", this.page);
          this.orderModal.hide();
        })
        .catch((err) => {
          // console.log(err);
          // Swal
          this.adminToast("error", err.response.data.message);
        });
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
  mounted() {
    // collapse options
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

    // modal options
    const modalOptions = {
      placement: "center",
      backdrop: "static",
      backdropClasses: "bg-black bg-opacity-80 fixed inset-0 z-30",
      closable: true,
    };
    this.orderModal = new Modal(this.$refs.orderModal, modalOptions);
  },
};
</script>
