<template>
  <div>
    <van-config-provider :theme-vars="themeVars">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="name"
            placeholder="Name Surname"
          />
          <br />
          <simpleInput @getVal="getVal"></simpleInput>
        </van-cell-group>
      </van-form>
    </van-config-provider>
    <p class="tip">
      We need to verify you. We will send you a one time verification code.
    </p>
    <div class="common-btn-style btn" @click="stepNext">Next</div>
  </div>
</template>

<script lang="ts" setup>
// import istep from "@/components/register/istep.vue";
// 依赖
import { ref, defineProps, defineEmits, inject } from "vue";
import simpleInput from "@/components/simpleInput.vue";
import { useRouter } from "vue-router";
// 工具
import { Notify } from "vant";
import { useCurrentInstance } from "../../utils/toolset";
const { proxy } = useCurrentInstance();

const router = useRouter();
const themeVars = {
  cellBackgroundColor: "#F3F3F3",
  fieldLabelWidth: "50px",
};
const username = ref("");
let phone = ref("");
const emit = defineEmits(["stepFunc"]);
const onSubmit = (value: any) => {
  console.log("value", value);
  phone = value;
};
const next: any = inject("next");
const getVal = (e: string) => {
  phone.value = e;
};
const stepNext = () => {
  // emit("stepFunc");
  if (!username.value) {
    Notify("姓名是必须的");
    return;
  }
  if (
    phone.value &&
    (!/^[1][345789]\d{9}$/.test(phone.value) ||
      !/^[1-9]\d*$/.test(phone.value) ||
      phone.value.length !== 11)
  ) {
    Notify("手机格式不正确");
    return;
  }
  const params = {
    username: username.value,
    phone: phone.value,
  };
  proxy.$testApi.login.saveUserInfo(params).then((res: any) => {
    // console.log("success");
    Notify("保存成功");
    next();
  });
};
//
defineExpose({
  stepNext,
  onSubmit,
});
</script>
<style lang="scss" scoped>
.van-field {
  border-radius: 5px;
}
.tip {
  padding: 0 25px;
  margin: 10px 0 39px;
  color: #7f4e1d;
  font-size: 16px;
}
.btn {
  margin: 0 auto;
}
</style>
