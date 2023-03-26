<template>
  <!-- product table -->
  <div class="mt-8 px-6">
    <button
      type="button"
      class="admin-primary-button"
      @click="productModal.show()"
    >
      新增商品
    </button>
    <div class="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-md text-left text-gray-700">
        <thead class="text-sm text-dark uppercase bg-gray-300">
          <tr>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">上架</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">類別</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">品牌</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">商品名稱</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">原價</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">售價</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">
              <span class="sr-only">選項</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-teal-100">
            <td class="px-6 font-medium whitespace-nowrap">
              <div class="w-9">
                <label class="relative cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div
                    class="w-full h-5 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-300 peer-checked:bg-teal-600"
                  ></div>
                </label>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">VR</td>
            <td class="px-6 py-4 whitespace-nowrap">Meta</td>
            <td class="px-6 py-4 whitespace-nowrap">Oculus Quest 2 256G</td>
            <td class="px-6 py-4 whitespace-nowrap">NT$ 17,980</td>
            <td class="px-6 py-4 whitespace-nowrap">NT$ 17,500</td>
            <td
              class="px-6 py-4 whitespace-nowrap flex justify-center space-x-6"
            >
              <button
                type="button"
                class="admin-secondary-button px-3.5 py-1.5"
              >
                編輯
              </button>
              <button type="button" class="admin-delete-button px-3.5 py-1.5">
                刪除
              </button>
            </td>
          </tr>
          <tr class="bg-white border-b hover:bg-teal-100">
            <td class="px-6 font-medium whitespace-nowrap">
              <div class="w-9">
                <label class="relative cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div
                    class="w-full h-5 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-300 peer-checked:bg-teal-600"
                  ></div>
                </label>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">XR</td>
            <td class="px-6 py-4 whitespace-nowrap">VIVE</td>
            <td class="px-6 py-4 whitespace-nowrap">XR ELITE</td>
            <td class="px-6 py-4 whitespace-nowrap">NT$ 34,900</td>
            <td class="px-6 py-4 whitespace-nowrap">NT$ 34,300</td>
            <td
              class="px-6 py-4 whitespace-nowrap flex justify-center space-x-6"
            >
              <button
                type="button"
                class="admin-secondary-button px-3.5 py-1.5"
              >
                編輯
              </button>
              <button type="button" class="admin-delete-button px-3.5 py-1.5">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination class="mt-8" />
  </div>
  <!-- Product modal -->
  <div
    ref="productModal"
    id="productModal"
    tabindex="-1"
    class="hidden fixed z-40 w-full px-4 overflow-x-hidden overflow-y-auto top-28 left-0 right-0 h-auto"
  >
    <div class="w-full max-w-7xl h-full max-h-[calc(100vh-8.5rem)]">
      <!-- Modal content -->
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b bg-black top-[6rem] w-[calc(100%-2rem)] max-w-7xl z-50 rounded-t-lg fixed"
        >
          <h3 class="text-xl font-semibold text-gray-300">編輯商品</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            @click="productModal.hide()"
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
        <div class="p-6 grid grid-cols-3 gap-6 mt-12">
          <div class="col-span-1">
            <h3 class="font-medium">主要圖片 (輸入網址或上傳圖片)</h3>
            <div class="relative mt-4">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="mainImgLink"
                class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-teal-500 focus:border-teal-500"
                placeholder="請輸入圖片網址"
              />
            </div>
            <button
              type="button"
              class="mt-4 admin-secondary-solid-button w-full"
            >
              上傳圖片
            </button>
            <img
              src="@/images/products/Meta_Oculus_Quest2.jpg"
              class="mt-4 w-full h-80 object-cover object-center"
            />
            <div class="mt-8 space-y-4">
              <h3 class="font-medium">多圖新增 (輸入網址或上傳圖片)</h3>
              <div class="relative mt-4">
                <div
                  class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="mainImgLink"
                  class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="請輸入圖片網址"
                />
              </div>
              <button
                type="button"
                class="mt-4 admin-secondary-solid-button w-full"
              >
                上傳圖片
              </button>
              <img
                src="@/images/products/Meta_Oculus_Quest2.jpg"
                class="mt-4 w-full h-80 object-cover object-center"
              />
              <button type="button" class="mt-4 admin-secondary-button w-full">
                新增圖片
              </button>
              <button type="button" class="mt-4 admin-delete-button w-full">
                刪除圖片
              </button>
            </div>
          </div>
          <div class="col-span-2 space-y-6">
            <div>
              <label for="name" class="block mb-2 font-medium">商品名稱</label>
              <input
                type="text"
                id="name"
                class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                required
              />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="brand" class="block mb-2 font-medium">品牌</label>
                <input
                  type="text"
                  id="brand"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label for="category" class="block mb-2 font-medium"
                  >類別 (配件請輸入 Other)</label
                >
                <input
                  type="text"
                  id="category"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="origin_price" class="block mb-2 font-medium"
                  >原價</label
                >
                <input
                  type="number"
                  id="origin_price"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <label for="price" class="block mb-2 font-medium">售價</label>
                <input
                  type="number"
                  id="price"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div>
              <label for="spec" class="font-medium">商品規格</label>
              <div class="grid grid-cols-6 gap-1 mt-2">
                <div class="relative" v-for="(label, key) in spec" :key="key">
                  <div class="border rounded">
                    <input
                      type="text"
                      class="w-[calc(100%-1.9rem)] rounded-l-lg text-sm border-gray-300 focus:ring-violet-300"
                      id="spec"
                      v-model="spec[key]"
                      placeholder="請輸入規格"
                    />
                    <button
                      type="button"
                      class="absolute w-8 top-0 right-0 px-3 py-2 admin-delete-solid-button rounded-l-none rounded-r-lg border text-sm"
                      @click="spec.splice(key, 1)"
                    >
                      <font-awesome-icon :icon="['fas', 'xmark']" />
                    </button>
                  </div>
                </div>
                <div v-if="!spec?.length || spec[spec.length - 1]">
                  <button
                    type="button"
                    class="admin-secondary-solid-button w-full py-2"
                    @click="spec.push('')"
                  >
                    新增規格
                  </button>
                </div>
              </div>
            </div>
            <div>
              <label class="typo__label">搭配的商品或配件</label>
              <multiselect
                v-model="multiselectValue"
                :placeholder="multiselectPlaceholder"
                label="name"
                track-by="id"
                :options="multiselectOptions"
                :multiple="true"
                :disabled="multiselectDisable"
                class="mt-2"
              ></multiselect>
            </div>
            <div>
              <label for="message" class="block mb-2 font-medium text-gray-900"
                >商品功能簡介</label
              >
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
              ></textarea>
            </div>
            <div>
              <label for="message" class="block mb-2 font-medium text-gray-900"
                >商品詳細內容</label
              >
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
              ></textarea>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"
                  ></div>
                  <span class="ml-3 text-md font-medium text-gray-900"
                    >上架商品</span
                  >
                </label>
              </div>
              <div class="flex justify-end">
                <button type="button" class="admin-delete-button">取消</button>
                <button type="button" class="ml-6 admin-primary-button">
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
import Pagination from "@/components/AdminPagination.vue";
import { Modal } from "flowbite";

