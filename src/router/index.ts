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
        path: "/fruits",
        name: "fruits",
        meta: {
          title: "Fruits",
          isNeedBack: false,
        },
        component: View.Fruits,
      },
      {
        path: "/product",
        name: "product",
        meta: {
          title: "Product",
          isNeedBack: false,
        },
        component: View.Product,
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
        path: "/order",
        name: "order",
        meta: {
          title: "order",
          isNeedBack: false,
        },
        component: View.Order,
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
      {
        path: "/account/profile/edit",
        name: "editProfile",
        meta: {
          title: "Edit Profile",
          isNeedBack: false,
        },
        component: View.EditProfile,
      },
      {
        path: "/account/change",
        name: "changePassword",
        meta: {
          title: "Change Password",
          isNeedBack: false,
        },
        component: View.ChangePassword,
      },
      {
        path: "/account/newCard",
        name: "changePassword",
        meta: {
          title: "New Card",
          isNeedBack: false,
        },
        component: View.NewCard,
      },
      {
        path: "/account/myCards",
        name: "changePassword",
        meta: {
          title: "My Cards",
          isNeedBack: false,
        },
        component: View.MyCard,
      },
    ],
  },
  {
    path: "/welcome",
    name: "welcome",
    meta: {
      title: "Welcome",
      isNeedBack: false,
    },
    component: View.Welcome,
  },
  {
    path: "/register",
    name: "register",
    meta: {
      title: "Sign Up",
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
