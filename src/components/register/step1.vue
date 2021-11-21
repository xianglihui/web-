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
          <van-field v-model="phone" name="phone" placeholder="Phone Number">
            <template #label>
              <div class="flex-align-justify-spacebetween">
                <van-image width="28px" :src="national" />
                <van-icon name="play" size="12" />
              </div>
            </template>
          </van-field>
          <istep></istep>
        </van-cell-group>
      </van-form>
    </van-config-provider>
    <p class="tip">
      We need to verify you. We will send you a one time verification code.
    </p>
    <div class="common-btn-style btn" @click="next">Next</div>
  </div>
</template>

<script lang="ts" setup>
// import istep from "@/components/register/istep.vue";
import national from "@/assets/images/national.png";
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const themeVars = {
  cellBackgroundColor: "#F3F3F3",
  fieldLabelWidth: "50px",
};
const username = ref("");
const phone = ref("");
const onSubmit = () => {
  console.log("submit");
};
const next = () => {
  router.push({ path: "/account/profile" });
};
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
