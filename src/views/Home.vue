<template>
  <div class="bg-dark text-white main-height-full" @click="hideNavCollapse">
    <div class="main-area">
      <Navbar ref="navbar" />
      <main>
        <router-view></router-view>
      </main>
    </div>
    <footer
      class="bg-black/50 mt-8"
      v-if="!loadings.fullLoading && loadings.opacity !== 1"
    >
      <section class="py-24 px-2 lg:px-40">
        <div class="container grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <h3 class="text-3xl font-bold">商品專區</h3>
            <div class="grid grid-cols-2 gap-2 mt-6">
              <div>
                <a href="#" class="hover:underline">擴增實境 (AR)</a>
              </div>
              <div>
                <a href="#" class="hover:underline">混合實境 (MR)</a>
              </div>
              <div>
                <a href="#" class="hover:underline">虛擬實境 (VR)</a>
              </div>
              <div>
                <a href="#" class="hover:underline">延展實境 (XR)</a>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-3xl font-bold">記錄查詢</h3>
            <div class="grid grid-cols-1 gap-2 mt-6">
              <div>
                <a href="#" class="hover:underline">交易記錄</a>
              </div>
              <div>
                <a href="#" class="hover:underline">預約記錄</a>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-3xl font-bold">聯絡我們</h3>
            <div class="grid grid-cols-2 gap-2 mt-6">
              <div class="col-span-2">
                <router-link
                  to="/contact"
                  target="_blank"
                  class="hover:underline"
                  >留言板</router-link
                >
              </div>
              <div class="whitespace-nowrap">
                <font-awesome-icon :icon="['fas', 'phone']" class="mr-2" />
                <span>(01) 2345 6789</span>
              </div>
              <div class="flex items-center justify-end mr-6 md:mr-0">
                <font-awesome-icon
                  :icon="['fab', 'facebook']"
                  class="cursor-pointer text-3xl mr-2"
                />
                <font-awesome-icon
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
        <router-link
          to="/admin/products"
          class="dark-solid-button"
          target="_blank"
          >開啟後台</router-link
        >
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

import { mapState } from "pinia";
import loadingStore from "@/stores/loadingStore.js";

export default {
  methods: {
    hideNavCollapse() {
      this.$refs.navbar.hideCollapse();
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
  components: {
    Navbar,
  },
};
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
