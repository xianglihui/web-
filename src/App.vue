<template>
  <baseNavBar
    v-if="isShowNavBar"
    :navConfig="navConfig"
    @addFunc="addFunc"
  ></baseNavBar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import baseNavBar from "@/components/baseNavBar.vue";
import { onMounted, reactive, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();
// 标题
const title = computed(() => {
  return store.getters.title;
});
// 是否展示头部
const isShowNavBar = computed(() => {
  return store.getters.navBar;
});
// 是否后退
const isNeedBack = computed(() => {
  return store.getters.back;
});
// 是否新增
const isNeedAdd = computed(() => {
  return store.getters.add;
});
// 根据返回的值跳转相应页面
const routeNo = computed(() => {
  return store.getters.routeNo;
});
const addFunc = () => {
  switch (routeNo.value) {
    case 1:
      router.push({ path: "/account/profile/newCard" });
      break;
    case 2:
      router.push({ path: "/account/addresses/newAddresses" });
    default:
      break;
  }
};
// navBar配置
const navConfig = reactive({
  isBack: true, // 回退默认为true
  ImgSrc: "", //回退图片
  title: title, // 中间文字
  rightText: "", //右边文字
  titleColor: "#FF5E00", //中间文字颜色
  rightTextColor: "", //右边文字颜色
  isNeedBack: isNeedBack,
  isNeedAdd: isNeedAdd,
  titleWeight: 700, //字体粗细
});
document.addEventListener("touchstart", function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
});
var lastTouchEnd = 0;
document.addEventListener(
  "touchend",
  function (event) {
    var now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  },
  false
);
document.addEventListener("gesturestart", function (event) {
  event.preventDefault();
});
</script>

<style></style>
