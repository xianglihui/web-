import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import BaseLayout from "../components/baseLayout.vue";
import * as View from "../views";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/layout",
    component: BaseLayout,
    name: "BaseLayout",
    redirect: { name: "Index" },
    children: [
      {
        path: "/index",
        name: "index",
        meta: {
          title: "Lungangen",
          isNeedBack: false,
        },
        component: View.Index,
      },
      {
        path: "/login",
        name: "login",
        meta: {
          title: "登录",
          isNeedBack: false,
        },
        component: View.Login,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
