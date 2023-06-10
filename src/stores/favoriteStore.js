import { defineStore } from 'pinia'

import axios from 'axios'
import Swal from 'sweetalert2'

const { VITE_API, VITE_PATH } = import.meta.env

export default defineStore('favorite', {
  state: () => {
    return {
      favorites: [],
      favLoading: {},
      cart_specs: []
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
    async getFavorite () {
      const favoritesId = JSON.parse(localStorage.getItem('favorites')) || []
      const getProductApi = favoritesId.map((id) =>
        axios.get(`${VITE_API}/api/${VITE_PATH}/product/${id}`)
      )
      try {
        const product = await Promise.allSettled(getProductApi)
        // 成功抓取的 id 才匯入 favorites 陣列
        this.favorites = product
          .filter((item) => item.status === 'fulfilled')
          .map((item) => item.value.data.product)
        // 如果有不存在的 Id 就更新 localStorage
        if (
          product.some((item) => {
            return item.status === 'rejected'
          })
        ) {
          localStorage.setItem(
            'favorites',
            JSON.stringify(this.favorites.map((item) => item.id))
          )
        }
        // 將 favorite product spec 都改為空值
        this.cart_specs = []
        this.favorites.forEach(() => {
          this.cart_specs.push('')
        })
      } catch (err) {
        this.userToast('error', err.response.data.message)
      }
    },
    updateFavorite (product) {
      const favoriteId = this.favorites.findIndex((item) => {
        return item.id === product.id
      })
      if (favoriteId < 0) {
        this.favorites.push(product)
        localStorage.setItem(
          'favorites',
          JSON.stringify(this.favorites.map((item) => item.id))
        )
        this.userToast('success', '已將商品加入收藏')
        // 新增 favorite product spec
        this.cart_specs.push('')
      } else {
        this.favorites.splice(favoriteId, 1)
        localStorage.setItem(
          'favorites',
          JSON.stringify(this.favorites.map((item) => item.id))
        )
        this.userToast('success', '已將商品移除收藏')
        // 將 favorite product spec 刪除
        this.cart_specs.splice(favoriteId, 1)
      }
    }
  },
  getters: {}
})
