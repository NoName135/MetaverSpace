<template>
  <VueLoading />
  <RouterView />
</template>

<script>
import VueLoading from '@/components/VueLoading.vue'

export default {
  components: {
    VueLoading
  }
}
</script>

<style>
@import "./assets/main.css";
</style>
