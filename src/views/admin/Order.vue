<template>
  <div class="mt-8 px-6">
    <!-- 銷售總數及金額 -->
    <div class="grid grid-cols-3 gap-8">
      <div
        class="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg shadow text-end"
      >
        <h2 class="text-2xl">訂單總數</h2>
        <p class="mb-3 text-teal-500 text-4xl font-bold">1,999</p>
      </div>
      <div
        class="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg shadow text-end"
      >
        <h2 class="text-2xl">銷售總數</h2>
        <p class="mb-3 text-teal-500 text-4xl font-bold">3,840</p>
      </div>
      <div
        class="w-full px-6 py-4 bg-white border border-gray-200 rounded-lg shadow text-end"
      >
        <h2 class="text-2xl">營業額</h2>
        <p class="mb-3 text-teal-500 text-4xl font-bold">NT$ 386,500</p>
      </div>
    </div>
    <!-- 銷售圖表 -->
    <div class="mt-6 grid grid-cols-2 gap-8">
      <div>
        <div class="flex items-center">
          <h2 class="text-xl font-semibold mb-4 whitespace-nowrap mr-8">
            銷售圖表
          </h2>
          <ul
            class="mb-4 items-center w-full text-sm font-medium text-gray-900 bg-white border-2 border-gray-300 rounded-lg flex"
          >
            <li class="w-full border-gray-300 border-b-0 border-r-2">
              <div class="flex items-center pl-3">
                <input
                  id="category"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 focus:ring-2"
                />
                <label
                  for="category"
                  class="w-full py-3 ml-2 text-md font-medium text-gray-900"
                  >品牌</label
                >
              </div>
            </li>
            <li class="w-full">
              <div class="flex items-center pl-3">
                <input
                  checked
                  id="brand"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 focus:ring-2"
                />
                <label
                  for="brand"
                  class="w-full py-3 ml-2 text-md font-medium text-gray-900"
                  >類別</label
                >
              </div>
            </li>
          </ul>
        </div>
        <div ref="categoryChart"></div>
      </div>
      <div ref="soldChart"></div>
    </div>
    <!-- 訂單資訊 -->
    <div class="mt-6">
      <div class="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-md text-left text-gray-700">
          <thead class="text-sm text-dark uppercase bg-gray-300">
            <tr>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂單編號</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂購日期</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂購人</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂單金額</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂單狀態</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">備註</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">
                <span class="sr-only">選項</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b hover:bg-teal-100">
              <td class="px-6 py-4 whitespace-nowrap">-L9u11NAE0m0SpSBUDIq</td>
              <td class="px-6 py-4 whitespace-nowrap">2023/01/29</td>
              <td class="px-6 py-4 whitespace-nowrap">無名</td>
              <td class="px-6 py-4 whitespace-nowrap">NT$ 52,800</td>
              <td class="px-6 py-4 whitespace-nowrap">已付款</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <font-awesome-icon :icon="['fas', 'check']" class="ml-1" />
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap flex justify-center space-x-6"
              >
                <button
                  type="button"
                  class="admin-secondary-button px-3.5 py-1.5"
                  @click="orderModal.show()"
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
    <Pagination class="mt-8" />
  </div>
  <!-- Product modal -->
  <div
    ref="orderModal"
    id="orderModal"
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
          <h3 class="text-xl font-semibold text-gray-300">編輯訂單</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            @click="orderModal.hide()"
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
            <h3 class="font-medium">
              訂單編號<span class="ml-4 text-lg font-semibold text-gray-900"
                >-L9u11NAE0m0SpSBUDIq</span
              >
            </h3>
            <h3 class="font-medium">
              訂單日期<span class="ml-4 text-lg font-semibold text-gray-900"
                >2023/01/29</span
              >
            </h3>
            <div>
              <label for="name" class="block mb-2 font-medium"
                >訂購人姓名</label
              >
              <input
                type="text"
                id="name"
                class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label for="phone" class="block mb-2 font-medium"
                >訂購人電話</label
              >
              <input
                type="tel"
                id="phone"
                class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label for="email" class="block mb-2 font-medium"
                >訂購人Email</label
              >
              <input
                type="email"
                id="email"
                class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                required
              />
            </div>
            <div>
              <label for="message" class="block mb-2 font-medium"
                >訂單備註</label
              >
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
              ></textarea>
            </div>
            <h3 class="font-medium">
              付款方式<span class="ml-4 text-lg font-semibold text-gray-900"
                >信用卡</span
              >
            </h3>
            <h3 class="font-medium">
              訂單金額<span class="ml-4 text-lg font-semibold text-teal-500"
                >NT$ 52,800</span
              >
            </h3>
            <!-- 訂單內容區塊 -->
            <div>
              <button
                type="button"
                ref="detailCollapseBtn"
                class="flex justify-around items-center w-28 focus:outline-none font-medium rounded-lg text-sm p-1.5 bg-violet-300 hover:bg-violet-400"
              >
                <p>訂單內容</p>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0 duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                  ></path>
                </svg>
              </button>
              <!-- 明細區塊 -->
              <div
                ref="detailCollapseMenu"
                class="px-4 border-2 border-gray-300 rounded mb-10"
              >
                <div class="py-8 grid grid-cols-5 gap-4">
                  <img
                    src="@/images/products/Meta_Oculus_Quest2.jpg"
                    alt=""
                    class="flex self-center w-full h-20 object-cover rounded border border-gray-300"
                  />
                  <div class="col-span-4 flex flex-col justify-between">
                    <h2 class="text-lg">Meta</h2>
                    <h3 class="text-xl mt-3">Oculus Quest 2 256G</h3>
                    <div>
                      <div class="flex justify-between items-center mt-2">
                        <div class="flex flex-row justify-start mt-1 text-md">
                          <p>規格：無</p>
                          <p class="ml-4">數量：1</p>
                        </div>
                        <h5 class="text-lg text-end">
                          總計：<span class="font-bold">NT$ 17,500</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="py-8 grid grid-cols-5 gap-4 border-t border-gray-300"
                >
                  <img
                    src="@/images/products/VIVE_XR_ELITE.jpg"
                    alt=""
                    class="flex self-center w-full h-20 object-cover rounded border border-gray-300"
                  />
                  <div class="col-span-4 flex flex-col justify-between">
                    <h2 class="text-lg">VIVE</h2>
                    <h3 class="text-xl mt-2 lg:mt-3">XR_ELITE</h3>
                    <div>
                      <div class="flex justify-between items-center mt-2">
                        <div class="flex flex-row mt-1text-md">
                          <p>規格：無</p>
                          <p class="md:ml-4">數量：1</p>
                        </div>
                        <h5 class="text-lg text-end">
                          總計：<span class="font-bold">NT$ 34,300</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-t border-gray-300">
                  <p class="text-rose-500 text-lg py-4 text-end">折扣：1,000</p>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" class="sr-only peer" checked />
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"
                  ></div>
                  <span class="ml-3 text-md font-medium text-gray-900"
                    >已付款</span
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
import { Modal, Collapse } from "flowbite";
import c3 from "c3";

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
    this.orderModal = new Modal(this.$refs.orderModal, modalOptions);

    // collapse options
    const detailCollapseOptions = {
      onToggle: (item) => {
        if (item._visible) {
          item._triggerEl
            .querySelector("[data-accordion-icon]")
            .classList.add("-rotate-180");
        } else {
          item._triggerEl
            .querySelector("[data-accordion-icon]")
            .classList.remove("-rotate-180");
        }
      },
    };
    this.detailCollapse = new Collapse(
      this.$refs.detailCollapseMenu,
      this.$refs.detailCollapseBtn,
      detailCollapseOptions
    );
    this.detailCollapse.collapse();

    // c3 charts
    this.categoryChart = c3.generate({
      bindto: this.$refs.categoryChart,
      data: {
        columns: [
          ["AR", 5],
          ["VR", 13],
          ["MR", 10],
          ["XR", 8],
        ],
        type: "bar",
      },
      axis: {
        x: {
          type: "category",
          categories: ["類別"],
        },
      },
    });
    this.soldChart = c3.generate({
      bindto: this.$refs.soldChart,
      data: {
        columns: [
          ["Meta Oculus Quest 2 256G", 20],
          ["VIVE FLOW", 10],
          ["VIVE XR ELITE", 5],
          ["其他", 30],
        ],
        type: "donut",
      },
      donut: {
        title: "商品營收比重",
      },
    });
  },
  beforeUnmount() {
    if (this.categoryChart) {
      this.categoryChart.destroy();
    }
  },
  components: {
    Pagination,
  },
};
</script>

<style src="c3/c3.css"></style>
<style>
.c3-chart-arcs-title {
  font-size: 20px;
  font-weight: bold;
}
</style>
