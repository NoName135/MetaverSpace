<template>
  <div>
    <div class="sm:flex items-center justify-between pb-4">
      <div>
        <button
          type="button"
          id="dropdownDaysBtn"
          ref="dropdownDaysBtn"
          class="inline-flex items-center border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-3 py-1.5 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700"
        >
          <svg
            class="w-4 h-4 mr-2 text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clip-rule="evenodd"
            ></path>
          </svg>
          最近 30 天
          <svg
            class="w-3 h-3 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <!-- Dropdown menu -->
        <div
          id="dropdownDaysMenu"
          ref="dropdownDaysMenu"
          class="z-10 hidden w-48 divide-y rounded-lg shadow bg-gray-700 divide-gray-600 absolute m-0"
          style="
            inset: auto auto 0px 0px;
            transform: translate3d(522.5px, 3847.5px, 0px);
          "
        >
          <ul class="p-3 space-y-1 text-sm text-gray-200">
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-600">
                <input
                  checked=""
                  id="filter-radio-example-2"
                  type="radio"
                  value=""
                  name="filter-radio"
                  class="w-4 h-4 text-primary2 focus:ring-primary2 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                />
                <label
                  for="filter-radio-example-2"
                  class="w-full ml-2 text-sm font-medium rounded text-gray-300"
                  >最近 7 天</label
                >
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-600">
                <input
                  id="filter-radio-example-3"
                  type="radio"
                  value=""
                  name="filter-radio"
                  class="w-4 h-4 text-primary2 focus:ring-primary2 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                />
                <label
                  for="filter-radio-example-3"
                  class="w-full ml-2 text-sm font-medium rounded text-gray-300"
                  >最近 30 天</label
                >
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-600">
                <input
                  id="filter-radio-example-4"
                  type="radio"
                  value=""
                  name="filter-radio"
                  class="w-4 h-4 text-primary2 focus:ring-primary2 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                />
                <label
                  for="filter-radio-example-4"
                  class="w-full ml-2 text-sm font-medium rounded text-gray-300"
                  >最近 1 個月</label
                >
              </div>
            </li>
            <li>
              <div class="flex items-center p-2 rounded hover:bg-gray-600">
                <input
                  id="filter-radio-example-5"
                  type="radio"
                  value=""
                  name="filter-radio"
                  class="w-4 h-4 text-primary2 focus:ring-primary2 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                />
                <label
                  for="filter-radio-example-5"
                  class="w-full ml-2 text-sm font-medium rounded text-gray-300"
                  >最近 1 年</label
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
      <label for="table-search" class="sr-only">搜尋</label>
      <div class="relative">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="table-search"
          class="block p-2 pl-10 text-sm border rounded-lg w-full sm:w-72 mt-4 sm:mt-0 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
          placeholder="搜尋已購買商品"
        />
      </div>
    </div>
    <!-- 交易記錄表格 -->
    <div class="mb-10">
      <div class="relative overflow-x-auto sm:rounded-lg">
        <table class="w-full text-sm text-left">
          <thead class="uppercase bg-white/20 text-gray-300">
            <tr>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂單編號</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂單日期</th>
              <th scope="col" class="px-4 py-3 whitespace-nowrap">數量</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂單總額</th>
              <th scope="col" class="px-5 py-3 whitespace-nowrap">付款方式</th>
              <th scope="col" class="px-5 py-3 whitespace-nowrap">付款狀態</th>
            </tr>
          </thead>
          <tbody class="text-md text-gray-400">
            <tr class="border-b bg-gray-800 border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                -L9u11NAE0m0SpSBUDIq
              </th>
              <td class="px-6 py-4 whitespace-nowrap">2023/01/29</td>
              <td class="px-4 py-4 whitespace-nowrap">2</td>
              <td class="px-6 py-4 whitespace-nowrap">NT$ 51,800</td>
              <td class="px-5 py-4 whitespace-nowrap">信用卡</td>
              <td class="px-5 py-4 whitespace-nowrap text-primary">
                <a href="#" class="hover:underline" @click.prevent="payLink(0)">
                  未付款
                  <font-awesome-icon
                    :icon="['fas', 'arrow-up-right-from-square']"
                    class="ml-1"
                /></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 明細表格 -->
      <button
        type="button"
        ref="detailAccordionBtn1"
        class="flex justify-around items-center mt-1 w-32 focus:outline-none font-medium rounded-sm text-sm text-gray-400 p-1.5 bg-secondary2 hover:bg-secondary2/70"
      >
        <p>查看明細</p>
        <svg
          data-accordion-icon
          class="w-6 h-6 shrink-0 duration-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        ref="detailAccordionTable1"
        class="hidden relative overflow-x-auto shadow-md"
      >
        <table class="w-full text-left">
          <thead class="text-xs uppercase bg-white/20 text-gray-300">
            <tr>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">品牌</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">商品名稱</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">規格</th>
              <th scope="col" class="px-4 py-3 whitespace-nowrap">數量</th>
              <th scope="col" class="px-5 py-3 whitespace-nowrap">總金額</th>
            </tr>
          </thead>
          <tbody class="text-sm text-gray-400">
            <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
              <td class="px-6 py-4 whitespace-nowrap text-white">Meta</td>
              <td class="px-6 py-4 whitespace-nowrap text-white">
                Oculus Quest 2 256G
              </td>
              <td class="px-6 py-4 whitespace-nowrap">無</td>
              <td class="px-4 py-4 whitespace-nowrap">1件</td>
              <td class="px-5 py-4 whitespace-nowrap font-bold text-white">
                NT$ 17,500
              </td>
            </tr>
            <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
              <td class="px-6 py-4 whitespace-nowrap text-white">VIVE</td>
              <td class="px-6 py-4 whitespace-nowrap text-white">XR Elite</td>
              <td class="px-6 py-4 whitespace-nowrap">無</td>
              <td class="px-4 py-4 whitespace-nowrap">1件</td>
              <td class="px-5 py-4 whitespace-nowrap font-bold text-white">
                NT$ 34,300
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 交易記錄表格 -->
    <div class="mb-10">
      <div class="relative overflow-x-auto sm:rounded-lg">
        <table class="w-full text-sm text-left">
          <thead class="uppercase bg-white/20 text-gray-300">
            <tr>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂單編號</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂單日期</th>
              <th scope="col" class="px-4 py-3 whitespace-nowrap">數量</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">訂單總額</th>
              <th scope="col" class="px-5 py-3 whitespace-nowrap">付款方式</th>
              <th scope="col" class="px-5 py-3 whitespace-nowrap">付款狀態</th>
            </tr>
          </thead>
          <tbody class="text-md text-gray-400">
            <tr class="border-b bg-gray-800 border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium whitespace-nowrap text-white"
              >
                -L9u11NAE0m0SpSBUDIq
              </th>
              <td class="px-6 py-4 whitespace-nowrap">2023/01/29</td>
              <td class="px-4 py-4 whitespace-nowrap">2</td>
              <td class="px-6 py-4 whitespace-nowrap">NT$ 51,800</td>
              <td class="px-5 py-4 whitespace-nowrap">信用卡</td>
              <td class="px-5 py-4 whitespace-nowrap text-primary">
                <a href="#" class="hover:underline" @click.prevent="payLink(1)">
                  已付款
                  <font-awesome-icon
                    :icon="['fas', 'arrow-up-right-from-square']"
                    class="ml-1"
                /></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 明細表格 -->
      <button
        type="button"
        ref="detailAccordionBtn2"
        class="flex justify-around items-center mt-1 w-32 focus:outline-none font-medium rounded-sm text-sm text-gray-400 p-1.5 bg-secondary2 hover:bg-secondary2/70"
      >
        <p>查看明細</p>
        <svg
          data-accordion-icon
          class="w-6 h-6 shrink-0 duration-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div
        ref="detailAccordionTable2"
        class="hidden relative overflow-x-auto shadow-md"
      >
        <table class="w-full text-left">
          <thead class="text-xs uppercase bg-white/20 text-gray-300">
            <tr>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">品牌</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">商品名稱</th>
              <th scope="col" class="px-6 py-3 whitespace-nowrap">規格</th>
              <th scope="col" class="px-4 py-3 whitespace-nowrap">數量</th>
              <th scope="col" class="px-5 py-3 whitespace-nowrap">總金額</th>
            </tr>
          </thead>
          <tbody class="text-sm text-gray-400">
            <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
              <td class="px-6 py-4 whitespace-nowrap text-white">Meta</td>
              <td class="px-6 py-4 whitespace-nowrap text-white">
                Oculus Quest 2 256G
              </td>
              <td class="px-6 py-4 whitespace-nowrap">無</td>
              <td class="px-4 py-4 whitespace-nowrap">1件</td>
              <td class="px-5 py-4 whitespace-nowrap font-bold text-white">
                NT$ 17,500
              </td>
            </tr>
            <tr class="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
              <td class="px-6 py-4 whitespace-nowrap text-white">VIVE</td>
              <td class="px-6 py-4 whitespace-nowrap text-white">XR Elite</td>
              <td class="px-6 py-4 whitespace-nowrap">無</td>
              <td class="px-4 py-4 whitespace-nowrap">1件</td>
              <td class="px-5 py-4 whitespace-nowrap font-bold text-white">
                NT$ 34,300
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- 頁碼 -->
    <div class="mt-16 flex justify-center">
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";

