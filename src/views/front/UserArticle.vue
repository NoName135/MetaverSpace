<template>
  <div
    class="h-[480px] lg:h-[720px] bg-cover bg-center mx-2 lg:mx-0 mt-10 rounded"
    :style="{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${article.image})`,
    }"
  >
    <div class="flex flex-col justify-around h-full items-center">
      <div>
        <h2 class="font-bold text-3xl lg:text-4xl text-center">
          {{ article.title }}
        </h2>
        <p
          class="mt-8 text-xl leading-relaxed lg:text-2xl lg:leading-loose text-center prose prose-front prose-styles"
          v-html="article.description"
        />
      </div>
      <p
        class="mt-8 text-lg leading-relaxed lg:text-xl lg:leading-loose text-center prose prose-front prose-styles"
        v-html="article.content"
      />
    </div>
  </div>
</template>

<script>
import loadingStore from '@/stores/loadingStore.js'
import { mapState } from 'pinia'

const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      article: {}
    }
  },
  methods: {
    getArticle (id) {
      this.$emit('emitId', this.$route.params.id)
      this.loadings.fullLoading = true
      this.$http
        .get(`${VITE_API}/api/${VITE_PATH}/article/${id}`)
        .then((res) => {
          // console.log(res.data);
          this.article = res.data.article
          this.loadings.fullLoading = false
        })
        .catch((err) => {
          this.loadings.fullLoading = false
          // console.log(err);
          // Swal
          this.userToast('error', err.response.data.message)
        })
    }
  },
  computed: {
    ...mapState(loadingStore, ['loadings'])
  },
  watch: {
    // 在路由發生變化時重新渲染
    $route (to) {
      if (to.fullPath.includes('article')) {
        this.getArticle(this.$route.params.id)
      }
    }
  },
  mounted () {
    this.getArticle(this.$route.params.id)
  }
}
</script>
