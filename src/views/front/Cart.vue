<template>
  <div class="mt-nav">
    <div class="container px-2 md:px-0 pt-8">
      <div class="border-2 rounded-lg xl:mx-48 overflow-hidden">
        <div
          class="flex justify-between items-center px-4 py-2.5 bg-black/50 border-b-2"
        >
          <h1 class="text-xl font-bold">我的購物車</h1>
          <button
            type="button"
            class="ml-2 dark-solid-button"
            @click="
              favorites.length
                ? favoriteModal.openModal()
                : userToast('info', '收藏清單沒有商品')
            "
          >
            收藏清單
          </button>
        </div>
        <div class="px-8 pb-4">
          <!-- 購物車商品 -->
          <div
            class="mt-10 border-b flex flex-col items-center pb-6"
            v-if="!Object.keys(cart.carts)?.length"
          >
            <p class="text-2xl md:text-3xl">購物車沒有商品</p>
            <RouterLink to="./products" class="primary-button mt-4"
              >前往商店</RouterLink
            >
          </div>
          <ul v-else>
            <li class="py-8 border-b" v-for="item in cart.carts" :key="item.id">
              <div class="flex justify-between items-center">
                <button
                  type="button"
                  class="w-18 focus:outline-none focus:ring-4 font-medium rounded text-sm px-4 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3 disabled:bg-primary2 disabled:text-gray-400 disabled:cursor-not-allowed"
                  :disabled="cartLoading.cartId === item.id"
                  @click="moveToFavorite(item.id, item.product)"
                >
                  <font-awesome-icon
                    :icon="['fas', 'heart']"
                    class="mr-2"
                  ></font-awesome-icon
                  ><span>移動至收藏</span>
                </button>
                <font-awesome-icon
                  v-if="cartLoading.cartId !== item.id"
                  :icon="['fas', 'trash-can']"
                  class="text-xl lg:text-2xl hover:text-warm cursor-pointer"
                  @click="deleteAlert(item)"
                />
                <svg
                  v-else
                  class="animate-spin h-5 w-5 text-white"
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
              </div>
              <div class="grid grid-cols-12 md:gap-6 mt-6">
                <img
                  :src="item.product.imageUrl"
                  alt=""
                  class="col-span-3 hidden md:block w-full h-28 lg:h-32 xl:h-40 object-cover rounded bg-white"
                />
                <div
                  class="col-span-full md:col-span-9 flex flex-col justify-between"
                >
                  <div class="flex flex-wrap justify-between items-center">
                    <h2 class="text-lg lg:text-xl mr-4">
                      {{ item.product.brand }}
                    </h2>
                    <RouterLink
                      :to="`/product/${item.product.id}`"
                      class="mt-2 sm:mt-0 dark-solid-button py-2 relative whitespace-nowrap"
                    >
                      查看商品
                      <font-awesome-icon
                        :icon="['fas', 'arrow-up-right-from-square']"
                        class="absolute top-1 right-1 text-sm lg:text-md"
                      ></font-awesome-icon>
                    </RouterLink>
                  </div>
                  <h3 class="text-xl lg:text-2xl mt-4 lg:mt-6 font-bold">
                    {{ item.product.title }}
                  </h3>
                  <div
                    class="flex justify-between sm:justify-start items-start sm:items-center mt-8"
                    v-for="(spec, i) in item.cart_spec"
                    :key="spec.title"
                  >
                    <div class="flex flex-col sm:flex-row justify-between">
                      <select
                        :id="`spec${i}`"
                        class="border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                        :value="spec.title"
                        @change="(e) => updateCartSpec(item, e.target.value, i)"
                        :disabled="cartLoading.cartId === item.id"
                      >
                        <option
                          class="bg-dark/10"
                          v-for="productSpec in item.product.spec"
                          :key="productSpec"
                          :value="productSpec"
                        >
                          {{ productSpec }}
                        </option>
                      </select>
                      <div class="flex mt-3 sm:mt-0 sm:ml-4">
                        <span
                          class="sm:hidden flex items-center text-md lg:text-lg"
                          >數量：</span
                        >
                        <button
                          type="button"
                          class="bg-secondary hover:bg-secondary2 px-2 rounded-l text-sm disabled:bg-secondary2 disabled:text-gray-400 disabled:cursor-not-allowed"
                          @click="
                            () => {
                              spec.qty -= 1;
                              updateCart(item, i);
                            }
                          "
                          :disabled="
                            spec.qty === 1 || cartLoading.cartId === item.id
                          "
                        >
                          －
                        </button>
                        <input
                          type="number"
                          class="w-12 bg-dark text-sm text-end focus:border-secondary disabled:text-gray-500"
                          min="1"
                          max="99"
                          v-model.lazy="spec.qty"
                          @change="updateCart(item, i)"
                          :disabled="cartLoading.cartId === item.id"
                        />
                        <button
                          type="button"
                          class="bg-secondary hover:bg-secondary2 px-2 rounded-r text-sm disabled:bg-secondary2 disabled:text-gray-400 disabled:cursor-not-allowed"
                          @click="
                            () => {
                              spec.qty += 1;
                              updateCart(item, i);
                            }
                          "
                          :disabled="
                            spec.qty === 99 || cartLoading.cartId === item.id
                          "
                        >
                          ＋
                        </button>
                      </div>
                    </div>
                    <font-awesome-icon
                      :icon="['fas', 'xmark']"
                      size="2xl"
                      class="sm:hidden hover:text-warm"
                      @click="deleteAlert(item, i)"
                    />
                    <button
                      type="button"
                      class="hidden sm:block ml-8 w-18 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-warm hover:bg-warm2 focus:ring-warm3 disabled:bg-warm2 disabled:text-gray-300 disabled:cursor-not-allowed"
                      @click="deleteAlert(item, i)"
                      :disabled="cartLoading.cartId === item.id"
                      v-if="item.cart_spec?.length > 1"
                    >
                      刪除
                    </button>
                  </div>
                  <div
                    class="flex flex-col sm:flex-row justify-between items-center"
                  >
                    <div
                      class="flex items-center self-start mt-6"
                      v-if="!item.cart_spec"
                    >
                      <span class="text-md lg:text-lg">數量：</span>
                      <div class="flex sm:mt-0 sm:ml-4">
                        <button
                          type="button"
                          class="bg-secondary hover:bg-secondary2 px-2 rounded-l text-sm disabled:bg-secondary2 disabled:text-gray-400 disabled:cursor-not-allowed"
                          @click="
                            () => {
                              item.qty -= 1;
                              updateCart(item, i);
                            }
                          "
                          :disabled="
                            item.qty === 1 || cartLoading.cartId === item.id
                          "
                        >
                          －
                        </button>
                        <input
                          type="number"
                          class="w-12 bg-dark text-sm text-end focus:border-secondary disabled:text-gray-500"
                          min="1"
                          max="99"
                          v-model.lazy="item.qty"
                          @change="updateCart(item, i)"
                          :disabled="cartLoading.cartId === item.id"
                        />
                        <button
                          type="button"
                          class="bg-secondary hover:bg-secondary2 px-2 rounded-r text-sm disabled:bg-secondary2 disabled:text-gray-400 disabled:cursor-not-allowed"
                          @click="
                            () => {
                              item.qty += 1;
                              updateCart(item, i);
                            }
                          "
                          :disabled="
                            item.qty === 99 || cartLoading.cartId === item.id
                          "
                        >
                          ＋
                        </button>
                      </div>
                    </div>
                    <div v-else></div>
                    <h5 class="self-end text-lg lg:text-xl mt-6">
                      總計：<span class="font-bold"
                        >NT$ {{ $filters.currency(item.total) }}</span
                      >
                    </h5>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <!-- 結帳金額區塊 -->
          <div class="flex flex-col items-end py-6">
            <h4 class="mt-4 xs:mt-0 xs:ml-4 text-lg lg:text-xl text-end">
              結帳小計：<span class="font-bold whitespace-nowrap"
                >NT$ {{ $filters.currency(cart.total) }}</span
              >
            </h4>
            <div class="mt-4 flex items-center">
              <input
                type="text"
                placeholder="請輸入優惠碼"
                class="border text-sm rounded block w-28 sm:w-36 p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-secondary focus:border-secondary"
                v-model="coupon"
              />
              <button
                type="button"
                class="ml-2 w-18 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-secondary hover:bg-secondary2 focus:ring-secondary3"
                @click="addCoupon"
              >
                套用
              </button>
            </div>
            <h5
              class="mt-4 text-warm text-lg lg:text-xl"
              v-if="cart.total - cart.final_total > 0"
            >
              折扣：<span class="font-bold"
                >NT$
                {{
                  $filters.currency(Math.ceil(cart.total - cart.final_total))
                }}</span
              >
            </h5>
            <h3 class="mt-4 text-primary0 text-xl lg:text-2xl text-end">
              總金額：<span class="font-bold whitespace-nowrap"
                >NT$ {{ $filters.currency(cart.final_total) }}</span
              >
            </h3>
            <RouterLink
              :to="{ name: '結帳' }"
              class="mt-8 primary-button"
              v-if="cart.total"
              >前往結帳</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
    <user-favorite-modal ref="favoriteModal"></user-favorite-modal>
  </div>
