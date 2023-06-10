<template>
  <p class="text-center text-2xl md:text-3xl mb-10" v-if="!reserves.length">
    沒有任何預約記錄
  </p>
  <div class="mb-10" v-else>
    <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="w-full text-sm text-left">
        <thead class="uppercase bg-white/20 text-gray-300">
          <tr>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">預約時間</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">門市</th>
            <th scope="col" class="px-4 py-3 whitespace-nowrap">預約人數</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">預約人姓名</th>
            <th scope="col" class="px-5 py-3 whitespace-nowrap">預約狀態</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">
              <span class="sr-only">選項</span>
            </th>
          </tr>
        </thead>
        <tbody
          v-for="item in reserves"
          :key="item.id"
          class="text-sm text-gray-400"
        >
          <tr class="border-b bg-gray-800 border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap text-white"
            >
              {{
                new Date(item.reserve_time).toLocaleString("zh-TW", {
                  hour12: false,
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }}
            </th>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.title }}</td>
            <td class="px-4 py-4 whitespace-nowrap">{{ item.num }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ item.name }}</td>
            <td class="px-5 py-4 whitespace-nowrap">
              {{ item.is_reserve ? "預約成功" : "尚未確認" }}
            </td>
            <td class="px-5 py-4 whitespace-nowrap flex justify-center">
              <button
                type="button"
                class="text-white right-1.5 bottom-1.5 focus:ring-1 focus:outline-none font-medium rounded text-sm px-4 py-2 bg-warm hover:bg-warm2 focus:ring-warm2"
                v-if="!item.is_reserve"
                @click="deleteReserve(item)"
              >
                取消預約
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import loadingStore from "@/stores/loadingStore.js";

import { mapState } from "pinia";

const { VITE_RENDER_API } = import.meta.env;

export default {
  props: ["reserves"],
  methods: {
    deleteReserve(item) {
      this.$swal
        .fire({
          title: "取消預約",
          text: `確定要取消 ${new Date(item.reserve_time).toLocaleString(
            "zh-TW",
            {
              hour12: false,
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            }
          )} 的預約？`,
          icon: "warning",
          confirmButtonColor: "#FE5F50",
          confirmButtonText: "確定取消",
          backdrop: " rgba(0,0,0,0.8)",
          showCancelButton: true,
          cancelButtonColor: "#6b7280",
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.loadings.fullLoading = true;
            this.$http
              .delete(`${VITE_RENDER_API}/reserves/${item.id}`)
              .then(() => {
                // console.log(res);
                this.$emit("update-reserves", item.id);
                this.loadings.fullLoading = false;
              })
              .catch((err) => {
                this.loadings.fullLoading = false;
                // Swal
                this.userToast("error", err.message);
              });
          }
        });
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
};
</script>
