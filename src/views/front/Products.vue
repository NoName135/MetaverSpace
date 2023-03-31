<template>
  <div class="container mt-nav">
    <!-- 最新消息區塊 -->
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      :modules="articleModules"
      class="productsArticleSwiper h-96"
    >
      <swiper-slide v-for="article in articles" :key="article.id">
        <div
          class="h-full bg-cover bg-center"
          :style="{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${article.img})`,
          }"
        >
          <div
            class="px-10 sm:px-20 md:px-24 lg:px-32 h-full flex flex-col justify-around"
          >
            <div>
              <h2 class="font-bold text-2xl lg:text-3xl">
                {{ article.title }}
              </h2>
              <p class="mt-8 text-lg lg:text-xl" v-html="article.content"></p>
            </div>
            <router-link to="./article/id" class="primary-button w-24"
              >查看詳情</router-link
            >
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="grid grid-cols-4 gap-2 mx-2 lg:mx-0">
      <!-- 篩選區塊 - mobile，checkbox id 跟 PC 分開 -->
      <div
        ref="filterDrawer"
        id="filterDrawer"
        class="fixed lg:hidden top-0 left-0 z-40 h-screen overflow-y-auto transition-transform -translate-x-full w-60 bg-dark"
        tabindex="-1"
        aria-labelledby="drawer-label"
      >
        <div class="sticky top-0 bg-dark p-5 flex justify-between items-center">
          <h3 class="text-xl font-bold">
            <font-awesome-icon :icon="['fas', 'filter']" />
            條件篩選
          </h3>
          <button
            type="button"
            aria-controls="filterDrawer"
            class="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 hover:bg-black/50 hover:text-white"
            @click="filterDrawer.hide()"
          >
            <svg
              aria-hidden="true"
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
            <span class="sr-only">Close menu</span>
          </button>
        </div>
        <div class="px-5 pb-5">
          <p class="text-lg mt-1">類別</p>
          <div class="flex items-center mt-4">
            <input
              id="m-ar"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
            />
            <label for="m-ar" class="ml-2 text-sm font-medium text-gray-300"
              >AR (擴增實境)</label
            >
          </div>
          <div class="flex items-center mt-4">
            <input
              id="m-vr"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
            />
            <label for="m-vr" class="ml-2 text-sm font-medium text-gray-300"
              >VR (虛擬實境)</label
            >
          </div>
          <div class="flex items-center mt-4">
            <input
              id="m-mr"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
            />
            <label for="m-mr" class="ml-2 text-sm font-medium text-gray-300"
              >MR (混合實境)</label
            >
          </div>
          <div class="flex items-center mt-4">
            <input
              id="m-xr"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
            />
            <label for="m-xr" class="ml-2 text-sm font-medium text-gray-300"
              >XR (延展實境)</label
            >
          </div>
          <p class="text-lg mt-6">品牌</p>
          <div class="flex items-center mt-4">
            <input
              id="m-meta"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
            />
            <label for="m-meta" class="ml-2 text-sm font-medium text-gray-300"
              >Meta</label
            >
          </div>
          <div class="flex items-center mt-4">
            <input
              id="m-vive"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
            />
            <label for="m-vive" class="ml-2 text-sm font-medium text-gray-300"
              >VIVE</label
            >
          </div>
          <div class="flex items-center mt-4">
            <input
              id="m-other"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
            />
            <label for="m-other" class="ml-2 text-sm font-medium text-gray-300"
              >其他</label
            >
          </div>
          <p class="text-lg mt-6">價格區間</p>
          <div class="flex items-center mt-4">
            <input
              type="number"
              placeholder="$最小值"
              class="border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0"
            />
            <font-awesome-icon :icon="['fas', 'minus']" class="text-3xl mx-3" />
            <input
              type="number"
              placeholder="$最大值"
              class="border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0"
            />
          </div>
          <button
            type="button"
            class="mt-4 w-48 focus:outline-none focus:ring-4 dark-solid-button"
          >
            套用範圍
          </button>
          <div class="flex mt-6">
            <button
              type="button"
              class="w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-warm hover:bg-warm2 focus:ring-warm3"
            >
              清除
            </button>
            <button
              type="button"
              class="ml-8 w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3"
            >
              搜尋
            </button>
          </div>
        </div>
      </div>
      <!-- 篩選區塊 - checkbox id 跟 mobile 分開 -->
      <div class="hidden lg:block col-span-1">
        <div class="py-8 top-nav">
          <h3 class="text-xl font-bold">
            <font-awesome-icon :icon="['fas', 'filter']" />
            條件篩選
          </h3>
          <p class="text-lg mt-6">類別</p>
          <div class="flex items-center mt-4">
            <input
              id="ar"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
            />
            <label for="ar" class="ml-2 text-sm font-medium text-gray-300"
              >AR (擴增實境)</label
            >
          </div>
          <div class="flex items-center mt-4">
            <input
              id="vr"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
            />
            <label for="vr" class="ml-2 text-sm font-medium text-gray-300"
              >VR (虛擬實境)</label
            >
          </div>
          <div class="flex items-center mt-4">
            <input
              id="mr"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
            />
            <label for="mr" class="ml-2 text-sm font-medium text-gray-300"
              >MR (混合實境)</label
            >
          </div>
          <div class="flex items-center mt-4">
            <input
              id="xr"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
            />
            <label for="xr" class="ml-2 text-sm font-medium text-gray-300"
              >XR (延展實境)</label
            >
          </div>
          <p class="text-lg mt-6">品牌</p>
          <div class="flex items-center mt-4">
            <input
              id="meta"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
            />
            <label for="meta" class="ml-2 text-sm font-medium text-gray-300"
              >Meta</label
            >
          </div>
          <div class="flex items-center mt-4">
            <input
              id="vive"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
            />
            <label for="vive" class="ml-2 text-sm font-medium text-gray-300"
              >VIVE</label
            >
          </div>
          <div class="flex items-center mt-4">
            <input
              id="other"
              type="checkbox"
              value=""
              class="w-4 h-4 text-primary rounded bg-gray-700 border-gray-600 focus:ring-primary0"
            />
            <label for="other" class="ml-2 text-sm font-medium text-gray-300"
              >其他</label
            >
          </div>
          <p class="text-lg mt-6">價格區間</p>
          <div class="flex items-center mt-4">
            <input
              type="number"
              placeholder="$最小值"
              class="border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0"
            />
            <font-awesome-icon :icon="['fas', 'minus']" class="text-3xl mx-3" />
            <input
              type="number"
              placeholder="$最大值"
              class="border text-sm text-end rounded block w-[68px] p-2 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-primary0 focus:border-primary0"
            />
          </div>
          <button
            type="button"
            class="mt-4 w-48 focus:outline-none focus:ring-4 dark-solid-button"
          >
            套用範圍
          </button>
          <div class="flex mt-6">
            <button
              type="button"
              class="w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-warm hover:bg-warm2 focus:ring-warm3"
            >
              清除
            </button>
            <button
              type="button"
              class="ml-8 w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3"
            >
              搜尋
            </button>
          </div>
        </div>
      </div>
      <!-- 產品區塊 -->
      <div class="col-span-full lg:col-span-3">
        <!-- 篩選按鈕及搜尋 -->
        <div class="my-8 flex items-center">
          <button
            type="button"
            class="block lg:hidden whitespace-nowrap font-medium rounded-l-lg text-sm px-4 py-3 border border-secondary2 bg-secondary"
            @click="filterDrawer.show()"
          >
            <font-awesome-icon :icon="['fas', 'filter']" />
            篩選
          </button>
          <form class="grow">
            <label
              for="search"
              class="text-sm font-medium text-gray-900 sr-only dark:text-white"
              >Search</label
            >
            <div class="relative">
              <div
                class="hidden lg:flex items-center absolute inset-y-0 left-0 pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="search"
                class="block w-full p-3 lg:pl-10 text-sm rounded-r-lg lg:rounded-l-lg bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:ring-primary-0 focus:border-primary"
                placeholder="請輸入關鍵字"
              />
              <button
                type="button"
                class="absolute lg:hidden top-0 right-0 p-3 text-sm font-medium text-white rounded-r-lg border border-primary2 focus:ring focus:outline-none bg-primary hover:bg-primary2 focus:ring-primary3"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                <span class="sr-only">Search</span>
              </button>
              <button
                type="button"
                class="hidden lg:block text-white absolute right-1.5 bottom-1.5 focus:ring-1 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-primary hover:bg-primary2 focus:ring-primary2"
              >
                搜尋
              </button>
            </div>
          </form>
        </div>
        <!-- 產品卡片區塊 -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
          <router-link
            to="./product/id"
            class="group"
            @mouseover="productImages[0] = viveXrElite"
            @mouseleave="productImages[0] = metaOculusQuest2"
            @click.prevent="click('card')"
          >
            <div
              class="h-[300px] md:h-[420px] rounded-lg border overflow-hidden relative"
            >
              <img
                class="h-1/2 md:h-3/5 w-full object-cover group-hover:opacity-30 ease-in-out duration-300"
                :src="productImages[0]"
                alt=""
              />
              <div class="absolute top-2 left-3 sm:top-3 sm:left-4">
                <div class="bg-dark px-3 py-2 rounded text-xs mr-1">VR</div>
              </div>
              <div
                class="hidden lg:group-hover:flex absolute top-[45%] justify-center w-full"
              >
                <button
                  type="button"
                  class="focus:outline-none focus:ring-4 font-medium rounded text-md px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3"
                  @click.prevent.stop="productModal.show()"
                >
                  <font-awesome-icon
                    :icon="['fas', 'cart-plus']"
                    class="cursor-pointer text-lg mr-2"
                  />
                  加入購物車
                </button>
              </div>
              <div
                class="p-4 md:p-5 h-1/2 md:h-2/5 flex flex-col justify-between"
                style="
                  background: linear-gradient(
                    142.88deg,
                    rgba(255, 255, 255, 0.16) 8.09%,
                    rgba(255, 255, 255, 0.064) 27.24%,
                    rgba(255, 255, 255, 0.064) 34.42%,
                    rgba(255, 255, 255, 0.1088) 48.78%,
                    rgba(255, 255, 255, 0) 100%
                  );
                "
              >
                <div class="grid grid-cols-3">
                  <h4 class="col-span-2 text-xl">Meta</h4>
                  <div class="flex justify-between lg:justify-end text-2xl">
                    <font-awesome-icon
                      :icon="['fas', 'cart-plus']"
                      class="cursor-pointer block lg:hidden"
                      @click.prevent.stop="productModal.show()"
                    />
                    <font-awesome-icon
                      :icon="['fas', 'heart']"
                      class="cursor-pointer hover:text-primary2"
                      @click.prevent.stop="click('favorite')"
                    />
                  </div>
                </div>
                <h3 class="mt-2 text-xl font-bold">Oculus Quest 2 256G</h3>
                <div class="mt-2 flex justify-between items-end">
                  <p class="text-gray-400 line-through">NT$ 17,980</p>
                  <p class="text-primary text-lg font-bold">NT$ 17,500</p>
                </div>
              </div>
            </div>
          </router-link>
          <router-link
            to="./product/id"
            class="group"
            @mouseover="productImages[1] = viveXrElite"
            @mouseleave="productImages[1] = metaOculusQuest2"
            @click.prevent="click('card')"
          >
            <div
              class="h-[300px] md:h-[420px] rounded-lg border overflow-hidden relative"
            >
              <img
                class="h-1/2 md:h-3/5 w-full object-cover group-hover:opacity-30 ease-in-out duration-300"
                :src="productImages[1]"
                alt=""
              />
              <div class="absolute top-2 left-3 sm:top-3 sm:left-4">
                <div class="bg-dark px-3 py-2 rounded text-xs mr-1">VR</div>
              </div>
              <div
                class="hidden lg:group-hover:flex absolute top-[45%] justify-center w-full"
              >
                <button
                  type="button"
                  class="focus:outline-none focus:ring-4 font-medium rounded text-md px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3"
                  @click.prevent.stop="productModal.show()"
                >
                  <font-awesome-icon
                    :icon="['fas', 'cart-plus']"
                    class="cursor-pointer text-lg mr-2"
                  />
                  加入購物車
                </button>
              </div>
              <div
                class="p-4 md:p-5 h-1/2 md:h-2/5 flex flex-col justify-between"
                style="
                  background: linear-gradient(
                    142.88deg,
                    rgba(255, 255, 255, 0.16) 8.09%,
                    rgba(255, 255, 255, 0.064) 27.24%,
                    rgba(255, 255, 255, 0.064) 34.42%,
                    rgba(255, 255, 255, 0.1088) 48.78%,
                    rgba(255, 255, 255, 0) 100%
                  );
                "
              >
                <div class="grid grid-cols-3">
                  <h4 class="col-span-2 text-xl">Meta</h4>
                  <div class="flex justify-between lg:justify-end text-2xl">
                    <font-awesome-icon
                      :icon="['fas', 'cart-plus']"
                      class="cursor-pointer block lg:hidden"
                      @click.prevent.stop="productModal.show()"
                    />
                    <font-awesome-icon
                      :icon="['fas', 'heart']"
                      class="cursor-pointer hover:text-primary2"
                      @click.prevent.stop="click('favorite')"
                    />
                  </div>
                </div>
                <h3 class="mt-2 text-xl font-bold">Oculus Quest 2 256G</h3>
                <div class="mt-2 flex justify-between items-end">
                  <p class="text-gray-400 line-through">NT$ 17,980</p>
                  <p class="text-primary text-lg font-bold">NT$ 17,500</p>
                </div>
              </div>
            </div>
          </router-link>
          <router-link
            to="./product/id"
            class="group"
            @mouseover="productImages[2] = viveXrElite"
            @mouseleave="productImages[2] = metaOculusQuest2"
            @click.prevent="click('card')"
          >
            <div
              class="h-[300px] md:h-[420px] rounded-lg border overflow-hidden relative"
            >
              <img
                class="h-1/2 md:h-3/5 w-full object-cover group-hover:opacity-30 ease-in-out duration-300"
                :src="productImages[2]"
                alt=""
              />
              <div class="absolute top-2 left-3 sm:top-3 sm:left-4">
                <div class="bg-dark px-3 py-2 rounded text-xs mr-1">VR</div>
              </div>
              <div
                class="hidden lg:group-hover:flex absolute top-[45%] justify-center w-full"
              >
                <button
                  type="button"
                  class="focus:outline-none focus:ring-4 font-medium rounded text-md px-5 py-2.5 bg-primary hover:bg-primary2 focus:ring-primary3"
                  @click.prevent.stop="productModal.show()"
                >
                  <font-awesome-icon
                    :icon="['fas', 'cart-plus']"
                    class="cursor-pointer text-lg mr-2"
                  />
                  加入購物車
                </button>
              </div>
              <div
                class="p-4 md:p-5 h-1/2 md:h-2/5 flex flex-col justify-between"
                style="
                  background: linear-gradient(
                    142.88deg,
                    rgba(255, 255, 255, 0.16) 8.09%,
                    rgba(255, 255, 255, 0.064) 27.24%,
                    rgba(255, 255, 255, 0.064) 34.42%,
                    rgba(255, 255, 255, 0.1088) 48.78%,
                    rgba(255, 255, 255, 0) 100%
                  );
                "
              >
                <div class="grid grid-cols-3">
                  <h4 class="col-span-2 text-xl">Meta</h4>
                  <div class="flex justify-between lg:justify-end text-2xl">
                    <font-awesome-icon
                      :icon="['fas', 'cart-plus']"
                      class="cursor-pointer block lg:hidden"
                      @click.prevent.stop="productModal.show()"
                    />
                    <font-awesome-icon
                      :icon="['fas', 'heart']"
                      class="cursor-pointer hover:text-primary2"
                      @click.prevent.stop="click('favorite')"
                    />
                  </div>
                </div>
                <h3 class="mt-2 text-xl font-bold">Oculus Quest 2 256G</h3>
                <div class="mt-2 flex justify-between items-end">
                  <p class="text-gray-400 line-through">NT$ 17,980</p>
                  <p class="text-primary text-lg font-bold">NT$ 17,500</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <!-- 頁碼 -->
        <div class="mt-8 flex justify-center">
          <ProductsPagination></ProductsPagination>
        </div>
      </div>
      <!-- Product modal -->
      <div
        ref="productModal"
        id="productModal"
        data-modal-backdrop="static"
        tabindex="-1"
        aria-hidden="true"
        class="fixed top-8 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto h-[calc(100%-1rem)] md:h-full max-h-[calc(100vh-3rem)]"
      >
        <div class="relative w-full h-full max-w-2xl xl:h-auto">
          <!-- Modal content -->
          <div class="rounded-lg overflow-hidden shadow bg-dark">
            <!-- Modal header -->
            <div
              class="flex items-start justify-between p-4 border rounded-t-lg border-gray-600 bg-black fixed xl:static top-5 w-[calc(100%-2rem)] md:w-full max-w-2xl z-50"
            >
              <h3 class="text-lg md:text-xl font-semibold text-white">
                請選擇商品及數量
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white"
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
            <div class="p-6 space-x-2 bg-dark border-t border-gray-400">
              <swiper
                :spaceBetween="30"
                :centeredSlides="true"
                :navigation="true"
                :pagination="{
                  clickable: true,
                }"
                :modules="productModules"
                class="productModalSwiper h-48 sm:h-72 md:h-80"
              >
                <swiper-slide
                  v-for="article in articles"
                  :key="article.id"
                  class="relative"
                >
                  <div
                    class="h-full bg-cover bg-center"
                    :style="{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${article.img})`,
                    }"
                  ></div>
                </swiper-slide>
              </swiper>
              <div class="flex items-center">
                <h4 class="col-span-2 text-lg md:text-xl mr-3">Meta</h4>
                <div class="bg-white/30 px-3 py-2 rounded text-xs">VR</div>
              </div>
              <h3 class="mt-2 text-xl md:text-2xl font-bold">
                Oculus Quest 2 256G
              </h3>
              <p class="mt-2">硬體全面升級，易於設定且能安心使用。</p>
              <p class="text-primary text-lg md:text-xl font-bold mt-4">
                NT$ 17,500
              </p>
            </div>
            <!-- Modal footer -->
            <div
              class="p-6 space-x-2 border-t rounded-b border-gray-400 bg-white/10"
            >
              <template />
              <div class="flex flex-wrap items-center">
                <h5 class="text-lg mr-4 mb-6">規格：</h5>
                <ul class="flex flex-wrap text-sm">
                  <li class="mb-6">
                    <input
                      type="radio"
                      id="spec1"
                      name="spec"
                      value=""
                      class="hidden peer"
                      required=""
                    />
                    <label
                      for="spec1"
                      class="mr-3 bg-black hover:bg-primary2 peer-checked:bg-primary peer-checked:hover:bg-primary2 peer-checked:ring-1 peer-checked:ring-white px-3 py-2 rounded cursor-pointer"
                    >
                      黑色
                    </label>
                  </li>
                  <li class="mb-6">
                    <input
                      type="radio"
                      id="spec2"
                      name="spec"
                      value=""
                      class="hidden peer"
                      required=""
                    />
                    <label
                      for="spec2"
                      class="mr-3 bg-black hover:bg-primary2 peer-checked:bg-primary peer-checked:hover:bg-primary2 peer-checked:ring-1 peer-checked:ring-white px-3 py-2 rounded cursor-pointer"
                    >
                      白色
                    </label>
                  </li>
                </ul>
              </div>
              <div class="sm:flex items-center mt-2">
                <div class="flex items-center">
                  <div class="flex">
                    <button
                      type="button"
                      class="bg-secondary hover:bg-secondary2 px-2 rounded-l text-sm"
                    >
                      －
                    </button>
                    <input
                      type="number"
                      class="w-12 bg-dark text-sm text-end focus:border-secondary"
                      min="1"
                      max="99"
                      value="1"
                    />
                    <button
                      type="button"
                      class="bg-secondary hover:bg-secondary2 px-2 rounded-r text-sm"
                    >
                      ＋
                    </button>
                  </div>
                  <p class="ml-2 mr-4 whitespace-nowrap">還剩 10 件</p>
                </div>
                <button
                  type="button"
                  class="w-full primary-button ms:ml-2 mt-4 sm:mt-0"
                  @click="productModal.hide()"
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
  <ScrollTop />