</template>

<script>
import UserFavoriteModal from "@/components/modal/UserFavoriteModal.vue";

import loadingStore from "@/stores/loadingStore.js";
import cartStore from "@/stores/cartStore.js";
import favoriteStore from "@/stores/favoriteStore.js";
import { mapActions, mapState } from "pinia";

import swalMixin from "@/mixins/swal.js";

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  mixins: [swalMixin],
  data() {
    return {
      coupon: "",
    };
  },
  methods: {
    deleteAlert(item, i) {
      let spec = "";
      if (i >= 0) {
        spec = `(${item.cart_spec[i].title})`;
      }
      this.$swal
        .fire({
          title: "刪除購物車商品",
          text: `確定要刪除 ${item.product.title} ${spec}？`,
          icon: "warning",
          confirmButtonColor: "#FE5F50",
          confirmButtonText: "確定刪除",
          backdrop: " rgba(0,0,0,0.8)",
          showCancelButton: true,
          cancelButtonColor: "#6b7280",
        })
        .then((result) => {
          if (result.isConfirmed) {
            if (i >= 0) {
              this.deleteCartSpec(item, i);
            } else {
              this.deleteCart(item.id);
            }
          }
        });
    },
    async moveToFavorite(id, product) {
      if (
        this.favorites.some((item) => {
          return item.id === product.id;
        })
      ) {
        this.userToast("warning", "商品已在收藏清單");
      } else {
        await this.deleteCart(id);
        this.updateFavorite(product);
      }
    },
    addCoupon() {
      this.$http
        .post(`${VITE_API}/api/${VITE_PATH}/coupon`, {
          data: {
            code: this.coupon,
          },
        })
        .then((res) => {
          // console.log(res.data);
          this.userToast("success", res.data.message);
          this.getCart();
        })
        .catch((err) => {
          this.userToast("error", err.response.data.message);
        });
    },
    ...mapActions(cartStore, [
      "getCart",
      "updateCart",
      "updateCartSpec",
      "deleteCart",
      "deleteCartSpec",
    ]),
    ...mapActions(favoriteStore, ["updateFavorite"]),
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
    ...mapState(cartStore, ["cart", "cartLoading"]),
    ...mapState(favoriteStore, ["favorites"]),
  },
  mounted() {
    this.favoriteModal = this.$refs.favoriteModal;
    if (this.cart.carts?.length) {
      this.coupon = this.cart.carts[0].coupon?.code || "";
    }
  },
  components: {
    UserFavoriteModal,
  },
};
</script>
