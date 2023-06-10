<template>
  <!-- navbar -->
  <nav class="fixed top-0 z-50 w-full bg-dark border-b border-gray-700">
    <div class="px-6 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start text-white">
          <img
            src="@/assets/images/Logo.png"
            class="h-16 mr-3"
            alt="MetaverSpace"
          />
          <span class="self-center text-2xl font-bold whitespace-nowrap"
            >MetaverSpace</span
          >
          <RouterLink
            to="/products"
            class="ml-8 primary-solid-button"
            target="_blank"
            >開啟前台</RouterLink
          >
        </div>
        <button class="primary-button" @click="logout">登出</button>
      </div>
    </div>
  </nav>
  <div class="flex">
    <!-- sidebar -->
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-30 w-52 h-screen pt-28 transition-all border-r bg-gray-800 border-gray-700"
      :class="[sidebarHide ? '-translate-x-52' : ' translate-x-0']"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 pb-4 overflow-y-auto bg-gray-800">
        <ul class="space-y-4">
          <li>
            <RouterLink
              to="/admin/products"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white"
              :class="[
                target === 'products' ? 'bg-primary2' : 'hover:bg-gray-700',
              ]"
              @click="target = 'products'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                />
              </svg>
              <span class="ml-3">商品管理</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/admin/order"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white"
              :class="[
                target === 'order' ? 'bg-primary2' : 'hover:bg-gray-700',
              ]"
              @click="target = 'order'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                />
              </svg>
              <span class="ml-3">訂單管理</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/admin/article"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white"
              :class="[
                target === 'article' ? 'bg-primary2' : 'hover:bg-gray-700',
              ]"
              @click="target = 'article'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
              <span class="ml-3">文章管理</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/admin/reserve"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white"
              :class="[
                target === 'reserve' ? 'bg-primary2' : 'hover:bg-gray-700',
              ]"
              @click="target = 'reserve'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
              <span class="ml-3">預約管理</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/admin/coupon"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white"
              :class="[
                target === 'coupon' ? 'bg-primary2' : 'hover:bg-gray-700',
              ]"
              @click="target = 'coupon'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 6h.008v.008H6V6z"
                />
              </svg>
              <span class="ml-3">優惠券管理</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/admin/contact"
              class="flex items-center p-2 text-base font-normal rounded-lg text-white"
              :class="[
                target === 'contact' ? 'bg-primary2' : 'hover:bg-gray-700',
              ]"
              @click="target = 'contact'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>

              <span class="ml-3">留言板管理</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </aside>
    <main
      class="mt-[88px] w-full transition-all"
      :class="[sidebarHide ? 'ml-0' : ' ml-52']"
    >
      <div class="border-b border-dark">
        <button
          type="button"
          class="text-start transition-transform border-dark"
          :class="[sidebarHide ? ' rotate-180 border-l' : 'rotate-0 border-r']"
          @click="sidebarHide = !sidebarHide"
        >
          <FontAwesomeIcon
            :icon="['fas', 'arrow-left']"
            class="text-4xl p-3 text-gray-800"
          />
        </button>
      </div>
      <RouterView v-if="checkLogin" />
    </main>
  </div>
</template>

<script>
import swalMixin from '@/mixins/swal.js'

import loadingStore from '@/stores/loadingStore.js'
import { mapState } from 'pinia'

const { VITE_API } = import.meta.env

export default {
  mixins: [swalMixin],
  data () {
    return {
      checkLogin: false,
      sidebarHide: false,
      target: ''
    }
  },
  methods: {
    logout () {
      const api = `${VITE_API}/logout`
      this.loadings.fullLoading = true
      this.$http
        .post(api)
        .then(() => {
          document.cookie = `loginToken=;expires=${new Date()}`
          this.loadings.fullLoading = false
          this.$router.push('/login')
          // Swal
          this.adminToast('success', '已登出')
        })
        .catch((err) => {
          this.loadings.fullLoading = false
          // SWal
          this.adminToast('error', err.response.data.message)
        })
    }
  },
  mounted () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = `${token}`
    const api = `${VITE_API}/api/user/check`

    this.loadings.fullLoading = true
    this.$http
      .post(api)
      .then(() => {
        if (this.$route.fullPath === '/admin/products') {
          this.target = 'products'
        } else if (this.$route.fullPath === '/admin/order') {
          this.target = 'order'
        } else if (this.$route.fullPath === '/admin/article') {
          this.target = 'article'
        } else if (this.$route.fullPath === '/admin/reserve') {
          this.target = 'reserve'
        } else if (this.$route.fullPath === '/admin/coupon') {
          this.target = 'coupon'
        } else if (this.$route.fullPath === '/admin/contact') {
          this.target = 'contact'
        }

        this.loadings.fullLoading = false
        this.checkLogin = true
        // Swal
        this.adminToast('success', '登入成功')
      })
      .catch((err) => {
        this.loadings.fullLoading = false
        this.$router.push('/login')
        // Swal
        this.adminToast('error', err.response.data.message)
      })
  },
  computed: {
    ...mapState(loadingStore, ['loadings'])
  }
}
</script>
