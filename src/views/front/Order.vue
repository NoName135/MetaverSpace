<template>
  <div class="mt-nav">
    <div class="container px-2 md:px-0 pt-8">
      <div class="border-2 rounded-lg overflow-hidden">
        <h1 class="p-4 bg-black/50 text-xl font-bold border-b-2">交易記錄</h1>
        <div class="px-8">
          <div class="py-8 flex justify-center">
            <VForm
              class="w-96"
              ref="form"
              v-slot="{ errors }"
              @submit="getOrders"
            >
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-white"
                  >姓名</label
                >
                <VField
                  type="text"
                  id="name"
                  name="姓名"
                  class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
                  :class="{ 'border-warm': errors['姓名'] }"
                  rules="required"
                  placeholder="請輸入姓名"
                  required
                />
                <ErrorMessage
                  name="姓名"
                  class="text-warm text-sm"
                ></ErrorMessage>
              </div>
              <div class="mt-8">
                <label
                  for="phoneOrEmail"
                  class="block mb-2 text-sm font-medium text-white"
                  >電話或Email</label
                >
                <VField
                  type="text"
                  id="name"
                  name="電話或Email"
                  class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
                  :class="{ 'border-warm': errors['電話或Email'] }"
                  rules="required"
                  placeholder="請輸入電話或Email"
                  required
                />
                <ErrorMessage
                  name="電話或Email"
                  class="text-warm text-sm"
                ></ErrorMessage>
              </div>
              <button
                type="submit"
                class="mt-12 primary-button w-full relative"
                :disabled="searchLoading"
              >
                <svg
                  v-if="searchLoading"
                  class="animate-spin h-5 w-5 mr-3 text-white absolute"
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
                訂單查詢
              </button>
            </VForm>
          </div>
        </div>
      </div>
      <div
        class="my-20 border-b border-2"
        v-if="Object.keys(orders).length"
      ></div>
      <OrderDetail
        :orders="filterOrders"
        v-if="Object.keys(orders).length"
      ></OrderDetail>
    </div>
  </div>
  <ScrollTop />
</template>

<script>
import OrderDetail from '@/components/OrderDetail.vue'

import swalMixin from '@/mixins/swal.js'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  mixins: [swalMixin],
  data () {
    return {
      searchLoading: false,
      orders: {},
      filterOrders: {}
    }
  },
  methods: {
    getOrders (values) {
      const name = values['姓名'].trim()
      const info = values['電話或Email'].trim()

      this.searchLoading = true
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/orders`)
        .then((res) => {
          // console.log(res.data);
          this.orders = res.data.orders
          this.filterOrders = this.orders.filter((item) => {
            return (
              item.user.name === name &&
              (item.user.email === info || item.user.tel === info)
            )
          })
          this.searchLoading = false
        })
        .catch((err) => {
          this.searchLoading = false
          // Swal
          this.userToast('error', err.response.data.message)
        })
    }
  },
  components: {
    OrderDetail
  }
}
</script>
