import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible/flexible";
import Vant from "vant";
import "vant/lib/index.css";
import "./utils/rem.js";
import "./common/common.css";

createApp(App).use(router).use(store).use(Vant).mount("#app");
