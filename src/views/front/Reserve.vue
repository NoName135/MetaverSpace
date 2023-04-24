<template>
  <div class="container mt-nav px-2 lg:px-0">
    <div class="flex flex-col md:flex-row justify-between items-center pt-8">
      <h1 class="text-primary text-2xl md:text-3xl font-bold">
        MetaverSpace 預約體驗
      </h1>
      <RouterLink
        to="/ReserveHistory"
        class="mt-4 md:mt-0 w-32 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 bg-secondary hover:bg-secondary2 focus:ring-secondary3"
      >
        預約查詢
        <font-awesome-icon
          :icon="['fas', 'arrow-up-right-from-square']"
          class="ml-2"
        />
      </RouterLink>
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
              v-model="branchTitle"
              @change="getBranch()"
            >
              <option value="台北館" class="bg-white/20" selected>
                台北館
              </option>
              <option value="台中館" class="bg-white/20">台中館</option>
              <option value="高雄館" class="bg-white/20">高雄館</option>
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
                format="yyyy/MM/dd HH:mm"
                :allowed-dates="allowDates"
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
                >人數 (1~10)</label
              >
              <input
                type="number"
                id="num"
                min="1"
                class="text-end border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
                v-model.number="num"
                @blur="
                  () => {
                    num < 1 ? (num = 1) : true;
                    num > 10 ? (num = 10) : true;
                  }
                "
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
          <V-form
            class="mt-6 space-y-6"
            ref="form"
            v-slot="{ errors }"
            @submit="createReserve"
          >
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-white"
                >姓名</label
              >
              <V-field
                type="text"
                name="姓名"
                id="name"
                class="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
                :class="{ 'border-warm': errors['姓名'] }"
                rules="required"
                placeholder="請輸入姓名"
                required
              />
              <ErrorMessage
                name="姓名"
                class="text-warm text-sm"
              ></ErrorMessage>
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-white"
                >電話 (請輸入手機格式：09)</label
              >
              <V-field
                type="tel"
                name="電話"
                id="name"
                class="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
                :class="{ 'border-warm': errors['電話'] }"
                rules="required|phone"
                placeholder="請輸入電話"
                required
              />
              <ErrorMessage
                name="電話"
                class="text-warm text-sm"
              ></ErrorMessage>
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-white"
                >Email</label
              >
              <V-field
                type="tel"
                name="email"
                id="name"
                class="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
                :class="{ 'border-warm': errors['email'] }"
                rules="required|email"
                placeholder="請輸入email"
                required
              />
              <ErrorMessage
                name="email"
                class="text-warm text-sm"
              ></ErrorMessage>
            </div>
            <div>
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-white"
                >備註</label
              >
              <V-field
                id="message"
                as="textarea"
                name="備註"
                rows="4"
                class="block p-2.5 w-full text-sm bg-gray-600 border-gray-500 placeholder-gray-400 rounded-lg border focus:ring-primary focus:border-primary text-white"
                placeholder="請輸入備註"
              ></V-field>
            </div>
            <div class="mt-8 flex flex-col">
              <div class="flex items-center">
                <V-field
                  id="agreeCheck"
                  type="checkbox"
                  name="同意"
                  :value="true"
                  class="w-4 h-4 text-primary rounded focus:ring-primary ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
                  :class="{ 'border-warm': errors['同意'] }"
                  rules="agree"
                />
                <label
                  for="agreeCheck"
                  class="ml-2 text-sm font-medium text-gray-300"
                  >我已詳閱並同意以下約定條款</label
                >
              </div>
              <ErrorMessage
                name="同意"
                class="text-warm text-sm ml-6 mt-1"
              ></ErrorMessage>
            </div>
            <div>
              <p class="text-sm">
                1. 預約查詢經審核後顯示預約成功才算完成預約。
              </p>
              <p class="mt-2 text-sm">
                2. 若需取消預約請於 1 小時前於線上或來電取消。
              </p>
              <p class="mt-2 text-sm">
                3. 逾時 15 分鐘未入場將自動取消並列入黑名單。
              </p>
            </div>
            <button type="submit" class="mt-6 w-full primary-button">
              送出預約
            </button>
          </V-form>
        </div>
      </div>
      <div class="lg:col-span-2 bg-black/50 rounded p-4">
        <iframe
          class="w-full h-[240px] sm:h-[360px] md:h-[480px] mx-auto border-0 rounded"
          :src="branch.src"
          loading="lazy"
          allowfullscreen=""
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 class="text-xl md:text-2xl my-8 font-semibold">
              MetaverSpace {{ branch.title }}
            </h2>
            <div class="space-y-6">
              <h5 class="text-lg md:text-xl">
                <font-awesome-icon
                  :icon="['fas', 'location-dot']"
                  class="ml-1"
                />
                <span class="ml-4">{{ branch.address }}</span>
              </h5>
              <h5 class="text-lg md:text-xl">
                <font-awesome-icon :icon="['fas', 'phone']" />
                <span class="ml-4">{{ branch.tel }}</span>
              </h5>
              <h5 class="text-lg md:text-xl">
                <font-awesome-icon :icon="['fas', 'clock']" />
                <span class="ml-4">{{ branch.open_time }}</span>
              </h5>
              <h5 class="text-lg md:text-xl">
                <font-awesome-icon
                  :icon="['fas', 'dollar-sign']"
                  class="ml-1"
                />
                <span class="ml-5">{{ branch.price }}</span>
              </h5>
              <h5 class="text-lg md:text-xl">
                <font-awesome-icon :icon="['fab', 'facebook']" />
                <a
                  :href="branch.facebook"
                  target="_blank"
                  class="ml-4 hover:underline hover:text-primary"
                  >前往 Facebook</a
                >
              </h5>
            </div>
          </div>
          <div>
            <img
              :src="branch.image"
              class="md:mt-8 w-full h-[420px] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loadingStore from "@/stores/loadingStore.js";

