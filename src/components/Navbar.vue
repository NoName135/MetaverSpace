<template>
  <nav
    :class="[
      'w-full gap-2.5 fixed z-30 top-0 left-0 flex justify-center backdrop-opacity-[2px] border border-white/38',
      { 'bg-dark': windowTop > 100 || navToggled || $route.fullPath != '/' },
    ]"
  >
    <div class="w-full px-4 lg:px-24 py-4 bg-white/10">
      <div class="container flex flex-wrap items-center justify-between">
        <RouterLink to="/" class="flex items-center" @click="targetLink = ''">
          <img
            src="../../src/images/Logo.png"
            class="h-16 mr-3"
            alt="MetaverSpace"
          />
          <span
            class="self-center text-2xl font-bold whitespace-nowrap text-white"
            >MetaverSpace</span
          >
        </RouterLink>
        <div class="flex items-center lg:order-2 ml-auto lg:ml-0 relative">
          <!-- favorite button -->
          <div ref="navFavBtn" class="relative" @click.stop="toggleFav">
            <div class="group">
              <font-awesome-icon
                :icon="['fas', 'heart']"
                class="text-white text-2xl text-center cursor-pointer group-hover:text-primary"
              />
              <!-- badge -->
              <div
                class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-warm border-2 border-white rounded-full -top-2 -right-2 cursor-pointer"
                v-if="favorites.length > 0"
              >
                {{ favorites.length }}
              </div>
            </div>
            <!-- favorite menu -->
            <div
              ref="navFav"
              class="w-[240px] sm:w-[360px] z-10 hidden rounded-md shadow absolute top-14 sm:top-16 lg:top-[72px] -right-36 backdrop-opacity-[2px] border border-white/38 bg-dark"
              @click.stop="toggleFav"
            >
              <div class="p-2 bg-white/10">
                <ul class="text-sm text-white max-h-80 overflow-y-auto">
                  <li v-for="(item, i) in favorites" :key="item.id">
                    <div
                      class="flex py-2 border-dashed"
                      :class="{ 'border-t': i !== 0 }"
                    >
                      <div
                        class="basis-1/6 ml-2 hidden sm:flex justify-center items-center"
                      >
                        <img
                          :src="item.imageUrl"
                          class="w-14 h-14 object-cover bg-white"
                        />
                      </div>
                      <div
                        class="flex flex-col flex-1 h-14 ml-2 justify-between overflow-hidden"
                      >
                        <p
                          class="basis text-left font-bold whitespace-nowrap truncate"
                        >
                          {{ item.title }}
                        </p>
                        <p class="basis text-gray-300 text-left">
                          NT$ {{ $filters.currency(item.price) }}
                        </p>
                      </div>
                      <div
                        class="basis-1/12 flex justify-center items-center mx-1"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'xmark']"
                          size="2x"
                          class="text-center cursor-pointer hover:text-warm"
                          @click="updateFavorite(item)"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
                <div
                  class="flex justify-between items-center mt-2 mb-1 mx-1 pt-2 text-white border-t"
                >
                  <p class="text-sm" v-if="favorites.length > 0">
                    共 {{ favorites.length }} 種商品
                  </p>
                  <p v-else class="text-sm">沒有收藏商品</p>
                  <RouterLink
                    :to="{ name: '收藏清單' }"
                    @click="
                      () => {
                        hideCollapse();
                        targetLink = '';
                      }
                    "
                    class="relative primary-solid-button"
                    >查看收藏</RouterLink
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- cart button -->
          <div ref="navCartBtn" class="ml-8 relative" @click.stop="toggleCart">
            <div class="group">
              <font-awesome-icon
                :icon="['fas', 'shopping-cart']"
                class="text-white text-2xl text-center cursor-pointer group-hover:text-primary"
              />
              <!-- badge -->
              <div
                class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-warm border-2 border-white rounded-full -top-2 -right-2 cursor-pointer"
                v-if="cart.carts?.length > 0"
              >
                {{ cart.carts?.length }}
              </div>
            </div>
            <!-- cart menu -->
            <div
              ref="navCart"
              class="w-[240px] sm:w-[360px] z-10 hidden rounded-md shadow absolute top-14 sm:top-16 lg:top-[72px] -right-20 backdrop-opacity-[2px] border border-white/38 bg-dark"
              @click.stop="toggleCart"
            >
              <div class="p-2 bg-white/10">
                <ul class="text-sm text-white max-h-80 overflow-y-auto">
                  <li v-for="(item, i) in cart.carts" :key="item.id">
                    <div
                      class="flex py-2 border-dashed"
                      :class="{ 'border-t': i !== 0 }"
                    >
                      <div
                        class="basis-1/6 ml-2 hidden sm:flex justify-center mt-1"
                      >
                        <img
                          :src="item.product.imageUrl"
                          class="w-14 h-14 object-cover bg-white"
                        />
                      </div>
                      <div
                        class="flex flex-col flex-1 ml-2 justify-between overflow-hidden"
                      >
                        <div
                          class="flex justify-between items-end text-gray-300 mb-4"
                        >
                          <p class="basis text-left font-bold truncate">
                            {{ item.product.title }}
                          </p>
                          <p class="mx-2 whitespace-nowrap">
                            NT$ {{ $filters.currency(item.final_total) }}
                          </p>
                        </div>
                        <!-- 有規格顯示個規格數量 -->
                        <template v-if="item.cart_spec?.length">
                          <div
                            class="flex justify-between items-center"
                            :class="{ 'mt-2': i > 0 }"
                            v-for="(spec, i) in item.cart_spec"
                            :key="i"
                          >
                            <div class="truncate">
                              <button
                                type="button"
                                class="mr-1 cursor-pointer hover:text-warm disabled:text-gray-400 disabled:cursor-not-allowed"
                                @click="deleteCartSpec(item, i)"
                                :disabled="cartLoading.cartId === item.id"
                                v-if="item.cart_spec?.length > 1"
                              >
                                <font-awesome-icon
                                  :icon="['fas', 'circle-xmark']"
                                />
                              </button>
                              <span>規格：{{ spec.title }}</span>
                            </div>
                            <div class="ml-2 whitespace-nowrap">
                              <span>數量：</span>
                              <input
                                type="number"
                                min="1"
                                class="rounded text-sm text-dark text-right focus:ring-primary0 focus:border-primary0 h-6 w-11 mr-1 disabled:text-gray-400"
                                v-model.lazy="spec.qty"
                                @change="updateCart(item, i)"
                                :disabled="cartLoading.cartId === item.id"
                              />
                            </div>
                          </div>
                        </template>
                        <!-- 無規格顯示總數量 -->
                        <div class="flex justify-end items-center" v-else>
                          <span>數量：</span>
                          <input
                            type="number"
                            min="1"
                            class="rounded text-sm text-dark text-right focus:ring-primary0 focus:border-primary0 h-6 w-11 mr-1 disabled:text-gray-400"
                            v-model.lazy="item.qty"
                            @change="updateCart(item)"
                            :disabled="cartLoading.cartId === item.id"
                          />
                        </div>
                      </div>
                      <div class="basis-1/12 flex justify-center mx-1 mt-1">
                        <font-awesome-icon
                          v-if="cartLoading.cartId !== item.id"
                          :icon="['fas', 'trash-can']"
                          size="lg"
                          class="text-center cursor-pointer hover:text-warm"
                          @click="deleteCart(item.id)"
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
                    </div>
                  </li>
                </ul>
                <div
                  class="flex justify-between items-center mt-2 mb-1 mx-1 pt-2 text-white border-t"
                >
                  <p class="text-sm" v-if="cart.carts?.length > 0">
                    共 {{ cart.carts?.length }} 種商品
                  </p>
                  <p class="text-sm" v-else>購物車沒有商品</p>
                  <RouterLink
                    :to="{ name: '購物車' }"
                    @click="
                      () => {
                        hideCollapse();
                        targetLink = '';
                      }
                    "
                    class="relative primary-solid-button"
                    >前往購物車</RouterLink
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- hamburger button -->
          <button
            ref="navBtn"
            type="button"
            class="inline-flex items-center p-2 ml-8 text-sm text-white rounded-lg lg:hidden hover:bg-primary"
            @click.stop="toggleNav"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-8 h-8"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- hamburger menu -->
        <div
          class="items-center justify-between hidden w-full lg:flex lg:w-auto"
          ref="navMenu"
        >
          <ul
            class="flex flex-col p-4 mt-4 text-white text-lg text-center lg:flex-row lg:space-x-8 lg:mt-0 lg:text-md lg:items-center lg:font-medium rounded gap-2.5 border lg:border-0 border-white/87 nav-menu-shadow"
          >
            <li>
              <RouterLink
                :to="{ name: '預約體驗' }"
                class="block py-2 pl-3 pr-4 text-white"
                :class="[
                  targetLink === 'reserve'
                    ? 'bg-primary rounded-lg lg:p-2'
                    : 'hover:text-primary lg:mt-0 lg:p-0',
                ]"
                @click="targetLink = 'reserve'"
                >預約體驗
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: '交易紀錄' }"
                class="block py-2 pl-3 pr-4 text-white"
                :class="[
                  targetLink === 'order'
                    ? 'bg-primary rounded-lg lg:p-2'
                    : 'hover:text-primary lg:mt-0 lg:p-0',
                ]"
                @click="targetLink = 'order'"
                >交易記錄
              </RouterLink>
            </li>
            <li>
              <RouterLink
                :to="{ name: '商品列表' }"
                class="block py-2 pl-3 pr-4 text-white"
                :class="[
                  targetLink === 'products'
                    ? 'bg-primary rounded-lg lg:p-2'
                    : 'hover:text-primary lg:mt-0 lg:p-0',
                ]"
                @click="targetLink = 'products'"
                >商品列表
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Collapse } from "flowbite";

