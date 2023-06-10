<template>
  <div>
    <div class="grid grid-cols-3 gap-6">
      <!-- 訂單內容區塊 -->
      <div class="col-span-full lg:col-span-2 lg:mt-8">
        <section class="border-2 rounded-lg overflow-hidden">
          <h1 class="p-4 bg-black/50 text-xl font-bold border-b-2">訂單內容</h1>
          <div class="px-8">
            <div
              v-for="(item, i) in cart.carts"
              :key="item.id"
              class="py-8 grid grid-cols-5 gap-6"
              :class="{ 'border-t': i > 0 }"
            >
              <img
                :src="item.product.imageUrl"
                :alt="item.product.title"
                class="hidden md:flex w-full h-24 xl:h-32 object-cover rounded bg-white"
              />
              <div
                class="col-span-full md:col-span-4 flex flex-col justify-between"
              >
                <h2 class="text-md xl:text-lg">{{ item.product.brand }}</h2>
                <h3 class="text-lg xl:text-xl font-bold mt-2 lg:mt-3">
                  {{ item.product.title }}
                </h3>
                <div
                  class="flex items-start sm:items-center mt-4 text-md xl:text-lg"
                  v-for="spec in item.cart_spec"
                  :key="spec.title"
                >
                  <div class="flex flex-col sm:flex-row justify-between">
                    規格：{{ spec.title }}
                    <div class="flex mt-1 sm:mt-0 sm:ml-4">
                      數量：{{ spec.qty }}
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-col sm:flex-row justify-between items-center"
                >
                  <div
                    class="flex items-center self-start mt-4"
                    v-if="!item.cart_spec"
                  >
                    <span class="text-md lg:text-lg">數量：{{ item.qty }}</span>
                  </div>
                  <div v-else></div>
                  <h5 class="self-end text-lg lg:text-xl mt-4">
                    總計：<span class="font-bold"
                      >NT$ {{ $filters.currency(item.total) }}</span
                    >
                  </h5>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-end py-6 border-t">
              <h4 class="mt-4 xs:mt-0 xs:ml-4 text-lg xl:text-xl text-end">
                結帳小計：<span class="font-bold whitespace-nowrap"
                  >NT$ {{ $filters.currency(cart.total) }}</span
                >
              </h4>
              <h5
                class="mt-4 text-warm text-lg lg:text-xl"
                v-if="cart.total - cart.final_total > 0"
              >
                折扣：<span class="font-bold"
                  >NT$
                  {{
                    $filters.currency(Math.ceil(cart.total - cart.final_total))
                  }}</span
                >
              </h5>
              <h3 class="mt-4 text-primary0 text-xl lg:text-2xl text-end">
                總金額：<span class="font-bold whitespace-nowrap"
                  >NT$ {{ $filters.currency(cart.final_total) }}</span
                >
              </h3>
            </div>
          </div>
        </section>
      </div>
      <!-- 訂單資料區塊 -->
      <div class="col-span-full lg:col-span-1">
        <div class="lg:pt-8 sticky top-nav">
          <section class="border-2 rounded-lg overflow-hidden">
            <h1 class="p-4 bg-black/50 text-xl font-bold border-b-2">
              訂單資料
            </h1>
            <div class="px-8 py-8">
              <VForm ref="form" v-slot="{ errors }" @submit="createOrder">
                <div class="relative z-0 w-full mb-6 group">
                  <VField
                    type="text"
                    name="姓名"
                    id="name"
                    class="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer"
                    :class="{ 'border-warm': errors['姓名'] }"
                    rules="required"
                    placeholder=" "
                    required
                  />
                  <label
                    for="name"
                    class="text-primary peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:text-white peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >姓名</label
                  >
                  <ErrorMessage
                    name="姓名"
                    class="text-warm text-sm"
                  ></ErrorMessage>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <VField
                    type="tel"
                    name="電話"
                    id="phone"
                    class="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer"
                    :class="{ 'border-warm': errors['電話'] }"
                    rules="required|phone"
                    placeholder=" "
                    required
                  />
                  <label
                    for="phone"
                    class="text-primary peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:text-white peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >電話 (請輸入手機格式：09)</label
                  >
                  <ErrorMessage
                    name="電話"
                    class="text-warm text-sm"
                  ></ErrorMessage>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <VField
                    type="text"
                    name="地址"
                    id="address"
                    class="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer overflow-x-auto"
                    :class="{ 'border-warm': errors['地址'] }"
                    rules="required"
                    placeholder=" "
                    required
                  />
                  <label
                    for="address"
                    class="text-primary peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:text-white peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >地址</label
                  >
                  <ErrorMessage
                    name="地址"
                    class="text-warm text-sm"
                  ></ErrorMessage>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <VField
                    type="email"
                    name="email"
                    id="email"
                    class="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer"
                    :class="{ 'border-warm': errors['email'] }"
                    rules="required|email"
                    placeholder=" "
                    required
                  />
                  <label
                    for="email"
                    class="text-primary peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:text-white peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >Email</label
                  >
                  <ErrorMessage
                    name="email"
                    class="text-warm text-sm"
                  ></ErrorMessage>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <VField
                    id="paySelect"
                    as="select"
                    name="付款方式"
                    class="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:outline-none focus:ring-0 focus:border-primary peer"
                    :class="{ 'border-warm': errors['付款方式'] }"
                    rules="required"
                  >
                    <option
                      selected
                      disabled
                      value=""
                      class="text-white bg-gray-700"
                    >
                      -- 請選擇付款方式 --
                    </option>
                    <option class="text-white bg-gray-700" value="信用卡">
                      信用卡
                    </option>
                    <option class="text-white bg-gray-700" value="銀行轉帳">
                      銀行轉帳
                    </option>
                    <option class="text-white bg-gray-700" value="行動支付">
                      行動支付
                    </option>
                  </VField>
                  <label
                    for="paySelect"
                    class="text-primary peer-focus:font-medium absolute text-md duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:text-white peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >付款方式</label
                  >
                  <ErrorMessage
                    name="付款方式"
                    class="text-warm text-sm"
                  ></ErrorMessage>
                </div>
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-primary"
                  >備註</label
                >
                <VField
                  id="message"
                  as="textarea"
                  name="留言"
                  rows="4"
                  class="block p-2.5 w-full mb-6 text-md rounded-lg border bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
                  placeholder="請輸入備註內容"
                ></VField>
                <div class="mb-4">
                  <div class="flex items-center">
                    <VField
                      id="agreeCheck"
                      type="checkbox"
                      name="同意"
                      :value="true"
                      class="w-4 h-4 text-primary rounded focus:ring-primary ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                      :class="{ 'border-warm': errors['同意'] }"
                      rules="agree"
                    />
                    <label
                      for="agreeCheck"
                      class="ml-2 text-sm font-medium text-gray-300"
                      >我已詳閱並同意此網站約定條款</label
                    >
                  </div>
                  <ErrorMessage
                    name="同意"
                    class="text-warm text-sm ml-6"
                  ></ErrorMessage>
                </div>
                <button type="submit" class="w-full primary-button">
                  送出訂單
                </button>
              </VForm>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loadingStore from '@/stores/loadingStore.js'