import { mapState } from "pinia";

import swalMixin from "@/mixins/swal.js";
export default {
  mixins: [swalMixin],
  data() {
    return {
      branches: [],
      branch: {},
      branchTitle: "台北館",
      date: null,
      num: 1,
      allowDates: [],
    };
  },
  methods: {
    getBranches() {
      this.loadings.fullLoading = true;
      this.$http
        .get("https://metarverspace-server.onrender.com/branches")
        .then((res) => {
          // console.log(res.data);
          this.branches = res.data;
          this.branch = res.data[0];
          this.loadings.fullLoading = false;
        })
        .catch((err) => {
          this.loadings.fullLoading = false;
          this.userToast("error", err.message);
        });
    },
    getBranch() {
      this.branches.forEach((item) => {
        if (item.title === this.branchTitle) {
          this.branch = item;
        }
      });
    },
    createReserve(values) {
      // console.log(values);
      this.loadings.fullLoading = true;
      this.$http
        .post("https://metarverspace-server.onrender.com/reserves", {
          title: this.branchTitle,
          reserve_time: Date.parse(this.date),
          num: this.num,
          name: values["姓名"].trim(),
          tel: values["電話"],
          email: values["email"],
          message: values["備註"],
          is_reserve: false,
        })
        .then(() => {
          this.userToast("success", "預約成功");
          this.num = 1;
          this.$refs.form.resetForm();
          this.loadings.fullLoading = false;
        })
        .catch((err) => {
          this.loadings.fullLoading = false;
          this.userToast("error", err.message);
        });
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
  mounted() {
    // 日期預設為 2 天後的 10:00
    this.date = new Date(
      new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).setHours(10, 0, 0, 0)
    );
    // Vue-datepicker 可選擇的日期
    this.allowDates = Array.from(
      { length: 14 },
      (_, index) => new Date(Date.now() + (index + 2) * 24 * 60 * 60 * 1000)
    );

    this.getBranches();
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
