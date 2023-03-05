<template>
  <IndexTitle />
  <IndexCard />
  <IndexCategory />
  <IndexProduct />

  <div
    ref="scroll"
    class="bottom-24 right-8 md:right-12 lg:right-20 z-50 cursor-pointer fixed"
    @click="gsapScrollTop()"
  >
    <font-awesome-icon
      :icon="['far', 'circle-up']"
      class="text-white text-3xl md:text-4xl lg:text-5xl"
    />
  </div>
</template>

<script>
import IndexTitle from '@/components/index/IndexTitle.vue';
import IndexCard from '@/components/index/IndexCard.vue';
import IndexCategory from '@/components/index/IndexCategory.vue';
import IndexProduct from '@/components/index/IndexProduct.vue';

import gsapMixin from "@/mixins/gsap.js";

export default {
  mixins: [gsapMixin],
  methods: {
    gsapScroll() {
      this.gsap.from(this.$refs.scroll, {
        scrollTrigger: {
          start: "top -500px",
          toggleActions:"play none none reverse",
          markers: true,
        },
        y:-1000, ease:"expo", duration: 0.5
      })
    },
    gsapScrollTop() {
      this.gsap.to(window, {duration: 1, scrollTo: 0});
    }
  },
  mounted() {
    this.gsapScroll();
  },
  components:{
    IndexTitle,
    IndexCard,
    IndexCategory,
    IndexProduct
  }
}
</script>
