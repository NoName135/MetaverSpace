<template>
  <div class="mt-nav">
    <div class="container px-2 md:px-0 pt-8">
      <div class="border-2 rounded-lg xl:mx-48 overflow-hidden">
        <h1 class="p-4 bg-black/50 text-xl font-bold border-b-2">收藏清單</h1>
        <p
          class="mt-10 text-center text-2xl md:text-3xl"
          v-if="!favorites.length"
        >
          收藏清單沒有商品
        </p>
        <ul class="px-8 pb-4">
          <li
            class="py-8"
            :class="{ 'border-t': i > 0 }"
            v-for="(item, i) in favorites"
            :key="item.id"
          >
            <div class="flex justify-between items-center mb-4">
              <router-link
                :to="`/product/${item.id}`"
                class="mt-2 sm:mt-0 sm:mr-4 dark-solid-button py-2 relative whitespace-nowrap"
              >
                查看商品
                <font-awesome-icon
                  :icon="['fas', 'arrow-up-right-from-square']"
                  class="absolute top-1 right-1 text-sm lg:text-md"
                ></font-awesome-icon> </router-link
              ><font-awesome-icon
                v-if="cartLoading.cartId !== item.id"
                :icon="['fas', 'trash-can']"
                class="text-xl lg:text-2xl hover:text-warm cursor-pointer"
                @click="deleteFavorite(item)"
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
            <div class="grid grid-cols-5 gap-6">
              <img
                :src="item.imageUrl"
                alt=""
                class="hidden md:flex self-center w-full h-28 lg:h-32 xl:h-40 object-cover rounded bg-white"
              />
              <div
                class="col-span-full md:col-span-4 flex flex-col justify-between"
              >
                <h2 class="text-lg lg:text-xl">{{ item.brand }}</h2>

                <h3 class="text-xl lg:text-2xl mt-4 lg:mt-6">
                  {{ item.title }}
                </h3>
                <div>
                  <div class="md:flex justify-between items-center mt-4">
                    <h5 class="text-lg lg:text-xl">
                      售價：<span class="font-bold"
                        >NT$ {{ $filters.currency(item.price) }}</span
                      >
                    </h5>
                    <div
                      class="flex flex-col sm:flex-row justify-between sm:justify-end items-end md:items-end mt-4 md:mt-1"
                    >
                      <p class="text-sm sm:mr-3" v-if="item.spec">
                        ※ 請先選擇規格
                      </p>
                      <div v-else></div>
                      <select
                        :id="`spec${i}`"
                        class="mt-4 sm:mt-0 border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary"
                        v-if="item.spec"
                        v-model="cart_specs[i]"
                      >
                        <option selected disabled value="" class="bg-dark/10">
                          選擇規格
                        </option>
                        <option
                          v-for="(spec, i) in item.spec"
                          :key="i"
                          :value="spec"
                          class="bg-dark/10"
                        >
                          {{ spec }}
                        </option>
                      </select>
                      <button
                        type="button"
                        class="mt-4 sm:mt-0 primary-button sm:ml-3"
                        :disabled="
                          (item.spec && !cart_specs[i]) ||
                          cartLoading.cartId === item.id
                        "
                        @click="moveToCart(item, cart_specs[i])"
                      >
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import favoriteStore from "@/stores/favoriteStore.js";
import cartStore from "@/stores/cartStore.js";
import { mapActions, mapState } from "pinia";

import swalMixin from "@/mixins/swal.js";

export default {
  mixins: [swalMixin],
  methods: {
    moveToCart(favorite, spec) {
      if (
        this.cart.carts.some((item) => {
          return item.product_id === favorite.id;
        })
      ) {
        // Swal
        this.userToast("warning", "此商品已在購物車");
      } else {
        this.addCart(favorite, 1, spec);
      }
    },
    deleteFavorite(item) {
      this.$swal
        .fire({
          title: "刪除收藏商品",
          text: `確定要刪除 ${item.title}？`,
          icon: "warning",
          confirmButtonColor: "#FE5F50",
          confirmButtonText: "確定刪除",
          backdrop: " rgba(0,0,0,0.8)",
          showCancelButton: true,
          cancelButtonColor: "#6b7280",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.updateFavorite(item);
          }
        });
    },
    ...mapActions(favoriteStore, ["getFavorite", "updateFavorite"]),
    ...mapActions(cartStore, ["addCart"]),
  },
  computed: {
    ...mapState(favoriteStore, ["favorites", "cart_specs"]),
    ...mapState(cartStore, ["cartLoading", "cart"]),
  },
  mounted() {},
};
</script>
