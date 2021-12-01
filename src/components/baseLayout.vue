<template>
  <!-- header navbar-->
  <!-- <baseNavBar :navConfig="navConfig"></baseNavBar> -->
  <!-- main -->
  <div class="baseMain"><router-view></router-view></div>
  <!-- footer tabbar -->
  <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item
      :icon="active === index ? item.activeIcon : item.icon"
      :to="item.url"
      v-for="(item, index) in items"
      :key="index"
    >
      {{ item.name }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, reactive } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import shop0 from "../assets/images/shop-0.png";
import shop1 from "../assets/images/shop-1.png";
import explore0 from "../assets/images/explore-0.png";
import explore1 from "../assets/images/explore-1.png";
import cart0 from "../assets/images/cart-0.png";
import cart1 from "../assets/images/cart-1.png";
import favorite0 from "../assets/images/favorite-0.png";
import favorite1 from "../assets/images/favorite-1.png";
import account0 from "../assets/images/account-0.png";
import account1 from "../assets/images/account-1.png";
// import baseNavBar from "./baseNavBar.vue";
const active = ref(0);
const route = useRoute();
const store = useStore();
// const title = computed(() => {
//   console.log("title@", title);
//   return store.getters.title;
// });

// defineExpose({
//   title,
//   baseNavBar,
// });
// const navConfig = reactive({
//   isBack: true, // 回退默认为true
//   ImgSrc: "", //回退图片
//   title: title, // 中间文字
//   rightText: "", //右边文字
//   titleColor: "#FF5E00", //中间文字颜色
//   rightTextColor: "", //右边文字颜色
//   isNeedBack: "", //后退图标
//   titleWeight: 700, //字体粗细
// });

const items: Array<{
  activeIcon: string;
  name: string;
  url: string;
  icon: string;
}> = [
  {
    name: "Shop",
    url: "/index",
    activeIcon: shop1,
    icon: shop0,
  },
  {
    name: "Explore",
    url: "/categories",
    activeIcon: explore1,
    icon: explore0,
  },
  {
    name: "Cart",
    url: "/cart",
    activeIcon: cart1,
    icon: cart0,
  },
  {
    name: "Favorite",
    url: "/favorite",
    activeIcon: favorite1,
    icon: favorite0,
  },
  {
    name: "Account",
    url: "/account",
    activeIcon: account1,
    icon: account0,
  },
];
onMounted(() => {
  setActive();
});
const setActive = () => {
  items.map((v: { url: string }, index: number) => {
    if (v.url === route.path) return (active.value = index);
  });
};
</script>

<style lang="scss" scoped>
.van-tabbar {
  width: 100vw;
  height: 68px;
  border-top: 1px solid #e9e9e9;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  .van-tabbar-item {
    background-color: transparent;
  }
}

.baseMain {
  height: calc(100vh - 91px);
  overflow-y: auto;
}
</style>
