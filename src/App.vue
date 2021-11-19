<template>
  <baseNavBar v-if="isShowNavBar" :navConfig="navConfig"></baseNavBar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import baseNavBar from "./components/baseNavBar.vue";
import { onMounted, reactive, computed } from "vue";
import { useStore } from "vuex";
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
console.log("isNeedBack", isNeedBack);
// navBar配置
const navConfig = reactive({
  isBack: true, // 回退默认为true
  ImgSrc: "", //回退图片
  title: title, // 中间文字
  rightText: "", //右边文字
  titleColor: "#FF5E00", //中间文字颜色
  rightTextColor: "", //右边文字颜色
  isNeedBack: isNeedBack,
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
