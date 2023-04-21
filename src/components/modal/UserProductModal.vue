<template>
  <div
    ref="productModal"
    id="productModal"
    data-modal-backdrop="static"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-8 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] md:h-full max-h-[calc(100vh-3rem)]"
  >
    <div class="relative w-full h-full max-w-2xl xl:h-auto">
      <!-- Modal content -->
      <div class="rounded-lg overflow-hidden shadow bg-dark">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border rounded-t-lg border-gray-600 bg-black fixed xl:static top-5 w-[calc(100%-2rem)] md:w-full max-w-2xl z-50"
        >
          <h3 class="text-lg md:text-xl font-semibold text-white">
            請選擇商品及數量
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
            @click="productModal.hide()"
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
        <div class="p-6 space-x-2 bg-dark border-t border-gray-400">
          <swiper
            ref="productSwiper"
            :spaceBetween="30"
            :centeredSlides="true"
            :navigation="true"
            :observer="true"
            :pagination="{
              clickable: true,
            }"
            :modules="productModules"
            class="productModalSwiper h-56 sm:h-80 md:h-96 bg-white"
          >
            <swiper-slide class="relative">
              <div
                class="h-full bg-cover bg-center"
                :style="{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${tempProduct.imageUrl})`,
                }"
              ></div>
            </swiper-slide>
            <swiper-slide
              v-for="(image, i) in tempProduct.imagesUrl"
              :key="i"
              class="relative"
            >
              <div
                class="h-full bg-cover bg-center"
                :style="{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`,
                }"
              ></div>
            </swiper-slide>
          </swiper>
          <div class="flex items-center">
            <h4 class="col-span-2 text-lg md:text-xl mr-3">
              {{ tempProduct.brand }}
            </h4>
            <div class="bg-white/30 px-3 py-2 rounded text-xs">
              {{ tempProduct.category }}
            </div>
          </div>
          <h3 class="mt-2 text-xl md:text-2xl font-bold">
            {{ tempProduct.title }}
          </h3>
          <p class="mt-2 ellipse5" v-html="tempProduct.description"></p>
          <p class="text-primary text-lg md:text-xl font-bold mt-4">
            NT$ {{ $filters.currency(tempProduct.price) }}
          </p>
        </div>
        <!-- Modal footer -->
        <div
          class="p-6 space-x-2 border-t rounded-b border-gray-400 bg-white/10"
        >
          <template />
          <div class="flex flex-wrap items-center" v-if="tempProduct.spec">
            <h5 class="text-lg mr-3 mb-6">規格：</h5>
            <ul
              class="flex flex-wrap text-sm"
              v-for="(spec, i) in tempProduct.spec"
              :key="i"
            >
              <li class="mb-6">
                <input
                  type="radio"
                  :id="`spec${i}`"
                  name="spec"
                  :value="spec"
                  v-model="cartSpec"
                  class="hidden peer"
                  required=""
                />
                <label
                  :for="`spec${i}`"
                  class="mr-2 bg-black hover:bg-primary2 peer-checked:bg-primary peer-checked:hover:bg-primary2 peer-checked:ring-1 peer-checked:ring-white px-3 py-2 rounded cursor-pointer"
                >
                  {{ spec }}
                </label>
              </li>
            </ul>
          </div>
          <p class="text-sm" v-if="tempProduct.spec?.length">
            ※ 選擇規格後才能加入購物車
          </p>
          <div class="sm:flex items-center mt-2">
            <div class="flex items-center">
              <div class="flex">
                <button
                  type="button"
                  class="bg-secondary hover:bg-secondary2 px-2 rounded-l text-sm disabled:bg-secondary2 disabled:text-gray-400 disabled:cursor-not-allowed"
                  @click="qty -= 1"
                  :disabled="qty === 1"
                >
                  －
                </button>
                <input
                  type="number"
                  class="w-12 bg-dark text-sm text-end focus:border-secondary"
                  min="1"
                  max="99"
                  v-model.lazy="qty"
                />
                <button
                  type="button"
                  class="bg-secondary hover:bg-secondary2 px-2 rounded-r text-sm disabled:bg-secondary2 disabled:text-gray-400 disabled:cursor-not-allowed"
                  @click="qty += 1"
                  :disabled="qty === 99"
                >
                  ＋
                </button>
              </div>
            </div>
            <button
              type="button"
              class="w-full primary-button sm:ml-2 mt-4 sm:mt-0 relative"
              :disabled="
                cartLoading.productModal ||
                (tempProduct.spec?.length ? !cartSpec : false)
              "
              @click="addCart(tempProduct, qty, cartSpec)"
            >
              <svg
                v-if="cartLoading.productModal"
                class="animate-spin h-5 w-5 mr-3 text-white absolute"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              加入購物車
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper required modules
import { Navigation, Pagination } from "swiper";

import { Modal } from "flowbite";

import loadingStore from "@/stores/loadingStore.js";
import cartStore from "@/stores/cartStore.js";
import { mapActions, mapState } from "pinia";

import swalMixin from "@/mixins/swal.js";

// const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  props: ["page"],
  mixins: [swalMixin],
  data() {
    return {
      productModules: [Navigation, Pagination],
      tempProduct: [],
      cartSpec: "",
      qty: 1,
    };
  },
  methods: {
    openModal(item) {
      this.tempProduct = { ...item };
      // console.log(this.tempProduct);
      // 打開 modal 時讓 swiper 回到第一張圖
      this.$refs.productSwiper.$el.swiper.slideTo(0);
      this.cartSpec = "";
      this.qty = 1;
      this.productModal.show();
    },
    ...mapActions(cartStore, ["getCart", "addCart", "createModalRef"]),
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
    ...mapState(cartStore, ["cart", "cartLoading"]),
  },
  watch: {
    qty() {
      if (this.qty < 1) {
        this.qty = 1;
      }
      if (this.qty > 99) {
        this.qty = 99;
      }
    },
  },
  mounted() {
    // modal options
    const modalOptions = {
      placement: "center",
      backdrop: "dynamic",
      backdropClasses: "bg-black bg-opacity-80 fixed inset-0 z-30",
      closable: true,
    };
    this.productModal = new Modal(this.$refs.productModal, modalOptions);
    this.createModalRef(this.productModal);
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
.ellipse5 {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
