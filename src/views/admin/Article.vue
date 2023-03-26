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
    <Pagination class="mt-8" />
  </div>
  <!-- article modal -->
  <div
    ref="articleModal"
    id="articleModal"
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
        <div class="p-6 mt-12">
          <div class="w-full max-w-2xl mx-auto space-y-6">
            <h3 class="font-medium">
              發文人<span class="ml-8 text-lg font-semibold text-gray-900"
                >無名</span
              >
            </h3>
            <h3 class="font-medium">
              發文日期<span class="ml-4 text-lg font-semibold text-gray-900"
                >2023/01/29</span
              >
            </h3>
            <div>
              <label for="name" class="block mb-2 font-medium">文章標題</label>
              <input
                type="text"
                id="name"
                class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 w-full p-2.5"
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
      // https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/vuejs-v3.html#editor
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
</style>
