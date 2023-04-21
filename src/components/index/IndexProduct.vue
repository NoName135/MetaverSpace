<template>
  <section class="container py-24">
    <div class="text-center mb-12">
      <h3 class="text-3xl font-bold mb-6">熱銷商品</h3>
      <router-link to="./products" class="dark-solid-button"
        >瀏覽所有商品</router-link
      >
    </div>
    <div ref="products" class="overflow-hidden">
      <div class="m-0 lg:-mx-[25%]">
        <swiper
          ref="indexProductSwiper"
          :slidesPerView="1.5"
          :centeredSlides="true"
          :breakpoints="{
            976: {
              slidesPerView: 4,
              centeredSlides: false,
            },
          }"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :loop="true"
          :spaceBetween="30"
          :navigation="true"
          :pagination="true"
          :observer="true"
          :modules="productModules"
          class="indexProductSwiper text-dark h-[480px] !pb-12"
        >
          <template v-for="product in hotProducts" :key="product.id">
            <swiper-slide class="rounded border overflow-hidden">
              <div class="h-full">
                <img
                  class="h-1/2 md:h-3/5 w-full object-cover relative"
                  :src="product.imageUrl"
                  alt=""
                />
                <div class="absolute top-2 left-3 sm:top-4 sm:left-6">
                  <div class="flex items-center">
                    <div
                      class="bg-dark px-2 py-1 rounded-sm text-white text-xs mr-1"
                    >
                      {{ product.brand }}
                    </div>
                    <div class="bg-dark p-[1px] rounded-sm text-xs">
                      <div class="bg-white px-1.5 py-0.5 rounded-sm">
                        {{ product.category }}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="p-3 md:p-5 h-1/2 md:h-2/5 flex flex-col justify-between"
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
                  <div class="md:flex justify-between text-white">
                    <div>
                      <div class="text-left">
                        <h5 class="text-lg font-bold ellipse2 mb-2">
                          {{ product.title }}
                        </h5>
                        <p
                          class="text-sm ellipse2 mb-2 md:mb-0"
                          v-html="product.description"
                        ></p>
                      </div>
                    </div>
                    <div class="whitespace-nowrap mb-2 md:mb-0 md:ml-2">
                      <div
                        class="block text-left xs:flex justify-between items-center md:block md:text-right"
                      >
                        <p class="text-gray-400 line-through md:mb-2">
                          NT$ {{ product.origin_price }}
                        </p>
                        <p class="text-lg font-bold">NT$ {{ product.price }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-end">
                    <RouterLink
                      :to="`/product/${product.id}`"
                      class="text-primary hover:underline"
                    >
                      了解詳情
                      <font-awesome-icon :icon="['fas', 'chevron-right']" />
                    </RouterLink>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </template>
        </swiper>
      </div>
    </div>
    <div
      ref="service"
      class="grid grid-cols-2 md:grid-cols-3 gap-4 mx-2 lg:mx-0 mt-6"
    >
      <div
        ref="service1"
        class="border rounded p-3 lg:p-5 col-span-2 xs:col-span-1"
      >
        <h5 class="text-xl lg:text-3xl font-bold">
          <font-awesome-icon :icon="['fas', 'truck-fast']" />
          <span class="ml-6">快速出貨</span>
        </h5>
        <p class="mb-4">現貨24小時出貨，最晚2天內出貨。</p>
      </div>
      <div
        ref="service2"
        class="border rounded p-3 lg:p-5 col-span-2 xs:col-span-1"
      >
        <h5 class="text-xl lg:text-3xl font-bold">
          <font-awesome-icon :icon="['fas', 'dollar-sign']" />
          <span class="ml-6">滿額免運</span>
        </h5>
        <p class="mb-4">單筆訂單滿2000即享免運宅配服務。</p>
      </div>
      <div
        ref="service3"
        class="border rounded p-3 lg:p-5 col-span-2 md:col-span-1"
      >
        <h5 class="text-xl lg:text-3xl font-bold">
          <font-awesome-icon :icon="['fas', 'screwdriver-wrench']" />
          <span class="ml-6">售後服務</span>
        </h5>
        <p class="mt-4">購買過程或收到商品遇到問題，聯繫我們會盡快回覆您。</p>
      </div>
    </div>
    <div
      ref="other"
      class="mt-16 grid grid-cols-1 md:grid-cols-2 mx-2 lg:mx-0 gap-6 md:gap-0 overflow-hidden"
    >
      <div
        ref="other1"
        class="p-10 bg-cover bg-center border border-opacity-87"
        :style="{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${reserve})`,
        }"
      >
        <h5 class="text-xl lg:text-3xl font-bold">不清楚商品是否符合需求？</h5>
        <div class="w-12 border border-b-8 mt-2"></div>
        <p class="mt-4">
          我們提供預約體驗，每小時只要100元，即可體驗各類商品，找出適合您的設備。
        </p>
        <div class="mt-16">
          <router-link to="./reserve" class="primary-button"
            >前往預約</router-link
          >
        </div>
      </div>
      <div
        ref="other2"
        class="p-10 bg-cover bg-center border border-opacity-87"
        :style="{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${subscribe})`,
        }"
      >
        <h5 class="text-xl lg:text-3xl font-bold">訂閱電子報獲取優惠券</h5>
        <div class="w-12 border border-b-8 mt-2"></div>
        <div class="relative w-full">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <font-awesome-icon
              :icon="['fas', 'envelope']"
              class="text-black/70"
            />
          </div>
          <input
            type="text"
            class="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary0 focus:border-primary0 block w-full pl-10 p-2.5"
            placeholder="Email"
          />
        </div>
        <div class="mt-16">
          <a href="#" class="primary-button">訂閱</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import reserve from "@/images/reserve.jpg";