import cartStore from '@/stores/cartStore.js'
import { mapActions, mapState } from 'pinia'

import swalMixin from '@/mixins/swal.js'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  emits: ['emit-step'],
  mixins: [swalMixin],
  data () {
    return {}
  },
  methods: {
    createOrder (values) {
      this.loadings.fullLoading = true
      this.$http
        .post(`${VITE_API}/api/${VITE_PATH}/order`, {
          data: {
            user: {
              name: values['姓名'].trim(),
              email: values.email,
              tel: values['電話'],
              address: values['地址'].trim(),
              pay: values['付款方式']
            },
            message: values['留言']
          }
        })
        .then((res) => {
          // console.log(res.data)
          // this.$refs.form.resetForm();
          this.loadings.fullLoading = false
          this.getCart()
          // Swal
          this.userToast('success', res.data.message)
          this.$router.replace(`/checkout/check/${res.data.orderId}`)
        })
        .catch((err) => {
          this.loadings.fullLoading = false
          // Swal
          this.userToast('error', err.response.data.message)
        })
    },
    ...mapActions(cartStore, ['getCart'])
  },
  computed: {
    ...mapState(loadingStore, ['loadings']),
    ...mapState(cartStore, ['cart'])
  },
  mounted () {
    this.$emit('emit-step', 1)
  }
}
</script>
