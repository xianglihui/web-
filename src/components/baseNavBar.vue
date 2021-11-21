<template>
  <div class="baseNavBar">
    <div class="appraisalTooBar">
      <div class="left_box" @click="backApp()">
        <van-icon name="arrow-left" v-if="navConfig.isNeedBack" />
      </div>
      <p
        class="appraisal_title"
        :style="{
          color: navConfig.titleColor,
          fontWeight: navConfig.titleWeight,
        }"
      >
        {{ navConfig.title }}
      </p>
      <div
        class="appraisal_text"
        @click="handleShare"
        :style="{ color: navConfig.rightTextColor }"
      >
        {{ navConfig.rightText }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Config {
  isBack: boolean;
  ImgSrc: string;
  title: string;
  rightText: string;
  titleColor: string;
  rightTextColor: string;
  isNeedBack: string;
  titleWeight: number;
}
import { eqMethod } from "../utils/provingEq.js";
import { defineComponent, reactive, toRefs, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const props = defineProps<{
  navConfig: Config;
}>();

const router = useRouter();
const store = useStore();
// 回退
// const back = () => {
//   if (navConfig.isBack == true) {
//     //判断如果为true 回退
//     backApp();
//   } else {
//     //否则回退到上一级
//     router.back();
//   }
// };
//这里调原生的方法回退
const backApp = () => {
  router.back();
};
// defineExpose({
//   ...toRefs(state),
// });
</script>

<style lang="scss">
.left_box {
  color: #ff5e00;
}
.baseNavBar {
  position: relative;
  width: 100%;
  // height: 115px;
  line-height: 46px;
  padding: 0 10px;
}
.appraisalTooBar {
  display: flex;
  width: 100%;
  align-items: center;
  z-index: 100;
  font-size: 16px;
}
.appraisal_img {
  width: 10px;
  height: 10px;
  vertical-align: middle;
}
.appraisal_title {
  margin: 30px auto 0;
  font-size: 24px;
}
.appraisal_text {
  position: absolute;
  padding: 0.08rem;
  right: 0.24rem;
  font-size: 0.4rem;
}
</style>
