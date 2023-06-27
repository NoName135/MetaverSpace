<template>
  <div class="mt-nav">
    <!-- 最新消息區塊 -->
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :observer="true"
      :modules="articleModules"
      class="productsArticleSwiper h-96"
    >
      <swiper-slide v-for="article in articles" :key="article.id">
        <div
          class="h-full bg-cover bg-center"
          :style="{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${article.image})`,
          }"
        >
          <div
            class="px-10 sm:px-20 md:px-24 lg:px-32 h-full flex flex-col justify-around"
          >
            <div>
              <h2 class="font-bold text-2xl lg:text-3xl">
                {{ article.title }}
              </h2>
              <p
                class="mt-8 text-lg lg:text-xl prose prose-front prose-styles"
                v-html="article.description"
              />
            </div>
            <RouterLink
              :to="`/article/${article.id}`"
              class="primary-button w-24"
              >查看詳情</RouterLink
            >
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <section class="container">
      <div class="grid grid-cols-4 gap-2 mx-2 lg:mx-0">
        <!-- 篩選區塊 - mobile，checkbox id 跟 PC 分開 -->
        <div
          ref="filterDrawer"
          id="filterDrawer"
          class="fixed lg:hidden top-0 left-0 z-40 h-screen overflow-y-auto transition-transform -translate-x-full w-60 bg-dark"
          tabindex="-1"
          aria-labelledby="drawer-label"
        >
          <div
            class="sticky top-0 bg-dark p-5 flex justify-between items-center"
          >
            <h3 class="text-xl font-bold">
              <FontAwesomeIcon :icon="['fas', 'filter']" />
              條件篩選
            </h3>
            <button
              type="button"
              aria-controls="filterDrawer"
              class="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 hover:bg-black/50 hover:text-white"
              @click="filterDrawer.hide()"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">Close menu</span>
            </button>
          </div>
          <div class="px-5 pb-5">
            <p class="text-lg mt-1">類別</p>
            <div class="flex items-center mt-4">
              <input
                id="m-ar"
                type="checkbox"
                value="AR"
                class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
                v-model="filters.category"
              />
              <label for="m-ar" class="ml-2 text-sm font-medium text-gray-300"
                >AR (擴增實境)</label
              >
            </div>
            <div class="flex items-center mt-4">
              <input
                id="m-vr"
                type="checkbox"
                value="VR"
                class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
                v-model="filters.category"
              />
              <label for="m-vr" class="ml-2 text-sm font-medium text-gray-300"
                >VR (虛擬實境)</label
              >
            </div>
            <div class="flex items-center mt-4">
              <input
                id="m-mr"
                type="checkbox"
                value="MR"
                class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
                v-model="filters.category"
              />
              <label for="m-mr" class="ml-2 text-sm font-medium text-gray-300"
                >MR (混合實境)</label
              >
            </div>
            <div class="flex items-center mt-4">
              <input
                id="m-xr"
                type="checkbox"
                value="XR"
                class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
                v-model="filters.category"
              />
              <label for="m-xr" class="ml-2 text-sm font-medium text-gray-300"
                >XR (延展實境)</label
              >
            </div>
            <div class="flex items-center mt-4">
              <input
                id="m-accessory"
                type="checkbox"
                value="配件"
                class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
                v-model="filters.category"
              />
              <label
                for="m-accessory"
                class="ml-2 text-sm font-medium text-gray-300"
                >商品配件</label
              >
            </div>
            <p class="text-lg mt-6">品牌</p>
            <template v-for="brand in filtersBrand" :key="brand">
              <div class="flex items-center mt-4">
                <input
                  :id="`m-${brand}`"
                  type="checkbox"
                  :value="brand"
                  class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
                  v-model="filters.brand"
                />
                <label
                  :for="`m-${brand}`"
                  class="ml-2 text-sm font-medium text-gray-300"
                  >{{ brand }}</label
                >
              </div>
            </template>
            <p class="text-lg mt-6">價格區間</p>
            <div class="flex items-center mt-4">
              <input
                type="number"
                placeholder="$最小值"
                min="1"
                class="border text-sm text-center rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0"
                v-model="filters.minPrice"
              />
              <FontAwesomeIcon :icon="['fas', 'minus']" class="text-3xl mx-3" />
              <input
                type="number"
                placeholder="$最大值"
                class="border text-sm text-center rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0"
                v-model="filters.maxPrice"
              />
            </div>
            <div class="flex mt-6 mb-10">
              <button
                type="button"
                class="w-20 focus:outline-none focus:ring-4 text-dark font-medium rounded text-sm px-5 py-2.5 bg-warm hover:bg-warm2 focus:ring-warm3"
                @click="
                  () => {
                    filters = {
                      title: '',
                      brand: [],
                      category: [],
                      minPrice: null,
                      maxPrice: null,
                    };
                    getFilterProducts();
                  }
                "
              >
                清除
              </button>
              <button
                type="button"
                class="ml-8 w-20 focus:outline-none focus:ring-4 text-dark font-medium rounded text-sm px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3"
                @click="getFilterProducts()"
              >
                搜尋
              </button>
            </div>
          </div>
        </div>
        <!-- 篩選區塊 - checkbox id 跟 mobile 分開 -->
        <div class="hidden lg:block col-span-1">
          <div class="py-8 top-nav">
            <h3 class="text-xl font-bold">
              <FontAwesomeIcon :icon="['fas', 'filter']" />
              條件篩選
            </h3>
            <p class="text-lg mt-6">類別</p>
            <div class="flex items-center mt-4">
              <input
                id="ar"
                type="checkbox"
                value="AR"
                class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
                v-model="filters.category"
              />
              <label for="ar" class="ml-2 text-sm font-medium text-gray-300"
                >AR (擴增實境)</label
              >
            </div>
            <div class="flex items-center mt-4">
              <input
                id="vr"
                type="checkbox"
                value="VR"
                class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
                v-model="filters.category"
              />
              <label for="vr" class="ml-2 text-sm font-medium text-gray-300"
                >VR (虛擬實境)</label
              >
            </div>
            <div class="flex items-center mt-4">
              <input
                id="mr"
                type="checkbox"
                value="MR"
                class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
                v-model="filters.category"
              />
              <label for="mr" class="ml-2 text-sm font-medium text-gray-300"
                >MR (混合實境)</label
              >
            </div>
            <div class="flex items-center mt-4">
              <input
                id="xr"
                type="checkbox"
                value="XR"
                class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
                v-model="filters.category"
              />
              <label for="xr" class="ml-2 text-sm font-medium text-gray-300"
                >XR (延展實境)</label
              >
            </div>
            <div class="flex items-center mt-4">
              <input
                id="accessory"
                type="checkbox"
                value="配件"
                class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
                v-model="filters.category"
              />
              <label
                for="accessory"
                class="ml-2 text-sm font-medium text-gray-300"
                >商品配件</label
              >
            </div>
            <p class="text-lg mt-6">品牌</p>
            <template v-for="brand in filtersBrand" :key="brand">
              <div class="flex items-center mt-4">
                <input
                  :id="brand"
                  type="checkbox"
                  :value="brand"
                  class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
                  v-model="filters.brand"
                />
                <label
                  :for="brand"
                  class="ml-2 text-sm font-medium text-gray-300"
                  >{{ brand }}</label
                >
              </div>
            </template>
            <p class="text-lg mt-6">價格區間</p>
            <div class="flex items-center mt-4">
              <input
                type="number"
                placeholder="$最小值"
                min="1"
                class="border text-sm text-center rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0"
                v-model.lazy="filters.minPrice"
              />
              <FontAwesomeIcon :icon="['fas', 'minus']" class="text-3xl mx-3" />
              <input
                type="number"
                placeholder="$最大值"
                class="border text-sm text-center rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0"
                v-model.lazy="filters.maxPrice"
              />
            </div>
            <div class="flex mt-6">
              <button
                type="button"
                class="w-20 focus:outline-none focus:ring-4 text-dark font-medium rounded text-sm px-5 py-2.5 bg-warm hover:bg-warm2 focus:ring-warm3"
                @click="
                  () => {
                    filters = {
                      title: '',
                      brand: [],
                      category: [],
                      minPrice: null,
                      maxPrice: null,
                    };
                    getFilterProducts();
                  }
                "
              >
                清除
              </button>
              <button
                type="button"
                class="ml-8 w-20 focus:outline-none focus:ring-4 text-dark font-medium rounded text-sm px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3"
                @click="getFilterProducts()"
              >
                搜尋
              </button>
            </div>
          </div>
        </div>
        <!-- 產品區塊 -->
        <div class="col-span-full lg:col-span-3">
          <!-- 篩選按鈕及搜尋 -->
          <div class="my-8 flex items-center">
            <button
              type="button"
              class="block lg:hidden whitespace-nowrap font-medium rounded-l-lg text-sm px-4 py-3 border border-secondary2 bg-secondary"
              @click="filterDrawer.show()"
            >
              <FontAwesomeIcon :icon="['fas', 'filter']" />
              篩選
            </button>
            <div class="grow">
              <label
                for="search"
                class="text-sm font-medium text-gray-900 sr-only"
                >Search</label
              >
              <div class="relative">
                <div
                  class="hidden lg:flex items-center absolute inset-y-0 left-0 pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search"
                  class="w-full p-3 lg:pl-10 text-sm rounded-r-lg lg:rounded-l-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-primary-0 focus:border-primary"
                  placeholder="請輸入關鍵字"
                  v-model="filters.title"
                />
                <button
                  type="button"
                  class="absolute top-0 right-0 p-3 text-sm font-medium text-white rounded-r-lg border border-primary2 focus:ring focus:outline-none bg-primary hover:bg-primary2 focus:ring-primary3"
                  @click="getFilterProducts()"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
                <button
                  type="button"
                  class="hidden md:block text-white absolute right-12 bottom-1.5 hover:text-gray-300"
                  @click="filters.title = ''"
                >
                  <FontAwesomeIcon
                    :icon="['fas', 'delete-left']"
                    class="cursor-pointer text-3xl mr-2"
                    :class="{ hidden: !filters.title }"
                  />
                </button>
              </div>
            </div>
          </div>
          <!-- 產品卡片區塊 -->
          <div
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4"
            v-if="products.length"
          >
            <template v-for="(product, i) in products" :key="product.id">
              <RouterLink
                :to="`./product/${product.id}`"
                class="group"
                @mouseover="
                  productImages[i] = product.imagesUrl
                    ? product.imagesUrl[0]
                    : product.imageUrl
                "
                @mouseleave="productImages[i] = product.imageUrl"
              >
                <div
                  class="h-[440px] md:h-[520px] rounded-lg border overflow-hidden relative"
                >
                  <img
                    class="h-1/2 md:h-3/5 w-full object-cover bg-white group-hover:opacity-30 ease-in-out duration-300"
                    :src="productImages[i]"
                    :alt="product.title"
                  />
                  <div class="absolute top-2 left-3 sm:top-3 sm:left-4">
                    <div class="bg-dark px-3 py-2 rounded text-xs mr-1">
                      {{ product.category }}
                    </div>
                  </div>
                  <div
                    class="hidden lg:group-hover:flex absolute top-[45%] justify-center w-full"
                  >
                    <button
                      type="button"
                      class="focus:outline-none focus:ring-4 font-medium rounded text-dark hover:text-gray-100 text-md px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3"
                      @click.prevent.stop="productModal.openModal(product)"
                    >
                      <FontAwesomeIcon
                        :icon="['fas', 'cart-plus']"
                        class="cursor-pointer text-lg mr-2"
                      />
                      加入購物車
                    </button>
                  </div>
                  <div
                    class="p-4 md:p-5 h-1/2 md:h-2/5 flex flex-col justify-between"
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
                    <div>
                      <div class="grid grid-cols-3">
                        <h4 class="col-span-2 text-xl">{{ product.brand }}</h4>
                        <div
                          class="flex justify-between lg:justify-end text-2xl"
                        >
                          <FontAwesomeIcon
                            :icon="['fas', 'cart-plus']"
                            class="cursor-pointer block lg:hidden"
                            @click.prevent.stop="
                              productModal.openModal(product)
                            "
                          />
                          <FontAwesomeIcon
                            :icon="['fas', 'heart']"
                            class="cursor-pointer"
                            :class="[
                              favorites.some((item) => {
                                return item.id === product.id;
                              })
                                ? 'text-primary2'
                                : 'text-white hover:text-primary',
                            ]"
                            @click.prevent.stop="updateFavorite(product)"
                          />
                        </div>
                      </div>
                      <h3 class="mt-3 text-xl font-bold">
                        {{ product.title }}
                      </h3>
                    </div>
                    <div class="mt-2">
                      <p class="text-primary text-lg font-bold">
                        NT$ {{ $filters.currency(product.price) }}
                      </p>
                      <p class="text-gray-400 line-through">
                        NT$ {{ $filters.currency(product.origin_price) }}
                      </p>
                    </div>
                  </div>
                </div>
              </RouterLink>
            </template>
          </div>
          <p class="ml-4" v-else>搜尋不到相符的商品！</p>
          <!-- 頁碼 -->
          <div class="mt-8 flex justify-center">
            <ProductsPagination
              :page-obj="pagination"
              @emit-page="changePages"
            />
          </div>
        </div>
        <UserProductModal
          ref="productModal"
          :page="pagination.current_page"
        />
      </div>
    </section>
  </div>
  <ScrollTop />
