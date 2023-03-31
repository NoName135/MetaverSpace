<template>
  <!-- product table -->
  <div class="mt-8 px-6">
    <button
      type="button"
      class="admin-primary-button"
      @click="articleModal.show()"
    >
      新增貼文
    </button>
    <div class="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-md text-left text-gray-700">
        <thead class="text-sm text-dark uppercase bg-gray-300">
          <tr>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">發布</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">發文日期</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">發文人</th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">文章標題</th>
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
            <td class="px-6 py-4 whitespace-nowrap">2023/01/29</td>
            <td class="px-6 py-4 whitespace-nowrap">無名</td>
            <td class="px-6 py-4 whitespace-nowrap">文章標題一</td>
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
    <!-- <Pagination class="mt-8" :page-obj="pagination" @emit-page="getArticle" /> -->
  </div>
  <!-- article modal -->
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
            <label for="name" class="block mb-2 font-medium">發文人</label>
            <input
              type="text"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
              required
            />
            <h3 class="mt-6 font-medium">
              發文日期<span class="ml-4 text-lg font-semibold text-gray-900">{{
                `${new Date().getFullYear()}/${(
                  "0" +
                  (new Date().getMonth() + 1)
                ).slice(-2)}/${("0" + new Date().getDate()).slice(-2)}`
              }}</span>
            </h3>
            <h3 class="font-medium mt-6">主要圖片 (輸入網址或上傳圖片)</h3>
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
                class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500"
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
          </div>
          <div class="col-span-2 space-y-6">
            <div>
              <label for="name" class="block mb-2 font-medium">文章標題</label>
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
                required
              />
            </div>
            <div>
              <h3 class="mb-2 font-medium">文章摘要</h3>
              <div>
                <ckeditor
                  :editor="editor"
                  :config="editorConfig"
                  v-model="content"
                ></ckeditor>
              </div>
            </div>
            <div>
              <h3 class="mb-2 font-medium">詳細內容</h3>
              <div>
                <ckeditor
                  :editor="editor"
                  :config="editorConfig"
                  v-model="description"
                ></ckeditor>
              </div>
            </div>
            <div>
              <label for="tag" class="block mb-2 font-medium">標籤</label>
              <div class="grid grid-cols-5 gap-1">
                <div class="relative" v-for="(label, key) in tag" :key="key">
                  <div class="border rounded">
                    <input
                      type="text"
                      class="w-[calc(100%-1.9rem)] rounded-l-lg text-sm border-gray-300 focus:ring-violet-300"
                      id="tag"
                      v-model="tag[key]"
                      placeholder="請輸入標籤"
                    />
                    <button
                      type="button"
                      class="absolute w-8 top-0 right-0 px-3 py-2 admin-delete-solid-button rounded-l-none rounded-r-lg border text-sm"
                      @click="tag.splice(key, 1)"
                    >
                      <font-awesome-icon :icon="['fas', 'xmark']" />
                    </button>
                  </div>
                </div>
                <div class="" v-if="!tag?.length || tag[tag.length - 1]">
                  <button
                    type="button"
                    class="admin-secondary-solid-button w-full py-2"
                    @click="tag.push('')"
                  >
                    新增標籤
                  </button>
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
                    >發布</span
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
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  data() {
    return {
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
    Pagination,
  },
};
</script>

<style>
.ck-editor__editable_inline {
  min-height: 300px;
}
.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
  --tw-border-opacity: 1;
  border-color: rgb(6 148 162 / var(--tw-border-opacity));
}
</style>
