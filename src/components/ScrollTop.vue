<template>
  <div
    ref="scrollTop"
    id="scrollTop"
    class="bottom-24 right-8 md:right-12 lg:right-20 z-20 cursor-pointer fixed"
    @click="gsapScrollTop()"
  >
    <FontAwesomeIcon
      :icon="['far', 'circle-up']"
      class="text-white text-3xl md:text-4xl lg:text-5xl"
    />
  </div>
</template>

<script>
import gsapMixin from "@/mixins/gsap.js";

export default {
  mixins: [gsapMixin],
  props: ["scrollId"],
  data() {
    return {
      showContent: true,
    };
  },
  beforeUnmount() {
    // Set showContent to false to remove the HTML block from the DOM
    this.showContent = false;
  },
  methods: {
    gsapScroll() {
      this.gsap.from(this.$refs.scrollTop, {
        scrollTrigger: {
          start: "top -500px",
          toggleActions: "play none none reverse",
          // markers: true,
        },
        y: -1300,
        ease: "expo",
        duration: 0.5,
      });
    },
    gsapScrollTop() {
      this.gsap.to(window, { duration: 1, scrollTo: 0 });
    },
  },
  mounted() {
    this.gsapScroll();
  },
};
</script>