</template>

<script>
import UserProductModal from '@/components/modal/UserProductModal.vue'
import ProductsPagination from '@/components/UserPagination.vue'

// import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// import Swiper required modules
import { Navigation, Pagination, Autoplay } from 'swiper'

// import flowbite components
import { Drawer } from 'flowbite'

import loadingStore from '@/stores/loadingStore.js'
import favoriteStore from '@/stores/favoriteStore.js'
import { mapActions, mapState } from 'pinia'

import swalMixin from '@/mixins/swal.js'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  mixins: [swalMixin],
  data () {
    return {
      articles: [],
      allProducts: [],
      filterProducts: [],
      products: [],
      pagination: {},
      filtersBrand: [], // 篩選功能顯示的品牌
      // 搜尋項目
      filters: {
        title: '',
        brand: [],
        category: [],
        minPrice: null,
        maxPrice: null
      },
      articleModules: [Navigation, Pagination, Autoplay],
      productImages: []
    }
  },
  methods: {
    // 抓取全部商品和文章
    async getAll () {
      // 判斷是否有 ?category
      const query = this.$route.query.category
      this.filters.category = []
      if (query) {
        this.filters.category.push(query)
      }

      this.loadings.fullLoading = true
      await Promise.all([
        this.$http.get(`${VITE_API}/api/${VITE_PATH}/products/all`),
        this.$http.get(`${VITE_API}/api/${VITE_PATH}/articles`)
      ])
        .then((res) => {
          // console.log(res);
          this.allProducts = Object.values(res[0].data.products).reverse()
          // 找出篩選的全部品牌
          this.allProducts.forEach((item) => {
            if (this.filtersBrand.indexOf(item.brand) === -1) {
              this.filtersBrand.push(item.brand)
            }
          })
          this.getFilterProducts()

          this.articles = res[1].data.articles
          // console.log(this.articles);
        })
        .catch((err) => {
          this.loadings.fullLoading = false
          // console.log(err);
          // Swal
          this.userToast('error', err.response.data.message)
        })
    },
    // 抓取全部商品
    async getProducts () {
      this.loadings.fullLoading = true
      await this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/products/all`)
        .then((res) => {
          // 反轉產品順序由新到舊
          this.allProducts = Object.values(res.data.products).reverse()
          // 找出篩選的全部品牌
          this.allProducts.forEach((item) => {
            if (this.filtersBrand.indexOf(item.brand) === -1) {
              this.filtersBrand.push(item.brand)
            }
          })

          this.getFilterProducts()
        })
        .catch((err) => {
          this.loadings.fullLoading = false
          // console.log(err);
          // Swal
          this.userToast('error', err.response.data.message)
        })
    },
    // 篩選商品
    getFilterProducts (page = 1) {
      this.filterProducts = this.allProducts.filter((item) => {
        return (
          (this.filters.title
            ? item.title
              .toLowerCase()
              .indexOf(this.filters.title.toLowerCase().trim()) > -1
            : true) &&
          (this.filters.brand.length > 0
            ? this.filters.brand.indexOf(item.brand) > -1
            : true) &&
          (this.filters.category.length > 0
            ? this.filters.category.indexOf(item.category) > -1
            : true) &&
          (this.filters.minPrice
            ? this.filters.minPrice <= item.price
            : true) &&
          (this.filters.maxPrice ? this.filters.maxPrice >= item.price : true)
        )
      })
      this.products = this.filterProducts.filter(
        (item, i) => Math.ceil((i + 1) / 12) === page
      )
      this.productImages = []
      this.products.forEach((item) => {
        this.productImages.push(item.imageUrl)
      })

      // 頁碼物件處理
      const totalPages = Math.ceil(
        Object.keys(this.filterProducts).length / 12
      )
      this.pagination = {
        total_pages: totalPages,
        current_page: page,
        has_pre: page !== 1,
        has_next: page !== totalPages
      }

      this.loadings.fullLoading = false
      // console.log(this.products);
    },
    // 切換頁碼
    changePages (page = 1) {
      this.products = Object.values(this.filterProducts).filter(
        (item, i) => Math.ceil((i + 1) / 12) === page
      )

      this.productImages = []
      this.products.forEach((item) => {
        this.productImages.push(item.imageUrl)
      })

      this.pagination.current_page = page
      this.pagination.has_pre = page !== 1
      this.pagination.has_next =
        page !== this.pagination.total_pages
      // 點擊頁碼後移動到上方
      window.scrollTo({
        top: 400,
        behavior: 'smooth'
      })
    },
    ...mapActions(favoriteStore, ['updateFavorite'])
  },
  computed: {
    ...mapState(loadingStore, ['loadings']),
    ...mapState(favoriteStore, ['favorites'])
  },
  watch: {
    filters: {
      handler () {
        if (this.filters.minPrice) {
          if (this.filters.minPrice < 1) {
            this.filters.minPrice = 1
          }
        }
        if (this.filters.maxPrice) {
          if (this.filters.maxPrice < this.filters.minPrice) {
            this.filters.maxPrice = this.filters.minPrice
          }
        }
      },
      deep: true
    },
    // 點擊 RouterLink 時判斷是否有改變參數
    '$route.query': {
      handler () {
        if (this.$route.fullPath.includes('products')) {
          this.getAll()
        }
      },
      deep: true
    }
  },
  mounted () {
    this.productModal = this.$refs.productModal

    // drawer options
    const drawerOptions = {
      placement: 'left',
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: '',
      backdropClasses: 'bg-black bg-opacity-80 fixed inset-0 z-30'
    }
    this.filterDrawer = new Drawer(this.$refs.filterDrawer, drawerOptions)

    this.getAll()
  },
  components: {
    Swiper,
    SwiperSlide,
    UserProductModal,
    ProductsPagination
  }
}
</script>
