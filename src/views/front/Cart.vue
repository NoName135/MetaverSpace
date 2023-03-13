<template>
  <div class="mt-nav">
    <div class="container px-2 md:px-0 pt-8">
      <div class="border-2 rounded-lg overflow-hidden">
        <h1 class="p-4 bg-black/50 text-2xl font-bold border-b-2">
          我的購物車
        </h1>
        <div class="px-8">
          <div class="py-6 flex justify-between">
            <button
              type="button"
              class="w-18 md:w-20 lg:w-24 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-secondary hover:bg-secondary2 focus:ring-secondary3"
            >
              全選
            </button>
            <button
              type="button"
              class="ml-2 dark-solid-button"
              @click="favoriteModal.show()"
            >
              收藏清單
            </button>
          </div>
          <!-- 購物車商品 -->
          <div class="py-8 grid grid-cols-12 md:gap-6 border-t">
            <input
              id="check1"
              type="checkbox"
              value=""
              class="col-span-1 flex justify-self-center self-center w-5 h-5 sm:w-6 sm:h-6 text-primary rounded focus:ring-primary ring-offset-gray-800 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <img
              src="@/images/products/Meta_Oculus_Quest2.jpg"
              alt=""
              class="col-span-2 hidden md:block w-full h-28 lg:h-36 object-cover rounded"
            />
            <div
              class="col-span-full md:col-span-9 flex flex-col justify-between mt-4 md:mt-0"
            >
              <div>
                <div class="flex justify-between items-center">
                  <h2 class="text-lg lg:text-xl">Meta</h2>
                  <font-awesome-icon
                    :icon="['fas', 'trash-can']"
                    class="text-xl lg:text-2xl hover:text-warm cursor-pointer"
                  />
                </div>
                <h3 class="text-xl lg:text-2xl mt-4 lg:mt-6">
                  Oculus Quest 2 256G
                </h3>
              </div>
              <div class="md:flex justify-between items-end mt-6">
                <div class="flex flex-col sm:flex-row justify-between">
                  <select
                    id="spec1"
                    class="border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                  >
                    <option selected disabled>選擇規格</option>
                    <option value="黑色">黑色</option>
                    <option value="白色">白色</option>
                  </select>
                  <select
                    id="accessoryNum3"
                    class="mt-2 sm:mt-0 md:ml-2 border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                  >
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <h5 class="text-end mt-4 md:mt-0 text-lg lg:text-xl">
                  總計：<span class="font-bold">NT$ 34,300</span>
                </h5>
              </div>
            </div>
          </div>
          <div class="py-8 grid grid-cols-12 md:gap-6 border-t">
            <input
              id="check1"
              type="checkbox"
              value=""
              class="col-span-1 flex justify-self-center self-center w-5 h-5 sm:w-6 sm:h-6 text-primary rounded focus:ring-primary ring-offset-gray-800 focus:ring-2 bg-gray-600 border-gray-500"
            />
            <img
              src="@/images/products/VIVE_XR_ELITE.jpg"
              alt=""
              class="col-span-2 hidden md:block w-full h-28 lg:h-36 object-cover rounded"
            />
            <div
              class="col-span-full md:col-span-9 flex flex-col justify-between mt-4 md:mt-0"
            >
              <div>
                <div class="flex justify-between items-center">
                  <h2 class="text-lg lg:text-xl">VIVE</h2>
                  <font-awesome-icon
                    :icon="['fas', 'trash-can']"
                    class="text-xl lg:text-2xl hover:text-warm cursor-pointer"
                  />
                </div>
                <h3 class="text-xl lg:text-2xl mt-4 lg:mt-6">XR_ELITE</h3>
              </div>
              <div class="md:flex justify-between items-end mt-6">
                <div class="flex flex-col sm:flex-row justify-between">
                  <select
                    id="spec1"
                    class="border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                  >
                    <option selected disabled>選擇規格</option>
                    <option value="黑色">黑色</option>
                    <option value="白色">白色</option>
                  </select>
                  <select
                    id="accessoryNum3"
                    class="mt-2 sm:mt-0 md:ml-2 border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                  >
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <h5 class="text-end mt-4 md:mt-0 text-lg lg:text-xl">
                  總計：<span class="font-bold">NT$ 34,300</span>
                </h5>
              </div>
            </div>
          </div>
          <!-- 結帳金額區塊 -->
          <div class="flex flex-col items-end py-6 border-t">
            <h4 class="mt-4 xs:mt-0 xs:ml-4 text-lg lg:text-xl text-end">
              結帳小計：<span class="font-bold whitespace-nowrap"
                >NT$ 51,800</span
              >
            </h4>
            <div class="mt-4 flex items-center">
              <input
                type="text"
                placeholder="請輸入優惠碼"
                class="border text-sm rounded block w-28 sm:w-36 p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-secondary focus:border-secondary"
              />
              <button
                type="button"
                class="ml-2 w-18 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-secondary hover:bg-secondary2 focus:ring-secondary3"
              >
                套用
              </button>
            </div>
            <h5 class="mt-4 text-warm text-lg lg:text-xl">
              折扣：<span class="font-bold">NT$ 1,000</span>
            </h5>
            <h3 class="mt-4 text-primary0 text-xl lg:text-2xl text-end">
              總金額：<span class="font-bold whitespace-nowrap"
                >NT$ 51,800</span
              >
            </h3>
            <router-link :to="{ name: '結帳' }" class="mt-8 primary-button"
              >前往結帳</router-link
            >
          </div>
        </div>
      </div>
      <!-- Product modal -->
      <div
        ref="favoriteModal"
        id="favoriteModal"
        data-modal-backdrop="static"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
      >
        <div class="relative w-full h-full max-w-2xl">
          <!-- Modal content -->
          <div class="relative rounded-lg shadow bg-dark">
            <!-- Modal header -->
            <div
              class="flex items-start justify-between p-4 border-b rounded-t border-gray-600 bg-white/10"
            >
              <h3 class="text-lg md:text-xl font-semibold text-white">
                請選擇商品加入購物車
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
                @click="favoriteModal.hide()"
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
            <div class="px-4">
              <div class="py-8 grid grid-cols-4 gap-6">
                <img
                  src="@/images/products/Meta_Oculus_Quest2.jpg"
                  alt=""
                  class="hidden md:flex self-center w-full h-28 object-cover rounded"
                />
                <div
                  class="col-span-full md:col-span-3 flex flex-col justify-between"
                >
                  <div>
                    <div class="flex justify-between items-center">
                      <h2 class="text-lg lg:text-xl">Meta</h2>
                      <select
                        id="spec1"
                        class="border text-xs rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                      >
                        <option selected disabled>選擇規格</option>
                        <option value="黑色">黑色</option>
                        <option value="白色">白色</option>
                      </select>
                    </div>
                    <h3 class="text-xl lg:text-2xl mt-4">
                      Oculus Quest 2 256G
                    </h3>
                  </div>
                  <div>
                    <div class="xs:flex justify-between items-end mt-4 md:mt-0">
                      <h5 class="text-lg lg:text-xl">
                        售價：<span class="font-bold">NT$ 17,500</span>
                      </h5>
                      <button
                        type="button"
                        class="mt-4 xs:mt-1 primary-button md:ml-3"
                      >
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="py-8 grid grid-cols-4 gap-6 border-t">
                <img
                  src="@/images/products/VIVE_XR_ELITE.jpg"
                  alt=""
                  class="hidden md:flex self-center w-full h-20 md:h-28 object-cover rounded"
                />
                <div
                  class="col-span-full md:col-span-3 flex flex-col justify-between"
                >
                  <div>
                    <div class="flex justify-between items-center">
                      <h2 class="text-lg lg:text-xl">VIVE</h2>
                      <select
                        id="spec1"
                        class="border text-xs rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                      >
                        <option selected disabled>選擇規格</option>
                        <option value="黑色">黑色</option>
                        <option value="白色">白色</option>
                      </select>
                    </div>
                    <h3 class="text-xl lg:text-2xl mt-4">XR_ELITE</h3>
                  </div>
                  <div>
                    <div class="xs:flex justify-between items-end mt-4 md:mt-0">
                      <h5 class="text-lg lg:text-xl">
                        售價：<span class="font-bold">NT$ 34,300</span>
                      </h5>
                      <button
                        type="button"
                        class="mt-4 xs:mt-1 primary-button md:ml-3"
                      >
                        加入購物車
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import flowbite components
import { Modal } from "flowbite";

export default {
  mounted() {
    // modal options
    const modalOptions = {
      placement: "top-center",
      backdrop: "static",
      backdropClasses: "bg-black bg-opacity-80 fixed inset-0 z-40",
      closable: true,
    };
    this.favoriteModal = new Modal(this.$refs.favoriteModal, modalOptions);
  },
};
</script>
