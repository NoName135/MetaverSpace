<template>
  <!-- article modal -->
  <div
    ref="couponModal"
    id="couponModal"
    tabindex="-1"
    class="hidden fixed z-40 w-full px-4 overflow-x-hidden overflow-y-auto top-28 left-0 right-0 h-auto"
  >
    <div class="w-full max-w-xl h-full max-h-[calc(100vh-8.5rem)]">
      <!-- Modal content -->
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b bg-black top-[6rem] w-[calc(100%-2rem)] max-w-xl z-50 rounded-t-lg fixed"
        >
          <h3 class="text-xl font-semibold text-gray-300">編輯優惠券</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            @click="couponModal.hide()"
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
          <div class="w-full max-w-md mx-auto space-y-6">
            <div>
              <label for="name" class="block mb-2 font-medium"
                >優惠券名稱<span class="font-bold text-rose-500">*</span></label
              >
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                required
                v-model="tempCoupon.title"
              />
            </div>
            <div>
              <label for="coupon" class="block mb-2 font-medium"
                >折扣碼<span class="font-bold text-rose-500">*</span></label
              >
              <input
                type="text"
                id="coupon"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                required
                v-model="tempCoupon.code"
              />
            </div>
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-2">
                <label for="date" class="block mb-2 font-medium"
                  >到期日<span class="font-bold text-rose-500">*</span></label
                >
                <input
                  type="date"
                  id="date"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                  required
                  onkeypress="return false"
                  v-model="dueDate"
                />
              </div>
              <div>
                <label for="percent" class="block mb-2 font-medium"
                  >折扣百分比<span class="font-bold text-rose-500"
                    >*</span
                  ></label
                >
                <div class="flex justify-between items-center">
                  <input
                    type="number"
                    id="percent"
                    class="text-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                    min="1"
                    max="99"
                    placeholder="請輸入 1 ~ 99"
                    required
                    v-model="tempCoupon.percent"
                  />
                  <span class="ml-2">%</span>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="sr-only peer"
                    :true-value="1"
                    :false-value="0"
                    :checked="tempCoupon.is_enabled"
                    v-model="tempCoupon.is_enabled"
                  />
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"
                  ></div>
                  <span class="ml-3 text-md font-medium text-gray-900">{{
                    tempCoupon.is_enabled ? "已啟用" : "未啟用"
                  }}</span>
                </label>
              </div>
              <div class="flex justify-end">
                <button
                  type="button"
                  class="admin-delete-button"
                  @click="couponModal.hide()"
                >
                  取消
                </button>
                <button
                  type="button"
                  class="ml-6 admin-primary-button"
                  :disabled="
                    !tempCoupon.title ||
                    !tempCoupon.code ||
                    !tempCoupon.due_date ||
                    !tempCoupon.percent
                  "
                  :title="[
                    !tempCoupon.title ||
                    !tempCoupon.code ||
                    !tempCoupon.due_date ||
                    !tempCoupon.percent
                      ? '&quot;*&quot;號為必填欄位'
                      : '',
                  ]"
                  @click="updateCoupon()"
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
import { Modal } from 'flowbite'

import { mapState } from 'pinia'
import loadingStore from '@/stores/loadingStore.js'

import swalMixin from '@/mixins/swal.js'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  props: ['page'],
  mixins: [swalMixin],
  data () {
    return {
      isNew: true,
      tempCoupon: {},
      dueDate: ''
    }
  },
  methods: {
    openModal (type, item) {
      let timeStamp = new Date()
      if (type === 'new') {
        this.isNew = true
        this.tempCoupon = {
          is_enabled: 0
        }
        this.couponModal.show()
      } else {
        this.isNew = false
        this.tempCoupon = { ...item }
        timeStamp = new Date(this.tempCoupon.due_date * 1000)
        this.couponModal.show()
      }
      this.dueDate = `${timeStamp.getFullYear()}-${(
        '0' +
        (timeStamp.getMonth() + 1)
      ).slice(-2)}-${('0' + timeStamp.getDate()).slice(-2)}`

      // modal 移到最上方
      this.$refs.couponModal.scrollTop = 0
    },
    // 更新優惠券資料
    updateCoupon () {
      let httpVerb = 'post'
      let url = `${VITE_API}/api/${VITE_PATH}/admin/coupon`

      if (!this.isNew) {
        httpVerb = 'put'
        url = `${VITE_API}/api/${VITE_PATH}/admin/coupon/${this.tempCoupon.id}`
      }

      this.loadings.fullLoading = true
      this.$http[httpVerb](url, {
        data: this.tempCoupon
      })
        .then(() => {
          // console.log(res.data);
          this.$emit('updateCoupons', this.page, 'update')
          this.couponModal.hide()
        })
        .catch((err) => {
          // console.log(err);
          // Swal
          this.adminToast('error', err.response.data.message)
        })
    }
  },
  computed: {
    ...mapState(loadingStore, ['loadings'])
  },
  watch: {
    dueDate () {
      this.tempCoupon.due_date = Math.floor(new Date(this.dueDate) / 1000)
    },
    'tempCoupon.percent' () {
      if (this.tempCoupon.percent < 1 || this.tempCoupon.percent > 99) {
        this.tempCoupon.percent = null
      }
    }
  },
  mounted () {
    // modal options
    const modalOptions = {
      placement: 'center',
      backdrop: 'static',
      backdropClasses: 'bg-black bg-opacity-80 fixed inset-0 z-30',
      closable: true
    }
    this.couponModal = new Modal(this.$refs.couponModal, modalOptions)
  }
}
</script>
