<template>
  <div
    ref="reserveModal"
    id="reserveModal"
    tabindex="-1"
    class="hidden fixed z-40 w-full px-4 overflow-x-hidden overflow-y-auto top-28 left-0 right-0 h-auto"
  >
    <div class="w-full max-w-4xl h-full max-h-[calc(100vh-8.5rem)]">
      <!-- Modal content -->
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b bg-black top-[6rem] w-[calc(100%-2rem)] max-w-4xl z-50 rounded-t-lg fixed"
        >
          <h3 class="text-xl font-semibold text-gray-300">編輯文章</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            @click="reserveModal.hide()"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 mt-12">
          <div class="w-full max-w-xl mx-auto space-y-6">
            <div>
              <label
                for="modalDistrict"
                class="block mb-2 text-md font-medium text-gray-900"
                >預約門市</label
              >
              <select
                id="modalDistrict"
                class="w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2.5"
                v-model="tempReserve.title"
              >
                <option value="台北館">台北館</option>
                <option value="台中館">台中館</option>
                <option value="高雄館">高雄館</option>
              </select>
            </div>
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-2">
                <label for="time" class="block mb-2 font-medium"
                  >預約時間</label
                >
                <input
                  type="datetime-local"
                  id="time"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                  required
                  onkeypress="return false"
                  v-model="dateTime"
                />
              </div>
              <div>
                <label for="num" class="block mb-2 font-medium">人數</label>
                <input
                  type="number"
                  id="num"
                  class="text-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                  required
                  v-model="tempReserve.num"
                  @change="tempReserve.num < 1 ? (tempReserve.num = 1) : true"
                />
              </div>
            </div>
            <div>
              <label for="name" class="block mb-2 font-medium"
                >預約人姓名</label
              >
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                required
                v-model="tempReserve.name"
              />
            </div>
            <div>
              <label for="phone" class="block mb-2 font-medium"
                >預約人電話</label
              >
              <input
                type="tel"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                required
                v-model="tempReserve.tel"
              />
            </div>
            <div>
              <label for="email" class="block mb-2 font-medium"
                >預約人Email</label
              >
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                required
                v-model="tempReserve.email"
              />
            </div>
            <div>
              <label for="confirm" class="block mb-2 font-medium"
                >預約人備註</label
              >
              <textarea
                id="confirm"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                v-model="tempReserve.message"
              ></textarea>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="sr-only peer"
                    :checked="tempReserve.is_reserve"
                    v-model="tempReserve.is_reserve"
                  />
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"
                  ></div>
                  <span class="ml-3 text-md font-medium text-gray-900">{{
                    tempReserve.is_reserve ? "預約成功" : "尚未確認"
                  }}</span>
                </label>
              </div>
              <div class="flex justify-end">
                <button
                  type="button"
                  class="admin-delete-button"
                  @click="this.reserveModal.hide()"
                >
                  取消
                </button>
                <button
                  type="button"
                  class="ml-6 admin-primary-button"
                  :disabled="
                    !tempReserve.reserve_time ||
                    !tempReserve.num ||
                    !tempReserve.name ||
                    !tempReserve.tel ||
                    !tempReserve.email
                  "
                  :title="[
                    !tempReserve.reserve_time ||
                    !tempReserve.num ||
                    !tempReserve.name ||
                    !tempReserve.tel ||
                    !tempReserve.email
                      ? '&quot;*&quot;號為必填欄位'
                      : '',
                  ]"
                  @click="updateReserve()"
                >
                  確認
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "flowbite";

import loadingStore from "@/stores/loadingStore.js";

import { mapState } from "pinia";

import swalMixin from "@/mixins/swal.js";

export default {
  mixins: [swalMixin],
  data() {
    return {
      tempReserve: {},
      dateTime: "",
    };
  },
  methods: {
    openModal(reserve) {
      this.tempReserve = { ...reserve };
      this.dateTime = new Date(reserve.reserve_time)
        .toLocaleString("zh-TW", {
          hour12: false,
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })
        .replace(/\//g, "-")
        .replace(" ", "T");

      this.reserveModal.show();
    },
    updateReserve() {
      this.loadings.fullLoading = true;
      this.$http
        .put(
          `https://metarverspace-server.onrender.com/reserves/${this.tempReserve.id}`,
          {
            ...this.tempReserve,
          }
        )
        .then(() => {
          // console.log(res.data);
          this.$emit("updateReserves", this.page, "update");
          this.reserveModal.hide();
        })
        .catch((err) => {
          // console.log(err);
          // Swal
          this.adminToast("error", err.message);
        });
    },
  },
  watch: {
    dateTime() {
      this.tempReserve.reserve_time = Date.parse(this.dateTime);
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
  mounted() {
    // modal options
    const modalOptions = {
      placement: "center",
      backdrop: "static",
      backdropClasses: "bg-black bg-opacity-80 fixed inset-0 z-30",
      closable: true,
    };
    this.reserveModal = new Modal(this.$refs.reserveModal, modalOptions);
  },
};
</script>
