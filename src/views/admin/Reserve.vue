<template>
  <!-- product table -->
  <div class="mt-8 px-6">
    <label for="district" class="block mb-2 text-md font-medium text-gray-900"
      >請選擇門市</label
    >
    <select
      id="district"
      class="w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2.5"
    >
      <option selected>全部門市</option>
      <option value="臺北">臺北館</option>
      <option value="臺中">臺中館</option>
      <option value="高雄">高雄館</option>
    </select>
    <div class="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-md text-left text-gray-700">
        <thead class="text-sm text-dark uppercase bg-gray-300">
          <tr>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">預約人</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">預約時間</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">人數</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">備註</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">
              <span class="sr-only">選項</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-teal-100">
            <td class="px-6 py-4 whitespace-nowrap">無名</td>
            <td class="px-6 py-4 whitespace-nowrap">2023/01/29 15:00</td>
            <td class="px-6 py-4 whitespace-nowrap">5</td>
            <td class="px-6 py-4 whitespace-nowrap">待確認</td>
            <td
              class="px-6 py-4 whitespace-nowrap flex justify-center space-x-6"
            >
              <button
                type="button"
                class="admin-secondary-button px-3.5 py-1.5"
                @click="reverseModal.show()"
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
  </div>
  <!-- article modal -->
  <div
    ref="reverseModal"
    id="reverseModal"
    tabindex="-1"
    class="hidden fixed z-40 w-full px-4 overflow-x-hidden overflow-y-auto top-28 left-0 right-0 h-auto"
  >
    <div class="w-full max-w-4xl h-full max-h-[calc(100vh-8.5rem)]">
      <!-- Modal content -->
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b bg-black top-[6rem] w-[calc(100%-2rem)] max-w-4xl z-50 rounded-t-lg fixed"
        >
          <h3 class="text-xl font-semibold text-gray-300">編輯文章</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            @click="reverseModal.hide()"
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
          <div class="w-full max-w-xl mx-auto space-y-6">
            <div>
              <label
                for="modalDistrict"
                class="block mb-2 text-md font-medium text-gray-900"
                >預約門市</label
              >
              <select
                id="modalDistrict"
                class="w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block p-2.5"
              >
                <option value="臺北">臺北館</option>
                <option value="臺中">臺中館</option>
                <option value="高雄">高雄館</option>
              </select>
            </div>
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-2">
                <label for="time" class="block mb-2 font-medium"
                  >預約時間</label
                >
                <input
                  type="datetime-local"
                  id="time"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                  required
                  onkeypress="return false"
                />
              </div>
              <div>
                <label for="num" class="block mb-2 font-medium">人數</label>
                <input
                  type="number"
                  id="num"
                  class="text-end bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                  required
                />
              </div>
            </div>
            <div>
              <label for="name" class="block mb-2 font-medium"
                >預約人姓名</label
              >
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                required
              />
            </div>
            <div>
              <label for="phone" class="block mb-2 font-medium"
                >預約人電話</label
              >
              <input
                type="tel"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                required
              />
            </div>
            <div>
              <label for="email" class="block mb-2 font-medium"
                >預約人Email</label
              >
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                required
              />
            </div>
            <div>
              <label for="message" class="block mb-2 font-medium">備註</label>
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
              ></textarea>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" class="sr-only peer" checked />
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"
                  ></div>
                  <span class="ml-3 text-md font-medium text-gray-900"
                    >預約成功</span
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
import { Modal } from "flowbite";

export default {
  data() {
    return {};
  },
  mounted() {
    // modal options
    const modalOptions = {
      placement: "center",
      backdrop: "static",
      backdropClasses: "bg-black bg-opacity-80 fixed inset-0 z-30",
      closable: true,
    };
    this.reverseModal = new Modal(this.$refs.reverseModal, modalOptions);
  },
};
</script>

<style>
.ck-editor__editable_inline {
  min-height: 300px;
}
</style>
