<template>
  <div class="bg-dark text-white main-height-full" @click="hideNavCollapse">
    <div class="main-area">
      <Navbar ref="navbar" />
      <main>
        <RouterView />
      </main>
    </div>
    <footer
      class="bg-black/50 mt-8"
      v-if="!loadings.fullLoading && loadings.opacity !== 1"
    >
      <section class="py-20 px-2 lg:px-40">
        <div class="container grid grid-cols-1 sm:grid-cols-3 gap-14">
          <div>
            <h3 class="text-2xl font-bold">商品專區</h3>
            <div class="grid grid-cols-1 gap-2 mt-6">
              <div>
                <RouterLink
                  :to="{ name: '商品列表', query: { category: 'AR' } }"
                  class="hover:underline"
                >
                  擴增實境 (AR)
                </RouterLink>
              </div>
              <div>
                <RouterLink
                  :to="{ name: '商品列表', query: { category: 'MR' } }"
                  class="hover:underline"
                  >混合實境 (MR)
                </RouterLink>
              </div>
              <div>
                <RouterLink
                  :to="{ name: '商品列表', query: { category: 'VR' } }"
                  class="hover:underline"
                  >虛擬實境 (VR)
                </RouterLink>
              </div>
              <div>
                <RouterLink
                  :to="{ name: '商品列表', query: { category: 'XR' } }"
                  class="hover:underline"
                  >延展實境 (XR)
                </RouterLink>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold">記錄查詢</h3>
            <div class="grid grid-cols-1 gap-2 mt-6">
              <div>
                <RouterLink to="./order" class="hover:underline"
                  >交易記錄</RouterLink
                >
              </div>
              <div>
                <RouterLink to="./reserve" class="hover:underline"
                  >預約記錄</RouterLink
                >
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-2xl font-bold">聯絡我們</h3>
            <div class="grid grid-cols-1 gap-2 mt-6">
              <div>
                <RouterLink
                  to="/contact"
                  target="_blank"
                  class="hover:underline"
                  >留言板
                </RouterLink>
              </div>
              <div class="whitespace-nowrap">
                <FontAwesomeIcon :icon="['fas', 'phone']" class="mr-2" />
                <a href="tel:+0123456789">(01) 2345 6789</a>
              </div>
              <div class="mr-6 md:mr-0">
                <FontAwesomeIcon
                  :icon="['fab', 'facebook']"
                  class="cursor-pointer text-3xl mr-2"
                />
                <FontAwesomeIcon
                  :icon="['fab', 'instagram']"
                  class="cursor-pointer text-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="flex justify-center items-center bg-black py-6">
        <p class="mx-6">Copyright © 2023 Ezekiel Lin. All Rights Reserved</p>
        <!-- <RouterLink
          to="/admin/products"
          class="dark-solid-button"
          target="_blank"
          >開啟後台
        </RouterLink> -->
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '../components/UserNavbar.vue'

import { mapState } from 'pinia'
import loadingStore from '@/stores/loadingStore.js'

export default {
  methods: {
    hideNavCollapse () {
      this.$refs.navbar.hideCollapse()
    }
  },
  computed: {
    ...mapState(loadingStore, ['loadings'])
  },
  components: {
    Navbar
  }
}
</script>

<style>
/* main min-height 100vh */
.main-height-full {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-area {
  flex: 1;
}
</style>
