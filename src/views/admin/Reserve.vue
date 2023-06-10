<template>
  <!-- product table -->
  <div class="mt-8 px-6">
    <label for="district" class="block mb-2 text-md font-medium text-gray-900"
      >請選擇門市</label
    >
    <select
      id="district"
      class="w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2.5"
      v-model="titleBranch"
      @change="filterReserves(1)"
    >
      <option selected value="">全部門市</option>
      <option value="台北館">台北館</option>
      <option value="台中館">台中館</option>
      <option value="高雄館">高雄館</option>
    </select>
    <div class="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-md text-left text-gray-700">
        <thead class="text-sm text-dark uppercase bg-gray-300">
          <tr>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">預約人</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">預約時間</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">人數</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">備註</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">預約狀況</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">
              <span class="sr-only">選項</span>
            </th>
          </tr>
        </thead>
        <tbody v-for="reserve in reserves" :key="reserve.id">
          <tr class="bg-white border-b hover:bg-teal-100">
            <td class="px-6 py-4 whitespace-nowrap">{{ reserve.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              {{
                new Date(reserve.reserve_time)
                  .toLocaleString("zh-TW", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                  .replace(/(上午|下午)/, "$1 ")
              }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">{{ reserve.num }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              <FontAwesomeIcon
                :icon="['fas', 'check']"
                class="ml-1"
                v-if="reserve.message"
              />
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              {{ reserve.is_reserve ? "預約成功" : "尚未確認" }}
            </td>
            <td
              class="px-6 py-4 whitespace-nowrap flex justify-center space-x-6"
            >
              <button
                type="button"
                class="admin-secondary-button px-3.5 py-1.5"
                @click="reserveModal.openModal(reserve)"
              >
                編輯
              </button>
              <button
                type="button"
                class="admin-delete-button px-3.5 py-1.5"
                @click="deleteModal.openModal('預約', reserve)"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination
      class="mt-8"
      :page-obj="pagination"
      @emit-page="filterReserves"
    />
  </div>
  <!-- reserve modal -->
  <ReserveModal
    ref="reserveModal"
    :page="pagination.current_page"
    @update-reserves="getReserves"
  ></ReserveModal>
  <!-- delete modal -->
  <DeleteModal
    ref="deleteModal"
    :page="
      reserves.length > 1
        ? pagination.current_page
        : pagination.current_page - 1
    "
    @update-reserves="getReserves"
  />
</template>

<script>
import Pagination from "@/components/AdminPagination.vue";
import ReserveModal from "@/components/modal/ReserveModal.vue";
import DeleteModal from "@/components/modal/DeleteModal.vue";

import loadingStore from "@/stores/loadingStore.js";

import { mapState } from "pinia";

import swalMixin from "@/mixins/swal.js";

const { VITE_RENDER_API } = import.meta.env;

export default {
  mixins: [swalMixin],
  data() {
    return {
      allReserves: [],
      reserves: [],
      pagination: {},
      titleBranch: "",
    };
  },
  methods: {
    getReserves(page = 1, process) {
      this.loadings.fullLoading = true;
      this.$http
        .get(`${VITE_RENDER_API}/reserves`)
        .then((res) => {
          // console.log(res.data);
          this.allReserves = res.data.sort((a, b) => b.id - a.id);
          this.filterReserves(page);

          this.loadings.fullLoading = false;

          if (process === "update") {
            // Swal
            this.adminToast("success", "已更新預約資料");
          } else if (process === "delete") {
            // SWal
            this.adminToast("success", "已刪除預約資料");
          }
        })
        .catch((err) => {
          this.loadings.fullLoading = false;
          this.userToast("error", err.message);
        });
    },
    filterReserves(page = 1) {
      this.reserves = this.allReserves
        .filter((item) => !this.titleBranch || item.title === this.titleBranch)
        .filter((item, i) => Math.ceil((i + 1) / 10) == page);
      // 頁碼物件處理
      const totalPages = Math.ceil(this.allReserves.length / 10);
      this.pagination = {
        total_pages: totalPages,
        current_page: page,
        has_pre: page === 1 ? false : true,
        has_next: page === totalPages ? false : true,
      };
      // 點擊頁碼後移動到上方
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
  mounted() {
    this.reserveModal = this.$refs.reserveModal;
    this.deleteModal = this.$refs.deleteModal;
    this.getReserves();
  },
  components: {
    Pagination,
    ReserveModal,
    DeleteModal,
  },
};
</script>
