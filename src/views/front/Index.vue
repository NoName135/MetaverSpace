<template>
  <div :class="[loading ? 'w-full h-screen overflow-hidden' : '']">
    <IndexTitle :loading="loading" />
    <IndexCard />
    <IndexCategory />
    <IndexProduct @loading="changeLoading" />
  </div>
</template>

<script>
import IndexTitle from '@/components/index/IndexTitle.vue'
import IndexCard from '@/components/index/IndexCard.vue'
import IndexCategory from '@/components/index/IndexCategory.vue'
import IndexProduct from '@/components/index/IndexProduct.vue'

export default {
  data () {
    return {
      loading: true
    }
  },
  methods: {
    changeLoading (status) {
      this.loading = status
    }
  },
  components: {
    IndexTitle,
    IndexCard,
    IndexCategory,
    IndexProduct
  }
}
</script>
