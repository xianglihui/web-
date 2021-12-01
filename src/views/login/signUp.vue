<template>
  <div class="signUpWarp">
    <van-image width="300" height="270" :src="signInImg" />
    <p class="tip">Enter your phone number and</p>
    <p class="tip">password to access your account</p>
    <div class="form">
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
      <p class="forget">Forgote Password</p>
      <div class="common-btn-style btn">Sign in</div>

      <p class="accout">
        Don’t have an account?
        <span class="sign" @click="signUp">Sign Up</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import signIn from "@/assets/images/signIn.png";
import simpleInput from "@/components/simpleInput.vue";
const router = useRouter();
const signInImg = ref(signIn);
const themeVars = {
  cellBackgroundColor: "#F3F3F3",
  fieldLabelWidth: "50px",
};
const signUp = () => {
  router.push({ path: "/register" });
};
</script>

<style lang="scss" scoped>
.van-field {
  border-radius: 5px;
}
.signUpWarp {
  text-align: center;
  .tip {
    padding: 0 16px;
    font-weight: 400;
    font-size: 18px;
    color: #6d3805;
    text-align: left;
  }
  .form {
    margin-top: 13px;
    .forget {
      margin-top: 6px;
      padding: 0 16px;
      text-align: right;
      font-weight: 400;
      color: #ff5e00;
      font-size: 14px;
    }
  }
  .btn {
    margin: 43px auto 0;
  }
  .accout {
    margin-top: 13px;
    font-size: 16px;
    font-weight: 600;
    color: #6d3805;
    .sign {
      color: #ff7220;
    }
  }
}
</style>
