import { defineStore } from 'pinia'

import axios from 'axios'
import Swal from 'sweetalert2'

const { VITE_API, VITE_PATH } = import.meta.env

export default defineStore('cart', {
  state: () => {
    return {
      cart: {},
      cartLoading: {
        productModal: false,
        cartId: ''
      },
      modal: {}
    }
  },
  actions: {
    userToast (icon, title) {
      Swal.fire({
        icon,
        title,
        toast: true,
        position: 'top-end',
        background: '#080909',
        color: '#FFF',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        customClass: {
          timerProgressBar: 'progress-bar', // all.scss 變更 progress-bar color
          popup: 'swal2-top' // all.scss 變更 top 位置
        }
      })
    },
    // 將 modal 複製到 pinia 以便操作
    createModalRef (modal) {
      this.modal = modal
    },
    getCart () {
      axios
        .get(`${VITE_API}/api/${VITE_PATH}/cart`)
        .then((res) => {
          // console.log(res.data.data);
          this.cart = res.data.data
          this.cartLoading.productModal = false
        })
        .catch((err) => {
          this.userToast('error', err.response.data.message)
        })
    },
    addCart (product, qty = 1, spec) {
      this.cartLoading.cartId = product.id
      const carts = this.cart.carts
      const cartIndex = carts.findIndex((obj) => {
        return obj.product.id === product.id
      })
      let cartSpec = []
      // 有 spec 才做以下判斷
      if (spec) {
        // 判斷是否有加入過此商品到購物車
        if (cartIndex >= 0) {
          cartSpec = [...carts[cartIndex].cartSpec]
          const specIndex = carts[cartIndex].cartSpec.findIndex((obj) => {
            return obj.title === spec
          })
          // 判斷物件是否已存在 cartSpec
          if (specIndex >= 0) {
            carts[cartIndex].cartSpec[specIndex].qty += qty
          } else {
            cartSpec.push({ title: spec, qty })
          }
        } else {
          cartSpec.push({ title: spec, qty })
        }
      }

      this.cartLoading.productModal = true
      axios
        .post(`${VITE_API}/api/${VITE_PATH}/cart`, {
          data: {
            product_id: product.id,
            qty,
            cartSpec
          }
        })
        .then((res) => {
          // console.log(res.data);
          this.userToast('success', res.data.message)
          this.getCart()
          // 如果有 modal 就關閉
          if (Object.keys(this.modal).length > 0) {
            this.modal.hide()
          }
          this.cartLoading.cartId = ''
        })
        .catch((err) => {
          this.cartLoading.productModal = false
          this.cartLoading.cartId = ''
          this.userToast('error', err.response.data.message)
          this.getCart()
        })
    },
    updateCart (cart, index) {
      this.cartLoading.cartId = cart.id
      let qty = cart.qty
      if (qty < 1) {
        qty = 1
      }
      if (qty > 99) {
        qty = 99
      }
      if (cart.cart_spec?.length) {
        if (cart.cart_spec[index]?.qty < 1) {
          cart.cart_spec[index].qty = 1
        }
        if (cart.cart_spec[index]?.qty > 99) {
          cart.cart_spec[index].qty = 99
        }
        qty = cart.cart_spec.reduce((acc, cur) => {
          return acc + cur.qty
        }, 0)
      }
      axios
        .put(`${VITE_API}/api/${VITE_PATH}/cart/${cart.id}`, {
          data: {
            product_id: cart.product.id,
            qty,
            cart_spec: cart.cart_spec
          }
        })
        .then((res) => {
          // console.log(res.data);
          this.userToast('success', res.data.message)
          this.getCart()
          this.cartLoading.cartId = ''
        })
        .catch((err) => {
          this.userToast('error', err.response.data.message)
          this.getCart()
          this.cartLoading.cartId = ''
        })
    },
    updateCartSpec (cart, title, index) {
      const carts = this.cart.carts
      const cartId = carts.findIndex((obj) => {
        return obj.id === cart.id
      })
      // 如果有相同規格就跑 Swal
      const compare = carts[cartId].cart_spec.some((item) => {
        return item.title === title
      })
      if (compare) {
        this.cart.carts[cartId] = { ...cart }
        this.userToast('warning', '購物車已存在相同規格')
        return
      }

      cart.cart_spec[index].title = title
      this.cartLoading.cartId = cart.id
      axios
        .put(`${VITE_API}/api/${VITE_PATH}/cart/${cart.id}`, {
          data: {
            product_id: cart.product.id,
            qty: cart.qty,
            cart_spec: cart.cart_spec
          }
        })
        .then(() => {
          // console.log(res.data);
          this.userToast('success', '已更新購物車商品規格')
          this.getCart()
          this.cartLoading.cartId = ''
        })
        .catch((err) => {
          this.userToast('error', err.response.data.message)
          this.getCart()
          this.cartLoading.cartId = ''
        })
    },
    async deleteCart (id) {
      this.cartLoading.cartId = id
      await axios
        .delete(`${VITE_API}/api/${VITE_PATH}/cart/${id}`)
        .then(() => {
          // console.log(res.data);
          this.userToast('success', '已刪除購物車商品')
          this.getCart()
          this.cartLoading.cartId = ''
        })
        .catch((err) => {
          this.userToast('error', err.response.data.message)
          this.cartLoading.cartId = ''
        })
    },
    deleteCartSpec (cart, index) {
      this.cartLoading.cartId = cart.id
      const carts = this.cart.carts
      const cartIndex = carts.findIndex((obj) => {
        return obj.id === cart.id
      })

      const qty = carts[cartIndex].qty - carts[cartIndex].cart_spec[index].qty
      carts[cartIndex].cart_spec.splice(index, 1)
      axios
        .put(`${VITE_API}/api/${VITE_PATH}/cart/${cart.id}`, {
          data: {
            product_id: cart.product.id,
            qty,
            cart_spec: cart.cart_spec
          }
        })
        .then(() => {
          // console.log(res.data);
          this.userToast('success', '已刪除購物車商品規格')
          this.getCart()
          this.cartLoading.cartId = ''
        })
        .catch((err) => {
          this.cartLoading.productModal = false
          this.userToast('error', err.response.data.message)
          this.getCart()
          this.cartLoading.cartId = ''
        })
    }
  },
  getters: {}
})
