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
import { api } from "./axios/apis";
// 控制头部config
const noNavBar = ["Welcome", "Product", "ConfirmOrder"];
router.beforeEach((to, from, next) => {
  const title = to.meta.title as string;
  (document as any).title = to.meta.title;
  const isNeedBack = to.meta.isNeedBack as boolean;
  const isNeedAdd = to.meta.isNeedAdd as boolean;
  store.commit("setBar", !noNavBar.includes(title));
  store.commit("setTitle", title);
  store.commit("setBack", isNeedBack);
  store.commit("setAdd", isNeedAdd);
  next();
});
// console.log("import.meta.env.BASE_URL",import.meta.env.BASE_URL)
// console.log("import.meta.env",import.meta.env)
// console.log("import.meta.env.VITE_API_URL",import.meta.env.VITE_API_URL)
const app = createApp(App);
app.config.globalProperties.$testApi = api;
app.use(router).use(store).use(Vant).mount("#app");
