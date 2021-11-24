<template>
  <div class="editWarp">
    <van-config-provider :theme-vars="themeVars">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="name"
            placeholder="Name Surname"
          />
          <br />
          <simpleInput></simpleInput>
        </van-cell-group>
      </van-form>
    </van-config-provider>
    <div class="common-btn-style btn" @click="stepNext">Update Profile</div>
  </div>
</template>

<script lang="ts" setup>
import simpleInput from "@/components/simpleInput.vue";
const themeVars = {
  cellBackgroundColor: "#F3F3F3",
  fieldLabelWidth: "50px",
};
</script>

<style lang="scss" scoped>
.editWarp {
  position: relative;
  height: calc(100vh - 126px);
  .btn {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
  }
}
</style>
