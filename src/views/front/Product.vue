<template>
  <div class="mt-nav">
    <!-- 加入購物車區塊 -->
    <div
      class="container grid grid-cols-1 lg:grid-cols-2 gap-7 pt-8 px-2 md:px-0"
    >
      <!-- 圖片區塊 -->
      <div>
        <img
          :src="targetImage"
          class="h-[240px] sm:h-[360px] xl:h-[480px] object-contain mx-auto bg-white rounded"
          alt="商品圖片"
        />
        <swiper
          ref="productSwiper"
          :slidesPerView="3"
          :slidesPerGroup="3"
          :breakpoints="{
            480: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            768: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            976: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1440: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
          }"
          :spaceBetween="30"
          :navigation="true"
          :modules="productModules"
          class="productSwiper mt-6 !px-8 sm:!px-16 xl:!px-24"
        >
          <swiper-slide>
            <div
              class="cursor-pointer"
              @mouseover="changeImg(product.imageUrl)"
            >
              <img
                class="h-12 xs:h-16 md:h-20 lg:h-16 xl:h-20 object-contain rounded-sm mx-auto bg-white border-2 hover:border-primary"
                :src="product.imageUrl"
                alt="商品主要圖片"
              />
            </div>
          </swiper-slide>
          <swiper-slide v-for="(image, i) in product.imagesUrl" :key="i">
            <div class="cursor-pointer" @mouseover="changeImg(image)">
              <img
                class="h-12 xs:h-16 md:h-20 lg:h-16 xl:h-20 object-contain mx-auto rounded-sm bg-white border-2 hover:border-primary"
                :src="image"
                :alt="`商品圖片${i}`"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <!-- 產品簡介 -->
      <section class="flex flex-col">
        <div class="flex items-center">
          <h4 class="col-span-2 text-2xl mr-3">{{ product.brand }}</h4>
          <div class="bg-white/30 px-3.5 py-2 rounded text-sm">
            {{ product.category }}
          </div>
        </div>
        <h3 class="mt-2 text-3xl font-bold">{{ product.title }}</h3>
        <div class="mt-3 text-md">
          <div
            class="prose prose-front prose-styles leading-relaxed"
            v-html="product.description"
          ></div>
        </div>
        <div class="flex-auto flex flex-col justify-end">
          <div class="flex justify-between items-center mt-6">
            <div class="flex items-end">
              <p class="text-primary text-2xl font-bold">
                NT$ {{ $filters.currency(product.price) }}
              </p>
              <p class="ml-2 line-through">
                NT$ {{ $filters.currency(product.origin_price) }}
              </p>
            </div>
            <div
              v-if="
                favorites.some((item) => {
                  return item.id === product.id;
                })
              "
              class="flex items-center cursor-pointer text-primary2"
              @click="updateFavorite(product)"
            >
              <FontAwesomeIcon :icon="['fas', 'heart']" class="text-2xl" />
              <p class="ml-2 hidden sm:block text-xl">已加入收藏</p>
            </div>
            <div
              v-else
              class="flex items-center cursor-pointer hover:text-primary"
              @click="updateFavorite(product)"
            >
              <FontAwesomeIcon :icon="['fas', 'heart']" class="text-2xl" />
              <p class="ml-2 hidden sm:block text-xl">未加入收藏</p>
            </div>
          </div>
          <div class="flex flex-wrap items-center mt-8" v-if="product.spec">
            <h5 class="text-lg mr-4 mb-6">規格：</h5>
            <ul class="flex flex-wrap text-sm">
              <li class="mb-6" v-for="(spec, i) in product.spec" :key="i">
                <input
                  type="radio"
                  :id="`spec${i}`"
                  name="spec"
                  class="hidden peer"
                  :value="spec"
                  v-model="cartSpec"
                  required
                />
                <label
                  :for="`spec${i}`"
                  class="mr-3 bg-black hover:bg-primary2 peer-checked:bg-primary peer-checked:hover:bg-primary2 peer-checked:ring-1 peer-checked:ring-white px-3 py-2 rounded cursor-pointer"
                >
                  {{ spec }}
                </label>
              </li>
            </ul>
          </div>
          <p class="text-sm" v-if="product.spec?.length">
            ※ 選擇規格後才能加入購物車
          </p>
          <div class="sm:flex items-center mt-4">
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
                  class="w-12 bg-dark text-sm text-center focus:border-secondary"
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
                cartLoading.cartId === product.id ||
                (product.spec?.length ? !cartSpec : false)
              "
              @click="addCart(product, qty, cartSpec)"
            >
              <svg
                v-if="cartLoading.cartId === product.id"
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
      </section>
    </div>
    <!-- 加購區塊 -->
    <section class="mt-8 bg-black/50 px-2 md:px-0" v-if="product.accessory">
      <div class="container py-8">
        <h3 class="text-xl font-bold pb-3 border-b">加購配件</h3>
        <div class="flex flex-wrap mt-4 px-2">
          <div
            class="border rounded w-64 mt-6 mx-3"
            v-for="(accessory, i) in accessories"
            :key="accessory.id"
          >
            <div class="bg-white">
              <img
                :src="accessory.imageUrl"
                :alt="`配件圖片${i}`"
                class="w-full h-48 object-contain object-center bg-white"
              />
            </div>
            <div class="flex flex-col px-2 py-4 h-[calc(100%-192px)]">
              <h4 class="text-lg font-bold">{{ accessory.title }}</h4>
              <div class="mt-4 text-md" v-html="accessory.description"></div>
              <div class="flex-auto flex flex-col justify-end">
                <p v-if="accessory.spec" class="text-sm mt-4">※請先選擇規格</p>
                <div
                  class="flex items-center"
                  :class="[accessory.spec ? ' mt-2' : ' mt-6']"
                >
                  <select
                    v-if="accessory.spec"
                    id="accessorySpec1"
                    class="border text-sm rounded w-full p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                    v-model="cart_specs[i].spec"
                  >
                    <option selected disabled value="" class="bg-white/10">
                      選擇規格
                    </option>
                    <option
                      class="bg-white/10"
                      v-for="spec in accessory.spec"
                      :key="spec"
                      :value="spec"
                    >
                      {{ spec }}
                    </option>
                  </select>
                  <p v-else class="w-full">選擇數量：</p>
                  <select
                    id="accessoryNum1"
                    class="ml-1 border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary w-24"
                    v-model.number="cart_specs[i].qty"
                  >
                    <option selected value="1" class="bg-white/10">1</option>
                    <option value="2" class="bg-white/10">2</option>
                    <option value="3" class="bg-white/10">3</option>
                    <option value="4" class="bg-white/10">4</option>
                    <option value="5" class="bg-white/10">5</option>
                  </select>
                </div>
                <div class="flex justify-between items-end mt-4">
                  <p class="text-xl font-bold text-primary">
                    NT$ {{ $filters.currency(accessory.price) }}
                  </p>
                  <button
                    type="button"
                    class="w-20 px-0 py-2 primary-button sm:ml-2 mt-4 sm:mt-0 relative"
                    :disabled="
                      cartLoading.cartId === cart_specs[i].id ||
                      (accessory.spec && !cart_specs[i].spec)
                    "
                    @click="
                      addCart(
                        accessories[i],
                        cart_specs[i].qty,
                        cart_specs[i].spec
                      )
                    "
                  >
                    <svg
                      v-if="cartLoading.cartId === cart_specs[i].id"
                      class="animate-spin h-3 w-3 mr-1 text-white absolute top-3 left-2"
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
                    加購
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 商品詳細區塊 -->
    <section
      class="bg-black/50 px-2 md:px-0"
      :class="{ 'mt-8': !product.accessory }"
      v-if="product.content || product.contentImages?.length"
    >
      <div class="container py-8">
        <h3 class="text-xl font-bold pb-3 mb-4 border-b">商品詳細資訊</h3>
        <div
          class="prose prose-front prose-styles leading-loose"
          v-html="product.content"
        ></div>
        <template v-for="(image, i) in product.contentImages" :key="i">
          <img
            :src="image"
            :alt="`商品詳細圖片${i}`"
            class="mt-4 mx-auto rounded lg:rounded-lg w-full max-w-4xl"
          />
        </template>
      </div>
    </section>
    <!-- 其他商品 Swiper 區塊 -->
    <section class="container mt-8 px-2 md:px-0">
      <h3 class="text-xl font-bold pb-3 mb-4 border-b">您可能也喜歡</h3>
      <swiper
        ref="productSwiper"
        :slidesPerView="1"
        :slidesPerGroup="1"
        :breakpoints="{
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          976: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1440: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }"
        :spaceBetween="30"
        :navigation="true"
        :modules="productModules"
        class="productSwiper mt-6 !px-8 sm:!px-16 xl:!px-24 h-[420px]"
      >
        <swiper-slide
          v-for="(otherProduct, i) in otherProducts"
          :key="otherProduct.id"
        >
          <div class="h-full">
            <img
              class="h-1/2 w-full object-cover bg-white rounded-t relative"
              :src="otherProduct.imageUrl"
              :alt="`其他商品圖片${i}`"
            />
            <div class="absolute top-4 left-4">
              <div class="bg-dark px-2 py-1 rounded-sm text-white text-xs mr-1">
                {{ otherProduct.brand }}
              </div>
            </div>
            <div
              class="p-3 md:p-5 h-1/2 flex flex-col justify-between rounded-b"
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
              <div class="text-white">
                <div class="text-left">
                  <h5 class="text-lg font-bold ellipse2 mb-2">
                    {{ otherProduct.title }}
                  </h5>
                  <p
                    class="text-sm ellipse2 prose prose-front prose-styles leading-normal"
                    v-html="otherProduct.description"
                  ></p>
                </div>
              </div>
              <div class="flex flex-col justify-end">
                <div class="whitespace-nowrap mb-2">
                  <div class="flex justify-between items-center">
                    <p class="text-gray-400 line-through text-xs">
                      NT$ {{ $filters.currency(otherProduct.origin_price) }}
                    </p>
                    <p class="text-md font-bold">
                      NT$ {{ $filters.currency(otherProduct.price) }}
                    </p>
                  </div>
                </div>
                <div class="text-end">
                  <RouterLink
                    :to="`/product/${otherProduct.id}`"
                    class="text-primary hover:underline"
                  >
                    了解詳情
                    <FontAwesomeIcon :icon="['fas', 'chevron-right']" />
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </div>
  <ScrollTop />
