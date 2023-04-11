<template>
  <!-- product table -->
  <div class="mt-8 px-6">
    <div class="flex justify-between items-center">
      <button
        type="button"
        class="admin-primary-button"
        @click="productModal.openModal('new')"
      >
        新增商品
      </button>
      <div class="flex">
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            class="sr-only peer"
            :checked="showAccessory"
            v-model="showAccessory"
            @change="getProducts()"
          />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"
          ></div>
          <span class="ml-3 text-md font-medium text-gray-900">顯示配件</span>
        </label>
      </div>
    </div>
    <div class="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-md text-left text-gray-700">
        <thead class="text-sm text-dark uppercase bg-gray-300">
          <tr>
            <th scope="col" class="sr-only">Loading</th>
            <th
              scope="col"
              class="px-6 py-3 whitespace-nowrap cursor-pointer"
              @click="
                sortBy = 'is_enabled';
                ascending = sortBy === 'is_enabled' ? !ascending : true;
              "
            >
              上架
              <span class="text-xs" v-if="sortBy === 'is_enabled'">
                <span v-if="ascending"
                  ><font-awesome-icon :icon="['fas', 'sort-up']"
                /></span>
                <span v-else
                  ><font-awesome-icon :icon="['fas', 'sort-down']"
                /></span>
              </span>
              <span v-else>
                <font-awesome-icon :icon="['fas', 'sort']" />
              </span>
            </th>
            <th
              scope="col"
              class="px-6 py-3 whitespace-nowrap cursor-pointer"
              @click="
                sortBy = 'category';
                ascending = sortBy === 'category' ? !ascending : true;
              "
            >
              類別
              <span v-if="sortBy === 'category'">
                <span v-if="ascending"
                  ><font-awesome-icon :icon="['fas', 'sort-up']"
                /></span>
                <span v-else
                  ><font-awesome-icon :icon="['fas', 'sort-down']"
                /></span>
              </span>
              <span v-else>
                <font-awesome-icon :icon="['fas', 'sort']" />
              </span>
            </th>
            <th
              scope="col"
              class="px-6 py-3 whitespace-nowrap cursor-pointer"
              @click="
                sortBy = 'brand';
                ascending = sortBy === 'brand' ? !ascending : true;
              "
            >
              品牌
              <span class="text-xs" v-if="sortBy === 'brand'">
                <span v-if="ascending"
                  ><font-awesome-icon :icon="['fas', 'sort-up']"
                /></span>
                <span v-else
                  ><font-awesome-icon :icon="['fas', 'sort-down']"
                /></span>
              </span>
              <span v-else>
                <font-awesome-icon :icon="['fas', 'sort']" />
              </span>
            </th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">商品名稱</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">原價</th>
            <th
              scope="col"
              class="px-6 py-3 whitespace-nowrap cursor-pointer"
              @click="
                sortBy = 'price';
                ascending = sortBy === 'price' ? !ascending : true;
              "
            >
              售價
              <span class="text-xs" v-if="sortBy === 'price'">
                <span v-if="ascending"
                  ><font-awesome-icon :icon="['fas', 'sort-up']"
                /></span>
                <span v-else
                  ><font-awesome-icon :icon="['fas', 'sort-down']"
                /></span>
              </span>
              <span v-else>
                <font-awesome-icon :icon="['fas', 'sort']" />
              </span>
            </th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">
              <span class="sr-only">選項</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b hover:bg-teal-100"
            v-for="product in sortProducts"
            :key="product.id"
          >
            <td class="px-3 w-6 max-w-[1.5rem]">
              <svg
                v-if="productLoading.indexOf(product.id) > -1"
                class="animate-spin h-5 w-5 mr-3 text-dark"
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
            </td>
            <td class="px-6 font-medium whitespace-nowrap">
              <div class="w-9">
                <label
                  :class="[
                    'relative',
                    productLoading.indexOf(product.id) > -1
                      ? 'cursor-not-allowed'
                      : ' cursor-pointer',
                  ]"
                >
                  <input
                    type="checkbox"
                    class="sr-only peer disabled:ring-4"
                    :true-value="1"
                    :false-value="0"
                    :disabled="productLoading.indexOf(product.id) > -1"
                    :checked="product.is_enabled"
                    v-model="product.is_enabled"
                    @change="updateEnable(product)"
                  />
                  <div
                    class="w-full h-5 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-300 peer-checked:bg-teal-600"
                  ></div>
                </label>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">{{ product.category }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ product.brand }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ product.title }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              {{ $filters.currency(product.origin_price) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              {{ $filters.currency(product.price) }}
            </td>
            <td
              class="px-6 py-4 whitespace-nowrap flex justify-center space-x-6"
            >
              <button
                type="button"
                :disabled="productLoading.indexOf(product.id) > -1"
                class="admin-secondary-button px-3.5 py-1.5"
                @click="productModal.openModal('edit', product)"
              >
                編輯
              </button>
              <button
                type="button"
                :disabled="productLoading.indexOf(product.id) > -1"
                class="admin-delete-button px-3.5 py-1.5"
                @click="deleteModal.openModal('商品', product)"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination class="mt-8" :page-obj="pagination" @emit-page="changePages" />
  </div>
  <!-- product modal -->
  <ProductModal
    ref="productModal"
    :page="pagination.current_page"
    :accessories="accessories"
    @update-products="getProducts"
  />
  <!-- delete modal -->
  <DeleteModal
    ref="deleteModal"
    :page="pagination.current_page"
    @update-products="getProducts"
  />
