<template>
  <div class="mt-nav">
    <div class="container px-2 md:px-0 pt-8">
      <div class="border-2 rounded-lg overflow-hidden">
        <h1 class="p-4 bg-black/50 text-2xl font-bold border-b-2">收藏清單</h1>
        <div class="px-8">
          <div class="py-8 grid grid-cols-5 gap-6">
            <img
              src="@/images/products/Meta_Oculus_Quest2.jpg"
              alt=""
              class="hidden md:flex self-center w-full h-28 lg:h-32 xl:h-40 object-cover rounded"
            />
            <div
              class="col-span-full md:col-span-4 flex flex-col justify-between"
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
              <div>
                <div class="md:flex justify-between items-center mt-4">
                  <h5 class="text-lg lg:text-xl">
                    售價：<span class="font-bold">NT$ 17,500</span>
                  </h5>
                  <div
                    class="flex flex-col xs:flex-row justify-between md:justify-start mt-4 md:mt-1"
                  >
                    <select
                      id="spec1"
                      class="border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                    >
                      <option selected disabled>選擇規格</option>
                      <option value="黑色">黑色</option>
                      <option value="白色">白色</option>
                    </select>
                    <button
                      type="button"
                      class="mt-4 xs:mt-0 primary-button md:ml-3"
                    >
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-8 grid grid-cols-5 gap-6 border-t">
            <img
              src="@/images/products/VIVE_XR_ELITE.jpg"
              alt=""
              class="hidden md:flex self-center w-full h-28 lg:h-32 xl:h-40 object-cover rounded"
            />
            <div
              class="col-span-full md:col-span-4 flex flex-col justify-between"
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
              <div>
                <div class="md:flex justify-between items-center mt-4">
                  <h5 class="text-lg lg:text-xl">
                    售價：<span class="font-bold">NT$ 34,300</span>
                  </h5>
                  <div
                    class="flex flex-col xs:flex-row justify-between md:justify-start mt-4 md:mt-1"
                  >
                    <select
                      id="spec1"
                      class="border text-sm rounded p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
                    >
                      <option selected disabled>選擇規格</option>
                      <option value="黑色">黑色</option>
                      <option value="白色">白色</option>
                    </select>
                    <button
                      type="button"
                      class="mt-4 xs:mt-0 primary-button md:ml-3"
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
      <!-- 頁碼 -->
      <div class="mt-8 flex justify-center">
        <Pagination></Pagination>
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Pagination,
  },
};
</script>
