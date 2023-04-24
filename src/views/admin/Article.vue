<template>
  <!-- Article table -->
  <div class="mt-8 px-6">
    <button
      type="button"
      class="admin-primary-button"
      @click="articleModal.openModal('new')"
    >
      新增貼文
    </button>
    <div class="mt-6 relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-md text-left text-gray-700">
        <thead class="text-sm text-dark uppercase bg-gray-300">
          <tr>
            <th scope="col" class="sr-only">Loading</th>
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
          <tr
            class="bg-white border-b hover:bg-teal-100"
            v-for="article in articles"
            :key="article.id"
          >
            <td class="px-3 w-6 max-w-[1.5rem]">
              <svg
                v-if="articleLoading.indexOf(article.id) > -1"
                class="animate-spin h-5 w-5 mr-3 text-dark"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </td>
            <td class="px-6 font-medium whitespace-nowrap">
              <div class="w-9">
                <label
                  :class="[
                    'relative',
                    articleLoading.indexOf(article.id) > -1
                      ? 'cursor-not-allowed'
                      : 'cursor-pointer',
                  ]"
                >
                  <input
                    type="checkbox"
                    class="sr-only peer disabled:ring-4"
                    :disabled="articleLoading.indexOf(article.id) > -1"
                    :checked="article.isPublic"
                    v-model="article.isPublic"
                    @change="updateEnable(article)"
                  />
                  <div
                    class="w-full h-5 bg-gray-500 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all border-gray-300 peer-checked:bg-teal-600"
                  ></div>
                </label>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              {{ $filters.date(article.create_at) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">{{ article.author }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ article.title }}</td>
            <td
              class="px-6 py-4 whitespace-nowrap flex justify-center space-x-6"
            >
              <button
                type="button"
                :disabled="articleLoading.indexOf(article.id) > -1"
                class="admin-secondary-button px-3.5 py-1.5"
                @click="articleModal.openModal('edit', article.id)"
              >
                編輯
              </button>
              <button
                type="button"
                :disabled="articleLoading.indexOf(article.id) > -1"
                class="admin-delete-button px-3.5 py-1.5"
                @click="deleteModal.openModal('文章', article)"
              >
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Pagination class="mt-8" :page-obj="pagination" @emit-page="getArticles" />
  </div>
  <!-- article modal -->
  <ArticleModal
    ref="articleModal"
    :page="pagination.current_page"
    @update-articles="getArticles"
  />
  <!-- delete modal -->
  <DeleteModal
    ref="deleteModal"
    :page="
      articles.length > 1
        ? pagination.current_page
        : pagination.current_page - 1
    "
    @update-articles="getArticles"
  />
</template>

<script>
import Pagination from "@/components/AdminPagination.vue";
import ArticleModal from "@/components/modal/ArticleModal.vue";
import DeleteModal from "@/components/modal/DeleteModal.vue";

import swalMixin from "@/mixins/swal.js";

import { mapState } from "pinia";
import loadingStore from "@/stores/loadingStore.js";
const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  mixins: [swalMixin],
  data() {
    return {
      articles: [],
      pagination: {},
      articleLoading: [],
    };
  },
  methods: {
    getArticles(page = 1, process) {
      this.loadings.fullLoading = true;
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/admin/articles?page=${page}`)
        .then((res) => {
          console.log(res.data);
          const { articles, pagination } = res.data;
          this.articles = articles;
          this.pagination = pagination;
          this.loadings.fullLoading = false;

          if (process === "update") {
            // Swal
            this.adminToast("success", "已更新貼文資料");
          } else if (process === "delete") {
            // SWal
            this.adminToast("success", `已刪除貼文資料`);
          }
          // 點擊頁碼後移動到上方
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        })
        .catch((err) => {
          // console.log(err);
          this.loadings.fullLoading = false;
          // Swal
          this.adminToast("error", err.response.data.message);
        });
    },
    async updateEnable(article) {
      // content 屬性要使用 article/{id} 的 API 才會出現
      try {
        this.articleLoading.push(article.id);
        const { data } = await this.$http.get(
          `${VITE_API}/api/${VITE_PATH}/admin/article/${article.id}`
        );
        // console.log(data);
        const content = data.article.content;
        await this.$http.put(
          `${VITE_API}/api/${VITE_PATH}/admin/article/${article.id}`,
          {
            data: { ...article, content },
          }
        );

        this.articleLoading.shift();
        this.adminToast("success", "已更新發布狀態");
      } catch (err) {
        // console.log(err);
        this.articleLoading.shift();
        this.adminToast("error", err.response.data.message);
        this.getArticles(this.page.current_page);
      }
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
  mounted() {
    this.articleModal = this.$refs.articleModal;
    this.deleteModal = this.$refs.deleteModal;
    this.getArticles();
  },
  components: {
    Pagination,
    ArticleModal,
    DeleteModal,
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
