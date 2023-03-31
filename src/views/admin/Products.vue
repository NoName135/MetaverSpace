<template>
  <!-- product table -->
  <div class="mt-8 px-6">
    <button
      type="button"
      class="admin-primary-button"
      @click="productModal.openModal('new')"
    >
      新增商品
    </button>
    <div class="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-md text-left text-gray-700">
        <thead class="text-sm text-dark uppercase bg-gray-300">
          <tr>
            <th scope="col" class="sr-only">Loading</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">上架</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">類別</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">品牌</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">商品名稱</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">原價</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">售價</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">
              <span class="sr-only">選項</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b hover:bg-teal-100"
            v-for="product in products"
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
                <label class="relative cursor-pointer">
                  <input
                    type="checkbox"
                    class="sr-only peer"
                    :true-value="1"
                    :false-value="0"
                    :checked="product.is_enabled"
                    :disabled="productLoading.indexOf(product.id) > -1"
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
                @click="productModal.openModal('edit', product, accessories)"
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
    <Pagination class="mt-8" :page-obj="pagination" @emit-page="getProducts" />
  </div>
  <!-- product modal -->
  <ProductModal
    ref="productModal"
    :page="pagination.current_page"
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
      products: [],
      pagination: {},
      accessories: [],
      productLoading: [],
    };
  },
  methods: {
    getProducts(page = 1) {
      this.loadings.fullLoading = true;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/admin/products?page=${page}`)
        .then((res) => {
          // console.log(res.data);
          const { products, pagination } = res.data;
          this.products = products;
          this.pagination = pagination;
          this.accessories = [];
          products.forEach((item) => {
            if (item.category === "配件") {
              this.accessories.push(item);
            }
          });
          this.loadings.fullLoading = false;
        })
        .catch((err) => {
          // console.log(err);
          this.loadings.fullLoading = false;
          // Swal
          this.adminToast("error", err.response.data.message);
        });
    },
    updateEnable(product) {
      console.log(product);
      this.productLoading.push(product.id);
      this.$http
        .put(`${VITE_API}/api/${VITE_PATH}/admin/product/${product.id}`, {
          data: product,
        })
        .then((res) => {
          console.log(res.data);
          this.productLoading.shift();
          // Swal
          this.adminToast("success", "已更新啟用狀態");
        })
        .catch((err) => {
          // console.log(err);
          this.productLoading.shift();
          // Swal
          this.adminToast("error", err.response.data.message);
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
  },
  components: {
    Pagination,
    ProductModal,
    DeleteModal,
  },
};
</script>