</template>

<script>
import ProductsPagination from "@/components/Pagination.vue";
import metaOculusQuest2 from "@/images/products/Meta_Oculus_Quest2.jpg";
import viveXrElite from "@/images/products/VIVE_XR_ELITE.jpg";

// import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper required modules
import { Navigation, Pagination, Autoplay } from "swiper";

// import flowbite components
import { Drawer, Modal } from "flowbite";

export default {
  data() {
    return {
      windowWidth: 0,
      articleModules: [Navigation, Pagination, Autoplay],
      productModules: [Navigation, Pagination],
      metaOculusQuest2,
      viveXrElite,
      productImages: [metaOculusQuest2, metaOculusQuest2, metaOculusQuest2],
      articles: [
        {
          id: 1,
          title: "歡慶開幕",
          content: "~限時折扣~<br>全館9折優惠",
          img: "https://storage.googleapis.com/vue-course-api.appspot.com/weekhomeworks/1678191797417.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=L1XAs71p34dfbvfcswNctBS00%2B7pVJ3T4Hk8%2F2It8VLb%2FFS%2BHhLTpX4ZQYiaU1hkNesmoBMCwobts4dNCADTPTLK3KOTVHfL3wZXVAfSu3VpCrDm%2BbcFB95AwC3DloL71RkgRTr68EcWr0WmxRt0y0tQZg7PLQ2%2BQqymfYu89YZbfj3EKa06BFh6uDCHS8MEg%2F90ut%2FFshiJ0%2FjhcUyBWBEG%2FeFhrgNYSSV8GKZcmSt%2BGhfJiuzvizDAQj4xy%2Fjr9kUo6U2yxC2ZiKM7lTWr4%2BFaAzSylD%2FJgOWPhywUQNuCPnC3U5jl2Xh7zSzRnSzdET06UuwG0bfkB7o954%2FbQw%3D%3D",
        },
        {
          id: 2,
          title: "還沒想到",
          content: "這個內容我不知道要打什麼",
          img: "https://storage.googleapis.com/vue-course-api.appspot.com/weekhomeworks/1678190390342.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=MjgRHPJoefbWd0YHnCszl1RH1qDhsZknTl1IhN01Q0bMVlZ%2B%2FnUsbOvB6q%2B%2BBcz58DXvoifVilxEGFr4L%2FCldfpGO1MrTJRVic7i2mnPPo9wk7m2%2B2D9OfGlGl8ibNDhGNKnOzqrtIkrOk9uD1tidKmwkSlimzVf0PQcql6k%2BtXpknDPvglgv9Ez2VNGWuZ8MEfxX3VLGLI4QcokPgTv4MLEeDGuNoamyX4YFezNdMHsJMLjlA%2Fr45yPm5aZyDkrxpJiPQXkWgrC%2BFDR6fiD9ECMPyu64I3Hraar82Efbs04Q2IoYxeJ7IJfrkaYhtGlEvauEKxrOsqoKwZQEddIbw%3D%3D",
        },
      ],
    };
  },
  methods: {
    click(target) {
      console.log(target);
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;

    // drawer options
    const drawerOptions = {
      placement: "left",
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: "",
      backdropClasses: "bg-black bg-opacity-80 fixed inset-0 z-30",
    };
    this.filterDrawer = new Drawer(this.$refs.filterDrawer, drawerOptions);

    // modal options
    const modalOptions = {
      placement: "center",
      backdrop: "dynamic",
      backdropClasses: "bg-black bg-opacity-80 fixed inset-0 z-40",
      closable: true,
    };
    this.productModal = new Modal(this.$refs.productModal, modalOptions);
  },
  components: {
    Swiper,
    SwiperSlide,
    ProductsPagination,
  },
};
</script>
