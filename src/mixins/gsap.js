// import gsap
import { gsap } from "gsap";
// get other gsap plugins
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default {
  mounted() {
    // register gsap plugins
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    this.gsap = gsap;
    this.ScrollTrigger = ScrollTrigger;
    this.ScrollToPlugin = ScrollToPlugin;
    this.ScrollTrigger.refresh();
  },
  unmounted() {
    const triggers = this.ScrollTrigger.getAll();
    triggers.forEach((trigger) => {
      trigger.kill();
    });
    this.ScrollTrigger.clearMatchMedia();
  },
};
