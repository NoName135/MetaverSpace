<template>
  <div class="container mt-nav px-2 lg:px-0">
    <div class="flex flex-col md:flex-row justify-between items-center pt-8">
      <h1 class="text-primary text-2xl md:text-3xl font-bold">
        MetaverSpace 預約體驗
      </h1>
      <router-link
        to="/ReserveHistory"
        target="_blank"
        class="mt-4 md:mt-0 w-32 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-secondary hover:bg-secondary2 focus:ring-secondary3"
      >
        預約查詢
        <font-awesome-icon
          :icon="['fas', 'arrow-up-right-from-square']"
          class="ml-2"
        />
      </router-link>
    </div>
    <div class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div>
        <h3
          class="bg-white/20 text-gray-300 p-3 rounded text-lg md:text-xl font-medium"
        >
          門市預約
        </h3>
        <div class="mt-6 space-y-6">
          <div>
            <label
              for="district"
              class="block mb-2 text-sm font-medium text-white"
              >選擇門市</label
            >
            <select
              id="district"
              class="border text-sm rounded w-full p-2 bg-gray-600 border-gray-500 text-white focus:ring-primary focus:border-ring-primary"
            >
              <option value="臺北" class="bg-white/20" selected>臺北館</option>
              <option value="臺中" class="bg-white/20">臺中館</option>
              <option value="高雄" class="bg-white/20">高雄館</option>
            </select>
          </div>
          <div class="grid grid-cols-3 gap-6">
            <div class="col-span-full sm:col-span-2">
              <label
                for="time"
                class="block mb-2 text-sm font-medium text-white"
                >預約時間</label
              >
              <VueDatePicker
                v-model="date"
                :min-date="
                  new Date(new Date().setDate(new Date().getDate() + 2))
                "
                :max-date="
                  new Date(new Date().setDate(new Date().getDate() + 15))
                "
                week-start="0"
                :start-time="{ hours: 10, minutes: 0 }"
                :min-time="{ hours: 10, minutes: 0 }"
                :max-time="{ hours: 21, minutes: 0 }"
                minutes-increment="30"
                no-minutes-overlay
                select-text="確定"
                cancel-text="取消"
                locale="zh-TW"
                dark
              />
            </div>
            <div class="col-span-full sm:col-span-1">
              <label for="num" class="block mb-2 text-sm font-medium text-white"
                >人數</label
              >
              <input
                type="number"
                id="num"
                class="text-end border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>
        </div>
        <div class="mt-10">
          <h3
            class="bg-white/20 text-gray-300 p-3 rounded text-lg md:text-xl font-medium"
          >
            預約人資訊
          </h3>
          <div class="mt-6 space-y-6">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-white"
                >姓名</label
              >
              <input
                type="text"
                id="name"
                class="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
                placeholder="請輸入姓名"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-white"
                >電話</label
              >
              <input
                type="tel"
                id="phone"
                class="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
                placeholder="請輸入電話"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-white"
                >Email</label
              >
              <input
                type="email"
                id="email"
                class="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
                placeholder="請輸入Email"
                required
              />
            </div>
            <div>
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-white"
                >備註</label
              >
              <textarea
                id="message"
                rows="4"
                class="block p-2.5 w-full text-sm bg-gray-600 border-gray-500 placeholder-gray-400 rounded-lg border focus:ring-primary focus:border-primary text-white"
                placeholder="請輸入備註"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="mt-8 flex items-center mb-4">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-primary rounded ring-offset-gray-800 focus:ring-2 focus:ring-primary0 bg-gray-700 border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-300"
            >我已確認並同意以下條款</label
          >
        </div>
        <p class="mt-2 text-sm">
          1. 預約查詢經審核後顯示預約成功才算完成預約。
        </p>
        <p class="mt-2 text-sm">
          2. 若需取消預約請於 1 小時前於線上或來電取消。
        </p>
        <p class="mt-2 text-sm">
          3. 逾時 15 分鐘未入場將自動取消並列入黑名單。
        </p>
        <button type="submit" class="mt-6 w-full primary-button">
          送出預約
        </button>
      </div>
      <div class="lg:col-span-2 bg-black/50 rounded p-4">
        <iframe
          class="w-full h-[240px] sm:h-[360px] md:h-[480px] mx-auto border-0 rounded"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d28901.113822705764!2d121.555272!3d25.114071!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA2JzUzLjUiTiAxMjHCsDMzJzQxLjAiRQ!5e0!3m2!1szh-TW!2stw!4v1679878275927!5m2!1szh-TW!2stw"
          loading="lazy"
          allowfullscreen=""
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 class="text-xl md:text-2xl my-8 font-semibold">
              MetaverSpace 台北館
            </h2>
            <div class="space-y-6">
              <h5 class="text-lg md:text-xl">
                <font-awesome-icon
                  :icon="['fas', 'location-dot']"
                  class="ml-1"
                />
                <span class="ml-4">台北市士林區溪山里</span>
              </h5>
              <h5 class="text-lg md:text-xl">
                <font-awesome-icon :icon="['fas', 'phone']" />
                <span class="ml-4">(02) 2800-0000</span>
              </h5>
              <h5 class="text-lg md:text-xl">
                <font-awesome-icon :icon="['fas', 'clock']" />
                <span class="ml-4">10:00 ~ 22:00</span>
              </h5>
              <h5 class="text-lg md:text-xl">
                <font-awesome-icon
                  :icon="['fas', 'dollar-sign']"
                  class="ml-1"
                />
                <span class="ml-5">一人 100/小時 全館暢玩</span>
              </h5>
              <h5 class="text-lg md:text-xl">
                <font-awesome-icon :icon="['fab', 'facebook']" />
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  class="ml-4 hover:underline hover:text-primary"
                  >前往 Facebook</a
                >
              </h5>
            </div>
          </div>
          <div>
            <img
              src="@/images/reserve-district.jpg"
              class="md:mt-8 w-full h-[400px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
};
</script>

<style>
.dp__theme_dark {
  --tw-bg-opacity: 1;
  --dp-background-color: rgb(75 85 99 / var(--tw-bg-opacity));
  --dp-hover-color: rgb(0 0 0 / 0.5);
  --dp-primary-color: #39b7df;
  --dp-success-color: #39b7df;
  --dp-success-color-disabled: #7fcce3;
  --dp-danger-color: #fe5f50;
}
</style>
