<template>
  <div class="step2">
    <p class="enter">Enter the password</p>
    <p class="tip">For the security & safety please choose a password</p>
    <div class="context">
      <van-config-provider :theme-vars="themeVars">
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              :left-icon="lock"
              v-model="username"
              type="password"
              placeholder="Password"
            />
            <br />
            <van-field
              :left-icon="lock"
              v-model="password"
              type="password"
              placeholder="Confirm Password"
            />
          </van-cell-group>
        </van-form>
      </van-config-provider>
      <div class="common-btn-style btn" @click="stepNext">Next</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// import istep from "@/components/register/istep.vue";
import lock from "@/assets/images/lock.png";
import { useRouter } from "vue-router";
import { ref, defineProps, defineEmits, inject } from "vue";
const router = useRouter();
const themeVars = {
  cellBackgroundColor: "#F3F3F3",
  fieldLabelWidth: "50px",
};
const username = ref("");
const phone = ref("");
const emit = defineEmits(["stepFunc"]);
const onSubmit = () => {
  console.log("submit");
};
const next: any = inject("next");
const stepNext = () => {
  // emit("stepFunc");
  console.log('1111')
  next();
};
//
defineExpose({
  next,
});
</script>
<style lang="scss" scoped>
.step2 {
  .van-field {
    border-radius: 5px;
  }
  .enter {
    padding-left: 16px;
    color: #7f4e1d;
    font-weight: 700;
    font-size: 20px;
  }
  .tip {
    margin-top: 12px;
    padding: 0 45px 0 16px;
    font-size: 16px;
    color: #7f4e1d;
  }
  .context {
    margin-top: 16px;
  }
  .btn {
    margin: 17px auto 0;
  }
}
</style>
