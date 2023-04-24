<template>
  <!-- product table -->
  <div class="mt-8 px-6">
    <button
      type="button"
      class="admin-primary-button"
      @click="couponModal.openModal('new')"
    >
      新增優惠券
    </button>
    <div class="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-md text-left text-gray-700">
        <thead class="text-sm text-dark uppercase bg-gray-300">
          <tr>
            <th scope="col" class="sr-only">Loading</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">啟用</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">優惠券名稱</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">折扣碼</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">到期日</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">折扣百分比</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">
              <span class="sr-only">選項</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b hover:bg-teal-100"
            v-for="coupon in coupons"
            :key="coupon.id"
          >
            <td class="px-3 w-6 max-w-[1.5rem]">
              <svg
                v-if="couponLoading.indexOf(coupon.id) > -1"
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
                    couponLoading.indexOf(coupon.id) > -1
                      ? 'cursor-not-allowed'
                      : 'cursor-pointer',
                  ]"
                >
                  <input
                    type="checkbox"
                    class="sr-only peer disabled:ring-4"
                    :true-value="1"
                    :false-value="0"
                    :disabled="couponLoading.indexOf(coupon.id) > -1"
                    :checked="coupon.is_enabled"
                    v-model="coupon.is_enabled"
                    @change="updateEnable(coupon)"
                  />
                  <div
                    class="w-full h-5 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-300 peer-checked:bg-teal-600"
                  ></div>
                </label>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">{{ coupon.title }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ coupon.code }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              {{ $filters.date(coupon.due_date) }}
            </td>
            <td scope="col" class="px-6 py-3 whitespace-nowrap">
              {{ coupon.percent }}%
            </td>
            <td
              class="px-6 py-4 whitespace-nowrap flex justify-center space-x-6"
            >
              <button
                type="button"
                :disabled="couponLoading.indexOf(coupon.id) > -1"
                class="admin-secondary-button px-3.5 py-1.5"
                @click="couponModal.openModal('edit', coupon)"
              >
                編輯
              </button>
              <button
                type="button"
                :disabled="couponLoading.indexOf(coupon.id) > -1"
                class="admin-delete-button px-3.5 py-1.5"
                @click="deleteModal.openModal('優惠券', coupon)"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination class="mt-8" :page-obj="pagination" @emit-page="getCoupons" />
  </div>
  <!-- coupon modal -->
  <CouponModal
    ref="couponModal"
    :page="pagination.current_page"
    @update-coupons="getCoupons"
  />
  <!-- delete modal -->
  <DeleteModal
    ref="deleteModal"
    :page="
      coupons.length > 1 ? pagination.current_page : pagination.current_page - 1
    "
    @update-coupons="getCoupons"
  />
</template>

<script>
import Pagination from "@/components/AdminPagination.vue";
import CouponModal from "@/components/modal/CouponModal.vue";
import DeleteModal from "@/components/modal/DeleteModal.vue";

import swalMixin from "@/mixins/swal.js";

import { mapState } from "pinia";
import loadingStore from "@/stores/loadingStore.js";
const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  mixins: [swalMixin],
  data() {
    return {
      coupons: [],
      pagination: {},
      couponLoading: [],
    };
  },
  methods: {
    getCoupons(page = 1, process) {
      this.loadings.fullLoading = true;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/admin/coupons?page=${page}`)
        .then((res) => {
          // console.log(res.data);
          const { coupons, pagination } = res.data;
          this.coupons = coupons;
          this.pagination = pagination;
          this.loadings.fullLoading = false;

          if (process === "update") {
            // Swal
            this.adminToast("success", "已更新優惠券資料");
          } else if (process === "delete") {
            // SWal
            this.adminToast("success", `已刪除優惠券資料`);
          }
          // 點擊頁碼後移動到上方
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        })
        .catch((err) => {
          // console.log(err);
          this.loadings.fullLoading = false;
          // Swal
          this.adminToast("error", err.response.data.message);
        });
    },
    updateEnable(coupon) {
      this.couponLoading.push(coupon.id);
      this.$http
        .put(`${VITE_API}/api/${VITE_PATH}/admin/coupon/${coupon.id}`, {
          data: coupon,
        })
        .then(() => {
          // console.log(res.data);
          this.couponLoading.shift();
          // Swal
          this.adminToast("success", "已更新啟用狀態");
        })
        .catch((err) => {
          // console.log(err);
          this.couponLoading.shift();
          // Swal
          this.adminToast("error", err.response.data.message);
          this.getCoupons(this.page.current_page);
        });
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
  mounted() {
    this.couponModal = this.$refs.couponModal;
    this.deleteModal = this.$refs.deleteModal;
    this.getCoupons();
  },
  components: {
    Pagination,
    CouponModal,
    DeleteModal,
  },
};
</script>
