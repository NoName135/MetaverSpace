<template>
  <div
    ref="articleModal"
    id="articleModal"
    tabindex="-1"
    class="hidden fixed z-40 w-full px-4 overflow-x-hidden overflow-y-auto top-28 left-0 right-0 h-auto"
  >
    <div class="w-full max-w-7xl h-full max-h-[calc(100vh-8.5rem)]">
      <!-- Modal content -->
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <!-- Modal header -->
        <div
          class="flex items-start justify-between p-4 border-b bg-black top-[6rem] w-[calc(100%-2rem)] lg:w-[calc(100%-3rem)] max-w-7xl z-50 rounded-t-lg fixed"
        >
          <h3 class="text-xl font-semibold text-gray-300">編輯貼文</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-600 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            @click="articleModal.hide()"
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
            <label for="name" class="block mb-2 font-medium"
              >發文人<span class="font-bold text-rose-500">*</span></label
            >
            <input
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
              required
              v-model="tempArticle.author"
            />
            <h3 class="mt-6 font-medium">
              發文日期<span class="ml-4 text-lg font-semibold text-gray-900">{{
                $filters.date(tempArticle.create_at)
              }}</span>
            </h3>
            <h3 class="font-medium mt-6">
              背景圖片 (輸入網址或上傳圖片)<span class="font-bold text-rose-500"
                >*</span
              >
            </h3>
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
                type="text"
                id="mainImgLink"
                class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
                placeholder="請輸入圖片網址"
                required
                v-model.lazy="tempArticle.image"
              />
            </div>
            <UploadImg @change-img="changeImage">
              <!-- 清空 multi slot -->
              <template #multi><span /></template>
              <!-- 清空 detail slot -->
              <template #detail><span /></template>
            </UploadImg>
            <img
              :src="tempArticle.image"
              class="mt-4 w-full h-80 object-cover object-center"
              v-if="tempArticle.image"
            />
          </div>
          <div class="col-span-2 space-y-6">
            <div>
              <label for="name" class="block mb-2 font-medium"
                >文章標題<span class="font-bold text-rose-500">*</span></label
              >
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                required
                v-model="tempArticle.title"
              />
            </div>

            <div>
              <label for="tag" class="block mb-2 font-medium">標籤</label>
              <div class="grid grid-cols-5 gap-1">
                <div
                  class="relative"
                  v-for="(item, i) in tempArticle.tag"
                  :key="i"
                >
                  <div class="border rounded">
                    <input
                      type="text"
                      class="w-[calc(100%-1.9rem)] rounded-l-lg text-sm border-gray-300 focus:ring-violet-300"
                      id="tag"
                      v-model="tempArticle.tag[i]"
                      placeholder="請輸入標籤"
                    />
                    <button
                      type="button"
                      class="absolute w-8 top-0 right-0 px-3 py-2 admin-delete-solid-button rounded-l-none rounded-r-lg border text-sm"
                      @click="tempArticle.tag.splice(i, 1)"
                    >
                      <font-awesome-icon :icon="['fas', 'xmark']" />
                    </button>
                  </div>
                </div>
                <div
                  class=""
                  v-if="
                    !tempArticle.tag?.length ||
                    tempArticle.tag[tempArticle.tag.length - 1]
                  "
                >
                  <button
                    type="button"
                    class="admin-secondary-solid-button w-full py-2"
                    @click="tempArticle.tag.push('')"
                  >
                    新增標籤
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h3 class="mb-2 font-medium">文章摘要</h3>
              <div class="prose max-w-full prose-p:my-0">
                <ckeditor
                  :editor="editor"
                  :config="editorConfig"
                  v-model="tempArticle.description"
                ></ckeditor>
              </div>
            </div>
            <div>
              <h3 class="mb-2 font-medium">
                詳細內容<span class="font-bold text-rose-500">*</span>
              </h3>
              <div class="prose max-w-full prose-p:my-0">
                <ckeditor
                  :editor="editor"
                  :config="editorConfig"
                  v-model="tempArticle.content"
                ></ckeditor>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    class="sr-only peer"
                    :checked="tempArticle.isPublic"
                    v-model="tempArticle.isPublic"
                  />
                  <div
                    class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"
                  ></div>
                  <span class="ml-3 text-md font-medium text-gray-900">{{
                    tempArticle.isPublic ? "已發布" : "未發布"
                  }}</span>
                </label>
              </div>
              <div class="flex justify-end">
                <button
                  type="button"
                  class="admin-delete-button"
                  @click="articleModal.hide()"
                >
                  取消
                </button>
                <button
                  type="button"
                  class="ml-6 admin-primary-button"
                  :disabled="
                    !tempArticle.author ||
                    !tempArticle.image ||
                    !tempArticle.title ||
                    !tempArticle.content
                  "
                  :title="[
                    !tempArticle.author ||
                    !tempArticle.image ||
                    !tempArticle.title ||
                    !tempArticle.content
                      ? '&quot;*&quot;號為必填欄位'
                      : '',
                  ]"
                  @click="updateArticle()"
                >
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
import UploadImg from "@/components/UploadImg.vue";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { Modal } from "flowbite";