</template>

<script>
// import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import Swiper required modules
import { Navigation } from "swiper";

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
      product: {},
      otherProducts: [],
      accessories: [],
      cartSpec: "",
      qty: 1,
      cart_specs: [],
      productModules: [Navigation],
      targetImage: "",
    };
  },
  methods: {
    getProduct(id) {
      this.loadings.fullLoading = true;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          // console.log(res.data);
          this.product = res.data.product;
          this.targetImage = this.product.imageUrl;
          // 取得其他產品
          this.getOtherProducts();
          // 有配件的商品執行 getAccessory
          if (this.product.accessory) {
            this.getAccessory();
          } else {
            this.loadings.fullLoading = false;
          }
        })
        .catch((err) => {
          this.loadings.fullLoading = false;
          // console.log(err);
          // Swal
          this.userToast("error", err.response.data.message);
        });
    },
    async getOtherProducts() {
      this.otherProducts = [];
      if (this.product.category === "配件") {
        try {
          const res = await this.$http.get(
            `${VITE_API}/api/${VITE_PATH}/products?category=配件`
          );
          this.otherProducts = res.data.products;
        } catch (err) {
          // Swal
          this.userToast("error", err.response.data.message);
        }
      } else {
        const categories = ["AR", "VR", "MR", "XR"];
        try {
          await Promise.all(
            categories.map(async (category) => {
              const res = await this.$http.get(
                `${VITE_API}/api/${VITE_PATH}/products?category=${category}`
              );
              this.otherProducts.push(...res.data.products);
            })
          );
        } catch (err) {
          // Swal
          this.userToast("error", err.message);
        }
      }
      // 移除相同的商品
      this.otherProducts.forEach((item, i) => {
        if (item.id === this.product.id) {
          this.otherProducts.splice(i, 1);
        }
      });
    },
    async getAccessory() {
      const getAccessoryApi = this.product.accessory.map((item) =>
        this.$http.get(`${VITE_API}/api/${VITE_PATH}/product/${item.id}`)
      );
      try {
        const data = await Promise.allSettled(getAccessoryApi);
        // console.log(data);
        this.accessories = data
          .filter((item) => item.status === "fulfilled")
          .map((item) => item.value.data.product);
        // 商品配件的spec預設空值
        this.cart_specs = this.accessories.map((item) => {
          return { id: item.id, spec: "", qty: 1, check: false };
        });
        this.loadings.fullLoading = false;
      } catch (err) {
        this.loadings.fullLoading = false;
        // console.log(err);
        // Swal
        this.userToast("error", err.response.data.message);
      }

      this.loadings.fullLoading = false;
    },
    changeImg(img) {
      this.targetImage = img;
    },
    ...mapActions(cartStore, ["getCart", "addCart"]),
    ...mapActions(favoriteStore, ["updateFavorite"]),
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
    ...mapState(cartStore, ["cart", "cartLoading"]),
    ...mapState(favoriteStore, ["favorites"]),
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
    // 點擊其他商品時判斷是否有改變參數
    "$route.params.id"() {
      if (this.$route.fullPath.includes("/product/")) {
        this.getProduct(this.$route.params.id);
      }
    },
  },
  mounted() {
    this.getProduct(this.$route.params.id);
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
/* ellipsis */
.ellipse2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
