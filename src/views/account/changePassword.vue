<template>
  <van-config-provider :theme-vars="themeVars">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="form.oldPassword"
          type="password"
          name="旧密码"
          placeholder="Old Password"
        />
        <br />
        <br />
        <van-field
          v-model="form.newPassword"
          type="password"
          name="密码"
          placeholder="New Password"
        />
        <br />
        <van-field
          v-model="form.confirmPassword"
          type="password"
          name="确认密码"
          placeholder="Confirm Password"
        />
      </van-cell-group>
    </van-form>
  </van-config-provider>
  <div class="submit">
    <div class="confirm">confirm</div>
    <div class="back">back to Sign in</div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, defineExpose } from "vue";
const themeVars = {
  cellBackgroundColor: "#F3F3F3",
};
const form = reactive({
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
});

// defineExpose({
//   ...toRefs(form),
// });
</script>

<style lang="scss" scoped>
@mixin commonBtn {
  width: 343px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 17px;
  font-weight: 700;
  border-radius: 30px;
}
.van-field {
  border-radius: 5px;
}
.submit {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
  .confirm {
    @include commonBtn;
    background-color: #ff5e00;
    color: #ffffff;
  }
  .back {
    @include commonBtn;
    color: #ff5e00;
    border: 1px solid #ff5e00;
    margin-top: 16px;
  }
}
</style>