import { Dropdown } from "flowbite";
import { Accordion } from "flowbite";

export default {
  methods: {
    payLink(num) {
      let route;
      num == 0
        ? (route = this.$router.resolve("/checkout/check/id"))
        : (route = this.$router.resolve("/checkout/send/id"));
      window.open(route.href);
    },
  },
  mounted() {
    const dropDownOptions = {
      placement: "bottom",
      triggerType: "click",
      offsetSkidding: 28,
      offsetDistance: 10,
      delay: 300,
    };
    this.daysDropdown = new Dropdown(
      this.$refs.dropdownDaysMenu,
      this.$refs.dropdownDaysBtn,
      dropDownOptions
    );

    const detailAccordionItems = [
      {
        id: "detailAccordion1",
        triggerEl: this.$refs.detailAccordionBtn1,
        targetEl: this.$refs.detailAccordionTable1,
        active: false,
      },
      {
        id: "detailAccordion2",
        triggerEl: this.$refs.detailAccordionBtn2,
        targetEl: this.$refs.detailAccordionTable2,
        active: false,
      },
    ];
    const detailAccordionOptions = {
      activeClasses: "bg-secondary text-white",
      inactiveClasses: "bg-secondary2 text-gray-400",
      onToggle: (item) => {
        item._items.forEach((data) => {
          if (data.active) {
            data.triggerEl
              .querySelector("[data-accordion-icon]")
              .classList.add("-rotate-180");
          } else {
            data.triggerEl
              .querySelector("[data-accordion-icon]")
              .classList.remove("-rotate-180");
          }
        });
      },
    };
    this.detailAccordion = new Accordion(
      detailAccordionItems,
      detailAccordionOptions
    );
  },
  components: {
    Pagination,
  },
};
</script>
