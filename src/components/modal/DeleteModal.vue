<template>
  <div
    id="deleteModal"
    ref="deleteModal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-20 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-full"
  >
    <div class="relative w-full max-w-lg h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b rounded-t-lg border-gray-600 bg-rose-700"
        >
          <h3 class="text-xl font-semibold text-white">刪除{{ target }}</h3>
          <button
            type="button"
            class="text-white bg-transparent hover:bg-gray-300 hover:text-rose-700 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            @click="deleteModal.hide()"
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
              ></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-6">
          <p class="text-lg leading-relaxed text-gray-900">
            是否刪除
            {{
              target === "預約" || target === "留言"
                ? `${tempItem.name}的${target}`
                : tempItem.title || tempItem.id
            }}
            (刪除後無法恢復)
          </p>
        </div>
        <!-- Modal footer -->
        <div
          class="flex justify-end items-center p-4 space-x-2 border-t border-gray-300 rounded-b"
        >
          <button
            data-modal-hide="small-modal"
            type="button"
            class="text-gray-500 bg-white hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-300 text-sm font-medium px-5 py-2.5 hover:text-white focus:z-10"
            @click="deleteModal.hide()"
          >
            取消
          </button>
          <button
            data-modal-hide="small-modal"
            type="button"
            class="text-white bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            @click="deleteItem()"
          >
            確定刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "flowbite";

import { mapState } from "pinia";
import loadingStore from "@/stores/loadingStore.js";

import swalMixin from "@/mixins/swal.js";

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  props: ["page"],
  mixins: [swalMixin],
  data() {
    return {
      target: "",
      tempItem: {},
    };
  },
  methods: {
    openModal(target, tempItem) {
      this.target = target;
      this.tempItem = tempItem;
      this.deleteModal.show();
    },
    deleteItem() {
      let url = "";
      if (this.target == "商品") {
        url = `${VITE_API}/api/${VITE_PATH}/admin/product/${this.tempItem.id}`;
      } else if (this.target == "訂單") {
        url = `${VITE_API}/api/${VITE_PATH}/admin/order/${this.tempItem.id}`;
      } else if (this.target == "優惠券") {
        url = `${VITE_API}/api/${VITE_PATH}/admin/coupon/${this.tempItem.id}`;
      } else if (this.target == "文章") {
        url = `${VITE_API}/api/${VITE_PATH}/admin/article/${this.tempItem.id}`;
      } else if (this.target == "預約") {
        url = `https://metarverspace-server.onrender.com/reserves/${this.tempItem.id}`;
      } else if (this.target == "留言") {
        url = `https://metarverspace-server.onrender.com/contacts/${this.tempItem.id}`;
      }

      this.loadings.fullLoading = true;
      this.$http
        .delete(url)
        .then(() => {
          // console.log(res.data);
          if (this.target == "商品") {
            this.$emit("updateProducts", this.page, "delete");
          } else if (this.target == "訂單") {
            this.$emit("updateOrders", this.page, "delete");
          } else if (this.target == "優惠券") {
            this.$emit("updateCoupons", this.page, "delete");
          } else if (this.target == "文章") {
            this.$emit("updateArticles", this.page, "delete");
          } else if (this.target == "預約") {
            this.$emit("updateReserves", this.page, "delete");
          } else if (this.target == "留言") {
            this.$emit("updateContacts", this.page, "delete");
          }
          this.deleteModal.hide();
        })
        .catch((err) => {
          // console.log(err);
          // SWal
          if (this.target === "預約" || this.target === "留言") {
            this.adminToast("error", err.message);
          } else {
            this.adminToast("error", err.response.data.message);
          }
        });
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
  mounted() {
    // modal options
    const deleteModalOptions = {
      placement: "top-center",
      backdrop: "dynamic",
      backdropClasses: "bg-black bg-opacity-80 fixed inset-0 z-30",
      closable: true,
    };
    this.deleteModal = new Modal(this.$refs.deleteModal, deleteModalOptions);
  },
};
</script>