export default {
  data() {
    return {
      multiselectPlaceholder: "關鍵字搜尋", // disabled - 請先輸入品牌及類別
      multiselectDisable: false,
      multiselectValue: [],
      multiselectOptions: [
        { name: "Meta Quest 2 收納盒", id: "1" },
        { name: "Link 連接線", id: "2" },
        { name: "Meta Quest Pro 全方位遮光罩", id: "3" },
      ],
      spec: [],
    };
  },
  mounted() {
    // modal options
    const modalOptions = {
      placement: "center",
      backdrop: "static",
      backdropClasses: "bg-black bg-opacity-80 fixed inset-0 z-30",
      closable: true,
    };
    this.productModal = new Modal(this.$refs.productModal, modalOptions);
  },
  components: {
    Pagination,
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
<style>
.typo__label {
  font-weight: 500;
}
.multiselect__tags {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}
.multiselect--active:not(.multiselect--above) .multiselect__current,
.multiselect--active:not(.multiselect--above) .multiselect__input,
.multiselect--active:not(.multiselect--above) .multiselect__tags {
  border-radius: 3px;
  border-radius: 3px;
  border-color: teal;
}
[type="text"]:focus,
[type="email"]:focus,
[type="url"]:focus,
[type="password"]:focus,
[type="number"]:focus,
[type="date"]:focus,
[type="datetime-local"]:focus,
[type="month"]:focus,
[type="search"]:focus,
[type="tel"]:focus,
[type="time"]:focus,
[type="week"]:focus,
[multiple]:focus,
textarea:focus,
select:focus {
  --tw-ring-color: transparent;
}
.multiselect {
  border-radius: 0.5rem /* 8px */;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}
.multiselect__placeholder {
  color: #6b7285;
}
.multiselect--disabled {
  opacity: 1;
}
</style>
