<template>
  <div class="step3" :style="{ paddingBottom: `${paddingBottom}px` }">
    <p class="Enter">Enter Verification Code</p>
    <p class="tip mt">We have sent SMS to:</p>
    <p class="tip">046 XXX XX XX</p>
    <div>
      <van-config-provider :theme-vars="themeVars">
        <van-password-input
          :value="value"
          :mask="false"
          :focused="showKeyboard"
          @focus="showKeyboard = true"
        />
        <van-number-keyboard
          :show="showKeyboard"
          v-model="code"
          @blur="showKeyboard = false"
          @input="onInput"
          @delete="onDelete"
          :hide-on-click-outside="true"
        />
      </van-config-provider>
      <div class="common-btn-style btn" @click="up">Sign Up</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import istep from "@/components/register/istep.vue";
import national from "@/assets/images/national.png";
import { useRouter } from "vue-router";
import { ref, defineProps, defineEmits, inject, watch } from "vue";
import { Toast } from "vant";
const router = useRouter();
const themeVars = {
//   borderColor: "red green blue pink",
//   borderLeftColor: "#1E1E1E",
};
const code = ref("");
const value = ref("");
const showKeyboard: any = ref(false);
const paddingBottom = ref(0);
watch([showKeyboard], (val: any) => {
  if (val[0] === false) {
    paddingBottom.value = 0;
  } else {
    paddingBottom.value = 242;
  }
  setTimeout(() => {
    window.scrollTo(0, 242);
  }, 300);
});
const onDelete = () => Toast("删除");
const onInput = (value: any) => Toast(value);
const onSubmit = () => {
  console.log("submit");
};
const next: any = inject("onNext");
// const next = () => {
// //   emit("stepFunc");
const stepNext = () => {
  console.log("@@@");
};
// };
//
defineExpose({
  next,
});
</script>
<style lang="scss" scoped>
.step3 {
  .van-password-input__item {
    border: none;
  }
  .Enter {
    padding-left: 16px;
    margin-top: 19px;
    font-weight: 700;
    font-size: 20px;
    color: #7f4e1d;
  }
  .mt {
    margin-top: 13px;
  }
  .tip {
    padding-left: 16px;
    color: #7f4e1d;
    font-size: 18px;
  }
  .btn {
      margin: 40px auto 0;
  }
}
</style>