import { mapState } from "pinia";
import loadingStore from "@/stores/loadingStore.js";

import swalMixin from "@/mixins/swal.js";

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  props: ["page"],
  mixins: [swalMixin],
  data() {
    return {
      isNew: true,
      tempArticle: [],
      editor: ClassicEditor,
      editorConfig: {
        toolbar: [
          "heading",
          "bold",
          "italic",
          "|",
          "undo",
          "redo",
          "|",
          "numberedList",
          "bulletedList",
          "|",
          "link",
        ],
      },
      content: "預設文章摘要",
      description: "預設詳細內容",
      tag: [],
    };
  },
  methods: {
    openModal(type, id) {
      if (type === "new") {
        this.isNew = true;
        this.tempArticle = {
          create_at: Date.now() / 1000,
          tag: [],
          isPublic: false,
        };
        this.articleModal.show();
      } else {
        this.isNew = false;
        this.loadings.fullLoading = true;
        this.$http
          .get(`${VITE_API}/api/${VITE_PATH}/admin/article/${id}`)
          .then((res) => {
            // console.log(res.data);
            const article = res.data.article;
            this.tempArticle.tag
              ? (this.tempArticle = { ...article })
              : (this.tempArticle = { ...article, tag: [] });
            this.articleModal.show();
            this.loadings.fullLoading = false;
          })
          .catch((err) => {
            // console.log(err);
            this.loadings.fullLoading = false;
            // Swal
            this.adminToast("error", err.response.data.message);
          });
      }
      // modal 移到最上方
      this.$refs.articleModal.scrollTop = 0;
    },
    // 更新貼文資料
    updateArticle() {
      let httpVerb = "post";
      let url = `${VITE_API}/api/${VITE_PATH}/admin/article`;

      if (!this.isNew) {
        httpVerb = "put";
        url = `${VITE_API}/api/${VITE_PATH}/admin/article/${this.tempArticle.id}`;
      }

      this.loadings.fullLoading = true;
      this.$http[httpVerb](url, {
        data: this.tempArticle,
      })
        .then(() => {
          // console.log(res.data);
          this.$emit("updateArticles", this.page, "update");
          this.articleModal.hide();
        })
        .catch((err) => {
          // console.log(err);
          // Swal
          this.adminToast("error", err.response.data.message);
        });
    },
    changeImage(index, target, imgUrl) {
      // console.log(index, target, imgUrl);
      this.tempArticle.image = imgUrl;
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
  mounted() {
    // modal options
    const modalOptions = {
      placement: "center",
      backdrop: "static",
      backdropClasses: "bg-black bg-opacity-80 fixed inset-0 z-30",
      closable: true,
    };
    this.articleModal = new Modal(this.$refs.articleModal, modalOptions);
  },
  components: {
    UploadImg,
  },
};
</script>
