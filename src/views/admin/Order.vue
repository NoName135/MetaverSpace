<template>
  <div class="mt-8 px-6">
    <!-- 銷售總數及金額 -->
    <div class="grid grid-cols-3 gap-8">
      <div
        class="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg shadow text-end"
      >
        <h2 class="text-2xl">訂單總數</h2>
        <p class="mb-3 text-teal-500 text-4xl font-bold">
          {{ $filters.currency(allOrders.length) }}
        </p>
      </div>
      <div
        class="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg shadow text-end"
      >
        <h2 class="text-2xl">銷售總數 (含配件)</h2>
        <p class="mb-3 text-teal-500 text-4xl font-bold">
          {{ $filters.currency(productQty) }}
        </p>
      </div>
      <div
        class="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg shadow text-end"
      >
        <h2 class="text-2xl">營業額</h2>
        <p class="mb-3 text-2xl font-bold">
          NT$<span class="ml-1 text-teal-500 text-4xl">{{
            $filters.currency(ordersTotal)
          }}</span>
        </p>
      </div>
    </div>
    <!-- 銷售圖表 -->
    <div class="mt-6 grid grid-cols-2 gap-8">
      <div>
        <div class="flex items-center">
          <h2 class="text-xl font-semibold mb-4 whitespace-nowrap mr-8">
            銷售圖表
          </h2>
          <ul
            class="mb-4 items-center w-full text-sm font-medium text-gray-900 bg-white border-2 border-gray-300 rounded-lg flex"
          >
            <li class="w-full border-gray-300 border-b-0 border-r-2">
              <div class="flex items-center pl-3">
                <input
                  checked
                  id="brand"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-teal-600 bg-gray-50 border-gray-300 focus:ring-teal-500 focus:ring-2"
                />
                <label
                  for="brand"
                  class="w-full py-3 ml-2 text-md font-medium text-gray-900"
                  @click="updateChart('category', 'switchChart')"
                  >類別</label
                >
              </div>
            </li>
            <li class="w-full">
              <div class="flex items-center pl-3">
                <input
                  id="category"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-teal-600 bg-gray-50 border-gray-300 focus:ring-teal-500 focus:ring-2"
                />
                <label
                  for="category"
                  class="w-full py-3 ml-2 text-md font-medium text-gray-900"
                  @click="updateChart('brand', 'switchChart')"
                  >品牌</label
                >
              </div>
            </li>
          </ul>
        </div>
        <div ref="categoryChart"></div>
      </div>
      <div ref="soldChart"></div>
    </div>
    <!-- 訂單資訊 -->
    <div class="mt-6">
      <div class="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-md text-left text-gray-700">
          <thead class="text-sm text-dark uppercase bg-gray-300">
            <tr>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂單編號</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂購日期</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂購人</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂單金額</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂單狀態</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">備註</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                <span class="sr-only">選項</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b hover:bg-teal-100"
              v-for="order in orders"
              :key="order.id"
            >
              <td class="px-6 py-4 whitespace-nowrap">{{ order.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ $filters.date(order.create_at) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">{{ order.user.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                NT$ {{ $filters.currency(order.total) }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {{ order.is_paid ? "已付款" : "未付款" }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <font-awesome-icon
                  :icon="['fas', 'check']"
                  class="ml-1"
                  v-if="order.message"
                />
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap flex justify-center space-x-6"
              >
                <button
                  type="button"
                  class="admin-secondary-button px-3.5 py-1.5"
                  @click="orderModal.openModal(order)"
                >
                  編輯
                </button>
                <button
                  type="button"
                  class="admin-delete-button px-3.5 py-1.5"
                  @click="deleteModal.openModal('訂單', order)"
                >
                  刪除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Pagination class="mt-8" :page-obj="pagination" @emit-page="getOrders" />
  </div>
  <!-- order modal -->
  <OrderModal
    ref="orderModal"
    :page="pagination.current_page"
    @update-orders="getOrders"
  />
  <!-- delete modal -->
  <DeleteModal
    ref="deleteModal"
    :page="pagination.current_page"
    @update-orders="getAllOrders"
  />
</template>

<script>
import Pagination from "@/components/AdminPagination.vue";
import OrderModal from "@/components/modal/OrderModal.vue";
import DeleteModal from "@/components/modal/DeleteModal.vue";

import swalMixin from "@/mixins/swal.js";

import { mapState } from "pinia";
import loadingStore from "@/stores/loadingStore.js";
const { VITE_API, VITE_PATH } = import.meta.env;
import c3 from "c3";

export default {
  mixins: [swalMixin],
  data() {
    return {
      allOrders: [],
      productQty: 0,
      ordersTotal: 0,
      orders: [],
      pagination: {},
    };
  },
  methods: {
    async getAllOrders(page = 1, process) {
      this.loadings.fullLoading = true;
      await Promise.all([
        this.$http.get(`${VITE_API}/api/${VITE_PATH}/admin/orders`),
        this.$http.get(
          `${VITE_API}/api/${VITE_PATH}/admin/orders?page=${page}`
        ),
      ])
        .then((res) => {
          // console.log(res);
          const [a, b] = res;

          this.allOrders = a.data.orders;
          this.ordersTotal = this.allOrders.reduce((acc, cur) => {
            return acc + cur.total;
          }, 0);
          this.updateChart("category");

          this.orders = b.data.orders;
          this.pagination = b.data.pagination;
          this.loadings.fullLoading = false;

          if (process === "delete") {
            // SWal
            this.adminToast("success", `已刪除訂單資料`);
          }
        })
        .catch((err) => {
          // console.log(err);
          this.loadings.fullLoading = false;
          // Swal
          this.adminToast("error", err.response.data.message);
        });
    },
    getOrders(page = 1) {
      this.loadings.fullLoading = true;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          // console.log(res.data);
          const { orders, pagination } = res.data;
          this.orders = orders;
          this.pagination = pagination;
          this.loadings.fullLoading = false;
          // Swal
          this.adminToast("success", "已更新訂單資料");
        })
        .catch((err) => {
          // console.log(err);
          this.loadings.fullLoading = false;
          // Swal
          this.adminToast("error", err.response.data.message);
        });
    },
    updateChart(target = "category", switchChart) {
      const { chartColumns, titleChartCols } = this.switchChart(target);
      // 訂單類別圖表切換及重新整理
      this.categoryChart.unload({
        columns: chartColumns,
      });
      if (!switchChart) {
        this.soldChart.unload({
          columns: titleChartCols,
        });
      }
      setTimeout(() => {
        this.categoryChart.load({
          columns: chartColumns,
        });
        if (!switchChart) {
          this.soldChart.load({
            columns: titleChartCols,
          });
        }
      }, 300);
    },
    switchChart(target) {
      const chartColumns = [];
      const titleChart = [];
      this.productQty = 0;
      // 將訂單所有類別數量匯入 chartColumns
      for (let i = 0; i < this.allOrders.length; i++) {
        const productObj = this.allOrders[i].products;
        // 取出訂單全部 products 資料
        Object.values(productObj).forEach((item) => {
          // 計算商品總數 (含配件)
          this.productQty += item.qty;
          // 圖表計算 (不含配件)
          if (item.product.category !== "配件") {
            let newCategory = true;
            let newTitle = true;
            // 尋找 Columns 是否有重複出現
            for (let j = 0; j < chartColumns.length; j++) {
              if (chartColumns[j][0] === item.product[target]) {
                chartColumns[j][1] += item.qty;
                newCategory = false;
              }
            }
            if (newCategory) {
              chartColumns.push([item.product[target], item.qty]);
            }
            // 尋找 chart 是否有重複出現
            for (let k = 0; k < titleChart.length; k++) {
              if (titleChart[k][0] === item.product.title) {
                titleChart[k][1] += item.qty;
                newTitle = false;
              }
            }
            if (newTitle) {
              titleChart.push([item.product.title, item.qty]);
            }
          }
        });
      }
      // 將 titleChart 排序並將第 5 筆後的商品改成其他
      titleChart.sort((a, b) => b[1] - a[1]);
      if (titleChart.length > 4) {
        titleChart.splice(4, 0, ["其他", 0]);
        titleChart.forEach((item, i) => {
          if (i > 4) {
            titleChart[4][1] += item[1];
          }
        });
      }
      const titleChartCols = titleChart.filter((item, i) => {
        return i <= 4;
      });
      return { chartColumns, titleChartCols };
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
  mounted() {
    // c3 charts
    // 品牌類別圖表
    this.categoryChart = c3.generate({
      bindto: this.$refs.categoryChart,
      data: {
        columns: [],
        type: "bar",
      },
      axis: {
        x: {
          type: "category",
          categories: [""],
        },
      },
    });
    // 銷售圖表
    this.soldChart = c3.generate({
      bindto: this.$refs.soldChart,
      data: {
        columns: [],
        type: "donut",
      },
      donut: {
        title: "商品營收比重",
      },
    });

    this.orderModal = this.$refs.orderModal;
    this.deleteModal = this.$refs.deleteModal;
    this.getAllOrders();
  },
  beforeUnmount() {
    if (this.categoryChart) {
      this.categoryChart.destroy();
    }
  },
  components: {
    Pagination,
    OrderModal,
    DeleteModal,
  },
};
</script>

<style src="c3/c3.css"></style>
<style>
.c3-chart-arcs-title {
  font-size: 20px;
  font-weight: bold;
}
</style>
