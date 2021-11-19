import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible/flexible";
import Vant from "vant";
import "vant/lib/index.css";
import "./utils/rem.js";
import "./common/common.css";
import "./common/rest.scss";
const noNavBar = ["welcome"];
router.beforeEach((to, from, next) => {
  const title = to.meta.title as string;
  const isNeedBack = to.meta.isNeedBack as boolean;
  console.log("@", isNeedBack);
  store.commit("setBar", !noNavBar.includes(title));
  store.commit("setTitle", title);
  store.commit("setBack", isNeedBack);
  next();
});

createApp(App).use(router).use(store).use(Vant).mount("#app");
