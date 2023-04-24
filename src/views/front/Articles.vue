<template>
  <div class="container mt-nav">
    <div class="pt-8">
      <RouterLink
        to="../products"
        class="cursor-pointer hover:text-primary text-xl mx-2 lg:mx-0 hover:underline"
      >
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
        返回商品列表
      </RouterLink>

      <RouterView @emit-id="getPageLink"></RouterView>

      <div class="flex justify-end mt-8 mb-6">
        <RouterLink
          v-if="article.index - 1 >= 0"
          :to="`/article/${articles[article.index - 1]?.id}`"
          class="pr-4 cursor-pointer hover:text-primary text-xl lg:mx-0 hover:underline"
        >
          <font-awesome-icon :icon="['fas', 'chevron-left']" />
          上一篇
        </RouterLink>
        <p v-else>
          <span class="pr-4 cursor-not-allowed text-xl lg:mx-0 text-gray-400">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
            上一篇
          </span>
        </p>
        <RouterLink
          v-if="article.index + 1 < articles.length"
          :to="`/article/${articles[article.index + 1]?.id}`"
          class="pl-4 cursor-pointer hover:text-primary text-xl lg:mx-0 hover:underline"
        >
          下一篇
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </RouterLink>
        <p v-else>
          <span class="pr-4 cursor-not-allowed text-xl lg:mx-0 text-gray-400">
            下一篇
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import loadingStore from "@/stores/loadingStore.js";

import swalMixin from "@/mixins/swal.js";
import { mapState } from "pinia";

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  mixins: [swalMixin],
  data() {
    return {
      article: { id: "", index: null },
      articles: [],
      pagePrev: "",
      pageNext: "",
    };
  },
  methods: {
    getArticles() {
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/articles`)
        .then((res) => {
          // console.log(res.data);
          this.articles = res.data.articles;
          this.getPageLink(this.article.id);
        })
        .catch((err) => {
          this.loadings.fullLoading = false;
          // console.log(err);
          // Swal
          this.userToast("error", err.response.data.message);
        });
    },
    getPageLink(id) {
      this.article.id = id;
      if (this.articles.length > 0) {
        this.article.index = this.articles.findIndex((item) => {
          return item.id === id;
        });
      } else {
        this.getArticles();
      }
    },
  },
  computed: {
    ...mapState(loadingStore, ["loadings"]),
  },
};
</script>