</template>

<script>
import Pagination from "@/components/AdminPagination.vue";
import ProductModal from "@/components/modal/ProductModal.vue";
import DeleteModal from "@/components/modal/DeleteModal.vue";

import swalMixin from "@/mixins/swal.js";

import { mapState } from "pinia";
import loadingStore from "@/stores/loadingStore.js";
const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  mixins: [swalMixin],
  data() {
    return {
      ascending: false,
      sortBy: "",
      allProducts: [],
      products: [],
      pagination: {},
      showAccessory: true,
      accessories: [],
      productLoading: [],
    };
  },
  methods: {
    getProducts(page = 1, process) {
      this.accessories = [];
      this.loadings.fullLoading = true;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/admin/products/all`)
        .then((res) => {
          // 反轉產品順序由新到舊
          this.allProducts = Object.values(res.data.products).reverse();
          // 判斷是否顯示配件
          if (!this.showAccessory) {
            this.allProducts = this.allProducts.filter((item) => {
              return item.category !== "配件";
            });
          }
          // 根據頁碼顯示商品
          this.products = this.allProducts.filter((item, i) => {
            return Math.ceil((i + 1) / 10) == page;
          });
          // 從全部商品找出 category 為配件商品
          this.accessories = Object.values(res.data.products).filter((item) => {
            return item.category === "配件";
          });
          // 頁碼物件處理
          const totalPages = Math.ceil(
            Object.keys(this.allProducts).length / 10
          );
          this.pagination = {
            total_pages: totalPages,
            current_page: page,
            has_pre: page === 1 ? false : true,
            has_next: page === totalPages ? false : true,
          };

          this.loadings.fullLoading = false;

          if (process === "update") {
            // Swal
            this.adminToast("success", "已更新商品資料");
          } else if (process === "delete") {
            // SWal
            this.adminToast("success", `已刪除商品資料`);
          }
        })
        .catch((err) => {
          // console.log(err);
          this.loadings.fullLoading = false;
          // Swal
          this.adminToast("error", err.response.data.message);
        });
    },
    changePages(page = 1) {
      this.products = Object.values(this.allProducts).filter((item, i) => {
        return Math.ceil((i + 1) / 10) == page;
      });

      this.pagination.current_page = page;
      this.pagination.has_pre = page === 1 ? false : true;
      this.pagination.has_next =
        page === this.pagination.total_pages ? false : true;
    },
    updateEnable(product) {
      this.productLoading.push(product.id);
      this.$http
        .put(`${VITE_API}/api/${VITE_PATH}/admin/product/${product.id}`, {
          data: product,
        })
        .then(() => {
          // console.log(res.data);
          this.productLoading.shift();
          // Swal
          this.adminToast("success", "已更新啟用狀態");
        })
        .catch((err) => {
          // console.log(err);
          this.productLoading.shift();
          // Swal
          this.adminToast("error", err.response.data.message);
          this.getProducts(this.page.current_page);
        });
    },
  },
  mounted() {
    this.productModal = this.$refs.productModal;
    this.deleteModal = this.$refs.deleteModal;
    this.getProducts();
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),

    sortProducts() {
      if (this.sortBy === "category" || this.sortBy === "brand") {
        return [...this.products].sort((a, b) => {
          return this.ascending
            ? a[this.sortBy].localeCompare(b[this.sortBy], "zh-hant")
            : b[this.sortBy].localeCompare(a[this.sortBy], "zh-hant");
        });
      } else if (this.sortBy) {
        return [...this.products].sort((a, b) => {
          return this.ascending
            ? a[this.sortBy] - b[this.sortBy]
            : b[this.sortBy] - a[this.sortBy];
        });
      } else {
        return this.products;
      }
    },
  },
  components: {
    Pagination,
    ProductModal,
    DeleteModal,
  },
};
</script>