import cartStore from "@/stores/cartStore.js";
import favoriteStore from "@/stores/favoriteStore.js";
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {
      windowTop: 0,
      navToggled: false,
      navCollapse: "",
      cartCollapse: "",
      favCollapse: "",
      targetLink: "",
    };
  },
  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
    },
    hideCollapse() {
      this.navCollapse.collapse();
      this.cartCollapse.collapse();
      this.favCollapse.collapse();
    },
    toggleNav() {
      this.cartCollapse.collapse();
      this.favCollapse.collapse();
    },
    toggleCart() {
      this.navCollapse.collapse();
      this.favCollapse.collapse();
    },
    toggleFav() {
      this.navCollapse.collapse();
      this.cartCollapse.collapse();
    },
    ...mapActions(cartStore, [
      "getCart",
      "updateCart",
      "deleteCart",
      "deleteCartSpec",
    ]),
    ...mapActions(favoriteStore, ["getFavorite", "updateFavorite"]),
  },
  computed: {
    ...mapState(cartStore, ["cart", "cartLoading"]),
    ...mapState(favoriteStore, ["favorites"]),
  },
  watch: {
    $route(to, from) {
      if (to.fullPath !== from.fullPath) {
        if (this.$route.fullPath === "/reserve") {
          this.targetLink = "reserve";
        } else if (this.$route.fullPath === "/order") {
          this.targetLink = "order";
        } else if (this.$route.fullPath.includes("/products")) {
          this.targetLink = "products";
        } else {
          this.targetLink = "";
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    const { navMenu, navBtn, navCart, navCartBtn, navFav, navFavBtn } =
      this.$refs;
    const navOptions = {
      onExpand: () => {
        this.navToggled = true;
      },
      onCollapse: () => {
        this.navToggled = false;
      },
    };
    this.navCollapse = new Collapse(navMenu, navBtn, navOptions);
    this.cartCollapse = new Collapse(navCart, navCartBtn);
    this.favCollapse = new Collapse(navFav, navFavBtn);
    // 判斷目前開啟的頁面
    if (this.$route.fullPath === "/reserve") {
      this.targetLink = "reserve";
    } else if (this.$route.fullPath === "/order") {
      this.targetLink = "order";
    } else if (this.$route.fullPath.includes("/products")) {
      this.targetLink = "products";
    } else {
      this.targetLink = "";
    }
    this.getCart();
    this.getFavorite();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style>
/* navbar */
.nav-shadow {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.65);
}

.nav-menu-shadow {
  @media (max-width: 1023px) {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  }
}
</style>
