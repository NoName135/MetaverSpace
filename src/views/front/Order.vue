<template>
  <div class="mt-nav">
    <div class="container px-2 md:px-0 pt-8">
      <div class="border-2 rounded-lg overflow-hidden">
        <h1 class="p-4 bg-black/50 text-2xl font-bold border-b-2">交易記錄</h1>
        <div class="px-8">
          <div class="py-8 flex justify-center">
            <form class="w-96">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-white"
                  >姓名</label
                >
                <input
                  type="text"
                  id="name"
                  class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
                  placeholder="請輸入姓名"
                  required
                />
              </div>
              <div class="mt-8">
                <label
                  for="phoneOrEmail"
                  class="block mb-2 text-sm font-medium text-white"
                  >電話或Email</label
                >
                <input
                  type="text"
                  id="phoneOrEmail"
                  class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
                  placeholder="請輸入電話或Email"
                  required
                />
              </div>
              <button
                type="submit"
                class="mt-12 text-white focus:ring-4 focus:outline-none font-medium rounded text-sm w-full py-2 text-center bg-primary hover:bg-primary2 focus:ring-primary3"
              >
                送出查詢
              </button>
            </form>
          </div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>
