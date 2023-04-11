import { defineStore } from "pinia";

import axios from "axios";
import Swal from "sweetalert2";

const { VITE_API, VITE_PATH } = import.meta.env;

export default defineStore("cart", {
  state: () => {
    return {
      cart: {},
      cartLoading: {
        productModal: false,
      },
    };
  },
  actions: {
    userToast(icon, title) {
      Swal.fire({
        icon,
        title,
        toast: true,
        position: "top-end",
        background: "#080909",
        color: "#FFF",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
        customClass: {
          timerProgressBar: "progress-bar", // all.scss 變更 progress-bar color
          popup: "swal2-top", // all.scss 變更 top 位置
        },
      });
    },
    getCart() {
      axios
        .get(`${VITE_API}/api/${VITE_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data;
          console.log(this.cart);
          this.cartLoading.productModal = false;
        })
        .catch((err) => {
          this.userToast("error", err.response.data.message);
        });
    },
    addCart(product_id, qty = 1, cart_spec) {
      this.cartLoading.productModal = true;
      axios
        .post(`${VITE_API}/api/${VITE_PATH}/cart`, {
          data: {
            product_id,
            qty,
            cart_spec,
          },
        })
        .then((res) => {
          // console.log(res.data);
          this.userToast("success", res.data.message);
          this.getCart();
        })
        .catch((err) => {
          this.cartLoading.productModal = false;
          this.userToast("error", err.response.data.message);
        });
    },
    deleteCart(id) {
      axios
        .delete(`${VITE_API}/api/${VITE_PATH}/cart/${id}`)
        .then((res) => {
          console.log(res.data);
          this.getCart();
        })
        .catch((err) => {
          this.userToast("error", err.response.data.message);
        });
    },
  },
  getters: {},
});
