import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./index.css";

import App from "./App.vue";
import router from "./router";

// axios
import axios from "axios";
import VueAxios from "vue-axios";

// vue-loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faShoppingCart, faHeart, faXmark, faPhone, faArrowDown, faChevronRight, faTruckFast, faDollarSign, faScrewdriverWrench, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCircleUp } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faCircleUp, faSpinner, faShoppingCart, faHeart, faXmark, faPhone, faFacebook, faInstagram, faArrowDown, faChevronRight, faTruckFast, faDollarSign, faScrewdriverWrench, faEnvelope);

// vee-validate
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import AllRules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
// vee-validate 規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
defineRule("phone", (value) => {
  const phoneNumber = /^(09)[0-9]{8}$/;
  if (phoneNumber.test(value)) {
    return true;
  } else {
    return "請輸入手機號碼格式";
  }
});
// vee-validate 語系
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  // validateOnInput: true, // 當輸入任何內容直接進行驗證
});
setLocale("zh_TW"); // 設定預設語系

createApp(App)
  .use(createPinia())
  .use(router)
  .use(VueAxios, axios)
  .component("VueLoading", Loading)
  .component("FontAwesomeIcon", FontAwesomeIcon)
  .component("VForm", Form)
  .component("VField", Field)
  .component("ErrorMessage", ErrorMessage)
  .mount("#app");

