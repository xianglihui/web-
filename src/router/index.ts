import { createRouter, createWebHashHistory } from "vue-router"; 
const routes = [
  {
    path: "/index",
    name: "index",
    meta: {
      title: "首页",
      keepAlive: true
    },
    component: () => import("../views/index/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
      keepAlive: true
    },
    component: () => import("../views/login/index.vue"),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;