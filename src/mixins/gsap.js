// import gsap
import { gsap } from 'gsap'
// get other gsap plugins
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
// register gsap plugins
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

export default {
  mounted () {
    ScrollTrigger.refresh()
    this.gsap = gsap
    this.ScrollTrigger = ScrollTrigger
  },
  unmounted () {
    const triggers = ScrollTrigger.getAll()
    triggers.forEach((trigger) => {
      trigger.kill()
    })
    ScrollTrigger.clearMatchMedia()
  }
}
