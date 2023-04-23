<template>
  <div class="container mt-nav">
    <div class="pt-6 px-2 w-full max-w-2xl mx-auto">
      <h1
        class="bg-white/20 border text-gray-300 py-6 text-xl md:text-2xl text-center rounded-t"
      >
        聯絡客服團隊
      </h1>
      <V-form
        ref="form"
        class="border px-4 py-8 rounded-b"
        v-slot="{ errors }"
        @submit="sendQuest"
      >
        <div class="pb-6 border-b">
          <label for="name" class="block mb-2 text-sm font-medium text-white"
            >您的姓名</label
          >
          <V-field
            type="text"
            id="name"
            name="姓名"
            class="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
            :class="{ 'border-warm': errors['姓名'] }"
            rules="required"
            placeholder="請輸入姓名"
            required
          />
          <ErrorMessage name="姓名" class="text-warm text-sm"></ErrorMessage>
          <label
            for="tel"
            class="block mt-6 mb-2 text-sm font-medium text-white"
            >您的電話 (請輸入手機格式：09)</label
          >
          <V-field
            type="tel"
            id="tel"
            name="電話"
            class="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
            :class="{ 'border-warm': errors['電話'] }"
            rules="required|phone"
            placeholder="請輸入電話"
            required
          />
          <ErrorMessage name="電話" class="text-warm text-sm"></ErrorMessage>
          <label
            for="email"
            class="block mt-6 mb-2 text-sm font-medium text-white"
            >您的Email</label
          >
          <V-field
            type="email"
            id="email"
            name="email"
            class="border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white focus:ring-primary focus:border-primary"
            :class="{ 'border-warm': errors['email'] }"
            rules="required|email"
            placeholder="請輸入Email"
            required
          />
          <ErrorMessage name="email" class="text-warm text-sm"></ErrorMessage>
          <label
            for="message"
            class="block mt-6 mb-2 text-sm font-medium text-white"
            >您遇到的問題</label
          >
          <V-field
            id="message"
            name="遇到的問題"
            as="textarea"
            rows="4"
            class="block p-2.5 w-full text-sm bg-gray-600 border-gray-500 placeholder-gray-400 rounded-lg border focus:ring-primary focus:border-primary text-white"
            :class="{ 'border-warm': errors['遇到的問題'] }"
            rules="required"
            placeholder="請詳述您的問題"
            required
          ></V-field>
          <ErrorMessage
            name="遇到的問題"
            class="text-warm text-sm"
          ></ErrorMessage>
          <div class="mt-6 mb-4 md:mb-6 flex flex-col md:flex-row">
            <div>
              <label
                for="file"
                class="whitespace-nowrap w-20 focus:outline-none focus:ring-4 font-medium rounded text-sm px-5 py-2.5 hover:bg-secondary2 focus:ring-secondary3"
                :class="[
                  images.length === 5
                    ? 'bg-secondary2 text-gray-400 cursor-not-allowed'
                    : 'bg-secondary cursor-pointer',
                ]"
                >上傳圖片</label
              >
              <input
                id="file"
                type="file"
                accept="image/png, image/jpeg"
                class="absolute top-0 w-0"
                @change="(e) => handleFile(e)"
                :disabled="images.length === 5"
              />
            </div>
            <p class="mt-6 md:mt-0 md:ml-4 text-sm md:text-md">
              (最多 5 張圖，圖片需小於 2MB)
            </p>
          </div>
          <div
            class="ml-4 flex items-center"
            v-for="(image, i) in images"
            :key="i"
          >
            <p>{{ image.name }}</p>
            <font-awesome-icon
              :icon="['fas', 'xmark']"
              class="ml-4 cursor-pointer text-warm hover:text-warm2 text-lg"
              @click="images.splice(i, 1)"
            />
          </div>
        </div>
        <p class="mt-4 text-sm md:text-md">
          您提供之姓名、電子信箱等個人資料僅供本服務相關目的及範圍內處理或使利用，絕對不向任何人提供您的個人資訊。
        </p>
        <div class="mt-6 w-full flex justify-end">
          <button type="submit" class="primary-button">提交問題</button>
        </div>
      </V-form>
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
      images: [],
    };
  },
  methods: {
    sendQuest(values) {
      console.log(values);
      this.loadings.fullLoading = true;
      this.$http
        .post("https://metarverspace-server.onrender.com/contacts", {
          name: values["姓名"].trim(),
          tel: values["電話"],
          email: values["email"],
          images: this.images,
          content: values["遇到的問題"],
        })
        .then(() => {
          // console.log(res.data)
          this.$refs.form.resetForm();
          this.images = [];
          this.loadings.fullLoading = false;
          //Swal
          this.userToast("success", "成功提交問題");
        })
        .catch((err) => {
          this.loadings.fullLoading = false;
          //Swal
          this.userToast("error", err.message);
        });
    },
    handleFile(event) {
      // 上傳圖片到 Imgur
      // 在 Localhost 執行的話 index.html需加入 <meta name="referrer" content="no-referrer">
      console.log(event.target.files[0]);
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      if (file.size > 2 * 1024 * 1024) {
        this.userAlert("warning", "圖片上傳失敗", "圖片需小於 2MB");
        return;
      }
      if (file) {
        this.loadings.fullLoading = true;
        this.$http
          .post("https://api.imgur.com/3/image", formData, {
            headers: {
              Authorization: "Client-ID " + "0361c3fa7d90333",
            },
            mimeType: "multipart/form-data",
          })
          .then((res) => {
            // console.log(res.data);
            this.images.push({ name: file.name, src: res.data.data.link });
            this.loadings.fullLoading = false;
            this.userToast("success", "圖片上傳成功");
          })
          .catch((err) => {
            this.loadings.fullLoading = false;
            // Swal
            this.userAlert(
              "error",
              "圖片上傳失敗",
              err.response.data.data.error
            );
          });
      }
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
};
</script>
