<template>
  <div class="step3" :style="{ paddingBottom: `${paddingBottom}px` }">
    <p class="Enter">Enter Verification Code</p>
    <p class="tip mt">We have sent SMS to:</p>
    <p class="tip">046 XXX XX XX</p>
    <div class="test">
      <div class="code-input-main" @click="enterCode">
        <div
          class="code-input-main-item"
          v-for="(item, index) in codeList"
          :key="index"
        >
          {{ code[index] || "" }}
        </div>
        <input
          class="code-input-input"
          v-model="code"
          maxlength="6"
          type="number"
        />
      </div>
      <van-number-keyboard
        :show="showKeyboard"
        v-model="code"
        @blur="showKeyboard = false"
        @input="onInput"
        @delete="onDelete"
        :hide-on-click-outside="true"
      />
      <div class="common-btn-style btn" @click="up">Sign Up</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import istep from "@/components/register/istep.vue";
// 依赖
import { ref, inject, watch, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Toast } from "vant";
import { Notify } from "vant";
// 静态资源
import national from "@/assets/images/national.png";
// 工具
import { useCurrentInstance } from "../../utils/toolset";
const { proxy } = useCurrentInstance();
const store = useStore();
const router = useRouter();
let codeList: any = reactive([]); //验证码item box
const codeLength = ref(6); //验证码item 个数
let code: any = ref(""); //验证码
const showKeyboard: any = ref(false); // 键盘显示
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
// 键盘弹出 安全距离
watch([code], (val: any) => {
  if (code.length > codeLength.value) {
    code = code.substring(0, codeLength.value);
  }
  if (code.value.length === codeLength.value) {
    showKeyboard.value = false;
  }
});
// 6个item box
codeList = new Array(codeLength.value).fill("" as any);
// code 点击事件
const enterCode = () => {
  showKeyboard.value = true;
};
const onDelete = () => Toast("删除");
// 输入事件
const onInput = (value: any) => {
  console.log("code", code.value);
};
const onSubmit = () => {
  console.log("submit");
};
const next: any = inject("onNext");
// const next = () => {
// //   emit("stepFunc");
const up = () => {
  // console.log("@@@");
  console.log("code", code.value);
  if (code.value.length < 6) {
    Notify("请输入正确验证码");
    return;
  }
  const params = {
    token: "110",
  };
  console.log("@@params", params);
  proxy.$testApi.login.createToken(params).then(async (res: any) => {
    // console.log("success");
    store.dispatch("addToken", params.token);
    Notify("登陆成功");
    router.push({ path: "/index" });
  });
};
// const getToken = () => {
//   proxy.$testApi.login.createToken().then((res: any) => {
//     console.log("token", res.data);
//   });
// };
// };
//
defineExpose({
  next,
});
</script>
<style lang="scss" scoped>
.step3 {
  .test {
    // background-color: #ea5335;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }
  .code-input-main {
    padding: 0 16px 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    .code-input-main-item {
      width: 50px;
      height: 44px;
      margin: 0 5px;
      padding-bottom: 0;
      opacity: 0.8;
      border-bottom: 3px solid #7f4e1d;
      text-align: center;
      font-size: 30px;
      color: #7f4e1d;
    }
  }

  .code-input-input {
    height: 44px;
    width: 100%;
    position: absolute;
    border: none;
    outline: none;
    color: transparent;
    background-color: transparent;
    text-shadow: 0 0 0 transparent;
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
