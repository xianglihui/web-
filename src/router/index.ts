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
        path: "/cart",
        name: "cart",
        meta: {
          title: "Cart",
          isNeedBack: false,
        },
        component: View.Cart,
      },
      {
        path: "/favorite",
        name: "favorite",
        meta: {
          title: "Favorite",
          isNeedBack: false,
        },
        component: View.Favorite,
      },
      {
        path: "/categories",
        name: "categories",
        meta: {
          title: "Categories",
          isNeedBack: false,
        },
        component: View.Categories,
      },
      {
        path: "/account",
        name: "account",
        meta: {
          title: "Account",
          isNeedBack: false,
        },
        component: View.Account,
      },
      {
        path: "/account/profile",
        name: "profile",
        meta: {
          title: "Profile",
          isNeedBack: false,
        },
        component: View.Profile,
      },
    ],
  },
  {
    path: "/welcome",
    name: "welcome",
    meta: {
      title: "welcome",
      isNeedBack: false,
    },
    component: View.Welcome,
  },
  {
    path: "/register",
    name: "register",
    meta: {
      title: "register",
      isNeedBack: true,
    },
    component: View.Register,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
