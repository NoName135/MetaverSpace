<template>
  <IndexTitle />
  <IndexCard />
  <IndexCategory />
  <IndexProduct />
</template>

<script>
import IndexTitle from '@/components/index/IndexTitle.vue';
import IndexCard from '@/components/index/IndexCard.vue';
import IndexCategory from '@/components/index/IndexCategory.vue';
import IndexProduct from '@/components/index/IndexProduct.vue'

export default {
  components:{
    IndexTitle,
    IndexCard,
    IndexCategory,
    IndexProduct
  }
}
</script>
