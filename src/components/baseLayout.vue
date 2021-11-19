<template>
  <!-- header navbar-->
  <!-- <baseNavBar :navConfig="navConfig"></baseNavBar> -->
  <!-- main -->
  <div class="baseMain"><router-view></router-view></div>
  <!-- footer tabbar -->
  <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item
      :icon="item.icon"
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

const items: Array<{ name: string; url: string; icon: string }> = [
  {
    name: "Shop",
    url: "/index",
    icon: "notes-o",
  },
  {
    name: "Explore",
    url: "/categories",
    icon: "idcard",
  },
  {
    name: "Cart",
    url: "/cart",
    icon: "idcard",
  },
  {
    name: "Favorite",
    url: "/favorite",
    icon: "idcard",
  },
  {
    name: "Account",
    url: "/account",
    icon: "idcard",
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
.baseMain {
  height: calc(100vh - 51px);
  overflow-y: auto;
}
</style>
