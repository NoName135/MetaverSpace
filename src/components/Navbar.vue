<template>
  <nav
    :class="[
      'w-full gap-2.5 fixed z-40 top-0 left-0 flex justify-center backdrop-opacity-[2px] border border-white/38',
      { 'bg-dark': windowTop > 100 || navToggled || $route.fullPath != '/' },
    ]"
  >
    <div class="w-full px-4 lg:px-24 py-4 bg-white/10">
      <div class="container flex flex-wrap items-center justify-between">
        <router-link to="/" class="flex items-center">
          <img
            src="../../src/images/Logo.png"
            class="h-16 mr-3"
            alt="MetaverSpace"
          />
          <span
            class="self-center text-2xl font-bold whitespace-nowrap text-white"
            >MetaverSpace</span
          >
        </router-link>
        <div class="flex items-center lg:order-2 ml-auto lg:ml-0 relative">
          <!-- favorite button -->
          <div ref="navFavBtn" class="relative" @click.stop="toggleFav">
            <font-awesome-icon
              :icon="['fas', 'heart']"
              class="text-white text-2xl text-center cursor-pointer hover:text-primary"
            />
            <!-- badge -->
            <div
              class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-warm border-2 border-white rounded-full -top-2 -right-2 cursor-pointer"
            >
              20
            </div>
            <!-- favorite menu -->
            <div
              ref="navFav"
              class="w-[240px] sm:w-[360px] z-10 hidden rounded-md shadow absolute top-[72px] -right-36 backdrop-opacity-[2px] border border-white/38 bg-dark"
              @click.stop="toggleFav"
            >
              <div class="p-2 bg-white/10">
                <ul class="text-sm text-white">
                  <li>
                    <div class="flex py-2 border-b border-dashed">
                      <div
                        class="basis-1/6 ml-2 hidden sm:flex justify-center items-center"
                      >
                        <img
                          src="../images/products/Meta_Oculus_Quest2.jpg"
                          class="w-14 h-14 object-cover"
                        />
                      </div>
                      <div
                        class="flex flex-col flex-1 h-14 ml-2 justify-between overflow-hidden"
                      >
                        <p
                          class="basis text-left font-bold whitespace-nowrap truncate"
                        >
                          Oculus Quest 2 256G
                        </p>
                        <p class="basis text-gray-300 text-left">NT$ 17,500</p>
                      </div>
                      <div
                        class="basis-1/12 flex justify-center items-center mx-1"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'xmark']"
                          size="2x"
                          class="text-center cursor-pointer hover:text-warm"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex py-2 border-b border-dashed">
                      <div
                        class="basis-1/6 ml-2 hidden sm:flex justify-center items-center"
                      >
                        <img
                          src="../images/products/VIVE_XR_Elite.jpg"
                          class="w-14 h-14 object-cover"
                        />
                      </div>
                      <div
                        class="flex flex-col flex-1 h-14 ml-2 justify-between overflow-hidden"
                      >
                        <p
                          class="basis text-left font-bold whitespace-nowrap truncate"
                        >
                          XR Elite
                        </p>
                        <p class="basis text-gray-300 text-left">NT$ 34,300</p>
                      </div>
                      <div
                        class="basis-1/12 flex justify-center items-center mx-1"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'xmark']"
                          size="2x"
                          class="text-center cursor-pointer hover:text-warm"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
                <div
                  class="flex justify-between items-center mt-4 mb-1 mx-1 text-white"
                >
                  <p class="text-sm">共 20 種商品</p>
                  <router-link
                    :to="{ name: '收藏清單' }"
                    @click="hideCollapse"
                    class="relative primary-solid-button"
                    >查看我的收藏</router-link
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- cart button -->
          <div ref="navCartBtn" class="ml-8 relative" @click.stop="toggleCart">
            <font-awesome-icon
              :icon="['fas', 'shopping-cart']"
              class="text-white text-2xl text-center cursor-pointer hover:text-primary"
            />
            <!-- badge -->
            <div
              class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-warm border-2 border-white rounded-full -top-2 -right-2 cursor-pointer"
            >
              20
            </div>
            <!-- cart menu -->
            <div
              ref="navCart"
              class="w-[240px] sm:w-[360px] z-10 hidden rounded-md shadow absolute top-[72px] -right-20 backdrop-opacity-[2px] border border-white/38 bg-dark"
              @click.stop="toggleCart"
            >
              <div class="p-2 bg-white/10">
                <ul class="text-sm text-white">
                  <li>
                    <div class="flex py-2 border-b border-dashed">
                      <div
                        class="basis-1/6 ml-2 hidden sm:flex justify-center items-center"
                      >
                        <img
                          src="../images/products/Meta_Oculus_Quest2.jpg"
                          class="w-14 h-14 object-cover"
                        />
                      </div>
                      <div
                        class="flex flex-col flex-1 h-14 ml-2 justify-between overflow-hidden"
                      >
                        <p
                          class="basis text-left font-bold whitespace-nowrap truncate"
                        >
                          Oculus Quest 2 256G
                        </p>
                        <div
                          class="flex justify-between items-end text-gray-300"
                        >
                          <p class="flex-1 text-left">NT$ 34,300</p>
                          <div class="flex items-end">
                            <span>數量：</span>
                            <input
                              type="number"
                              min="1"
                              max="99"
                              value="1"
                              class="rounded text-sm text-dark text-right h-6 w-14 mr-1"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        class="basis-1/12 flex justify-center items-center mx-1"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'xmark']"
                          size="2x"
                          class="text-center cursor-pointer hover:text-warm"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex py-2 border-b border-dashed">
                      <div
                        class="basis-1/6 ml-2 hidden sm:flex justify-center items-center"
                      >
                        <img
                          src="../images/products/VIVE_XR_Elite.jpg"
                          class="w-14 h-14 object-cover"
                        />
                      </div>
                      <div
                        class="flex flex-col flex-1 h-14 ml-2 justify-between overflow-hidden"
                      >
                        <p
                          class="basis text-left font-bold whitespace-nowrap truncate"
                        >
                          XR Elite
                        </p>
                        <div
                          class="flex flex-row justify-between items-end text-gray-300"
                        >
                          <p class="flex-1 text-left">NT$ 34,300</p>
                          <div class="flex items-end">
                            <span>數量：</span>
                            <input
                              type="number"
                              min="1"
                              max="99"
                              value="1"
                              class="rounded text-sm text-dark text-right h-6 w-14 mr-1"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        class="basis-1/12 flex justify-center items-center mx-1"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'xmark']"
                          size="2x"
                          class="text-center cursor-pointer hover:text-warm"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
                <div
                  class="flex justify-between items-center mt-4 mb-1 mx-1 text-white"
                >
                  <p class="text-sm">共 20 種商品</p>
                  <router-link
                    :to="{ name: '購物車' }"
                    @click="hideCollapse"
                    class="relative primary-solid-button"
                    >前往購物車</router-link
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
              <router-link
                :to="{ name: '預約體驗' }"
                class="block py-2 pl-3 pr-4 rounded-lg lg:p-2 text-white bg-primary"
                aria-current="page"
                >預約體驗
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: '交易紀錄' }"
                class="block py-2 pl-3 pr-4 mt-2 lg:mt-0 lg:p-0 text-white hover:text-primary"
                >交易記錄
              </router-link>
            </li>
            <li>
              <router-link
                :to="{ name: '商品列表' }"
                class="block py-2 pl-3 pr-4 mt-2 lg:mt-0 lg:p-0 text-white hover:text-primary"
                >商品列表
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Collapse } from "flowbite";

export default {
  data() {
    return {
      windowTop: 0,
      navToggled: false,
      navCollapse: "",
      cartCollapse: "",
      favCollapse: "",
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