import subscribe from "@/images/subscribe.jpg";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";

import { mapState } from "pinia";
import loadingStore from "@/stores/loadingStore.js";

import gsapMixin from "@/mixins/gsap.js";
import swalMixin from "@/mixins/swal.js";

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  emits: ["loading"],
  mixins: [gsapMixin, swalMixin],
  data() {
    return {
      allOrders: [],
      hotProducts: [],
      productModules: [Navigation, Pagination, Autoplay],
      reserve: reserve,
      subscribe: subscribe,
    };
  },
  methods: {
    async getProducts() {
      // 首頁 loading 樣式
      this.loadings.opacity = 1;
      this.loadings.fullLoading = true;
      this.loadings.progress = 0;

      await this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/orders`)
        .then((res) => {
          this.allOrders = res.data.orders;
          this.loadings.progress = Math.ceil(100 / 9);
        })
        .catch((err) => {
          // Swal
          this.userToast("error", err.response.data.message);
        });

      const soldProducts = [];
      // 將訂單所有類別數量匯入 soldProducts
      for (let i = 0; i < this.allOrders.length; i++) {
        const productObj = this.allOrders[i].products;
        // 取出訂單全部 products 資料
        Object.values(productObj).forEach((item) => {
          // 圖表計算 (不含配件)
          if (item.product.category !== "配件") {
            let newProduct = true;
            // 尋找 Columns 是否有重複出現
            for (let j = 0; j < soldProducts.length; j++) {
              if (soldProducts[j].id === item.product.id) {
                soldProducts[j].qty += item.qty;
                newProduct = false;
              }
            }
            if (newProduct) {
              soldProducts.push({ id: item.product.id, qty: item.qty });
            }
          }
        });
      }
      // 已售出商品由多到少排序
      soldProducts.sort((a, b) => b.qty - a.qty);
      // 依序匯入 soldProducts
      try {
        const productsArray = [];
        for (let i = 0; i < 8; i++) {
          const { data } = await this.$http.get(
            `${VITE_API}/api/${VITE_PATH}/product/${soldProducts[i].id}`
          );

          productsArray.push(data.product);
          this.loadings.progress = Math.ceil((100 / 9) * (i + 2));
        }
        this.hotProducts = productsArray;
        await setTimeout(() => {
          this.loadings.fullLoading = false;
          this.$emit("loading", false);
          // 變回其他 loading 樣式
          this.loadings.opacity = 0.8;
        }, 300);
      } catch (err) {
        this.loadings.fullLoading = false;
        this.$emit("loading", false);
        // 變回其他 loading 樣式
        this.loadings.opacity = 0.8;
        // Swal
        this.userToast("error", err);
      }
    },
    // 熱銷產品 GSAP
    gsapProducts() {
      this.gsap.from(this.$refs.products, {
        scrollTrigger: {
          trigger: this.$refs.products,
          start: "top 75%",
          toggleActions: "play none none none",
          // markers: true,
        },
        y: 100,
        opacity: 0,
        scale: 0.5,
        ease: "back",
        duration: 0.8,
      });
    },
    // 服務項目 GSAP
    gsapService() {
      this.gsap
        .timeline({
          scrollTrigger: {
            trigger: this.$refs.service,
            start: "top 80%",
            toggleActions: "play none none reverse",
            // markers: true,
          },
        })
        .from(this.$refs.service1, {
          y: 100,
          opacity: 0,
          ease: "back",
          duration: 0.8,
        })
        .from(
          this.$refs.service2,
          { y: 100, opacity: 0, ease: "back", duration: 0.8, delay: 0.3 },
          "<"
        )
        .from(
          this.$refs.service3,
          { y: 100, opacity: 0, ease: "back", duration: 0.8, delay: 0.3 },
          "<"
        );
    },
    // 預約及訂閱 GSAP
    gsapOther() {
      this.ScrollTrigger.matchMedia({
        "(max-width: 767px)": () => {
          this.gsap
            .timeline({
              scrollTrigger: {
                trigger: this.$refs.other,
                start: "top 45%",
                toggleActions: "play none none reverse",
                // markers: true,
              },
            })
            .from(this.$refs.other1, {
              y: 100,
              opacity: 0,
              ease: "expo",
              duration: 1,
            })
            .from(
              this.$refs.other2,
              { y: 100, opacity: 0, ease: "expo", duration: 1, delay: 0.3 },
              "<"
            );
        },
        "(min-width: 768px)": () => {
          this.gsap
            .timeline({
              scrollTrigger: {
                trigger: this.$refs.other,
                start: "top 70%",
                toggleActions: "play none none reverse",
                // markers: true,
              },
            })
            .from(this.$refs.other1, {
              x: -100,
              opacity: 0,
              ease: "expo",
              duration: 1,
            })
            .from(
              this.$refs.other2,
              { x: 100, opacity: 0, ease: "expo", duration: 1 },
              "<"
            );
        },
      });
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
  mounted() {
    this.getProducts();
    this.gsapProducts();
    this.gsapService();
    this.gsapOther();
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
