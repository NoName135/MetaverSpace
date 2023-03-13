<template>
  <div>
    <!-- 頁碼 -->
    <div class="mt-8 flex justify-center">
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Pagination,
  },
};
</script>
