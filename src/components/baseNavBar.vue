<template>
  <div class="baseNavBar">
    <div class="appraisalTooBar">
      <div class="left_box" @click="backApp()">
        <van-icon name="arrow-left" v-if="isNeedBack" />
      </div>
      <p
        class="appraisal_title"
        :style="{ color: titleColor, fontWeight: titleWeight }"
      >
        {{ title }}
      </p>
      <div
        class="appraisal_text"
        @click="handleShare"
        :style="{ color: rightTextColor }"
      >
        {{ rightText }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { eqMethod } from "../utils/provingEq.js";
import { defineComponent, reactive, toRefs, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  props: ["navData"],
  setup(props) {
    const { navData } = toRefs(props);
    console.log("navData", navData);
    // const { title, titleColor, isNeedBack } = navData.value;
    const router = useRouter();
    const store = useStore();
    // 标题
    const title = computed(() => {
      return store.getters.title;
    });
    const state = reactive({
      isBack: true, // 回退默认为true
      ImgSrc: "", //回退图片
      title: title, // 中间文字
      rightText: "", //右边文字
      titleColor: "#FF5E00", //中间文字颜色
      rightTextColor: "", //右边文字颜色
      isNeedBack: "", //后退图标
      titleWeight: 700, //字体粗细
    });
    // 回退
    const back = () => {
      if (state.isBack == true) {
        //判断如果为true 回退
        backApp();
      } else {
        //否则回退到上一级
        router.back();
      }
    };
    //这里调原生的方法回退
    const backApp = () => {
      //   if (eqMethod.verifyAndroid()) {
      //     //安卓
      //     window.webUser.backWeb();
      //   } else if (eqMethod.verifyIos()) {
      //     //ios
      //     window.webkit.messageHandlers.backWeb.postMessage(null);
      //   }
      router.back();
    };

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss">
.baseNavBar {
  position: relative;
  width: 100%;
  height: 46px;
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
  margin: 0 auto;
  font-size: 16px;
}
.appraisal_text {
  position: absolute;
  padding: 0.08rem;
  right: 0.24rem;
  font-size: 0.4rem;
}
</style>
