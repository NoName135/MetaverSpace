// import gsap
import { gsap } from "gsap";
// get other gsap plugins
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default {
  mounted() {
    ScrollTrigger.refresh();
    // register gsap plugins
    gsap.registerPlugin(ScrollTrigger);
    this.ScrollTrigger = ScrollTrigger;
    gsap.registerPlugin(ScrollToPlugin);
    this.ScrollToPlugin = ScrollToPlugin;
    this.gsap = gsap;
  },
  unmounted() {
    const triggers = this.ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      trigger.kill();
    });
    this.ScrollTrigger.clearMatchMedia();
  },
};
