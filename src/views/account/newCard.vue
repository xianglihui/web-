<template>
  <div class="newCardWarp">
    <van-config-provider :theme-vars="themeVars">
      <p class="title">Card number</p>
      <van-field v-model="form.cardNumber" placeholder="xxxx xxxx xxxx xxxx" />
      <div class="middleLine">
        <p class="title">Expiry Date</p>
        <van-field v-model="form.expiryDate" placeholder="MM/YY" />
      </div>
      <p class="title">CCV</p>
      <van-field v-model="form.ccv" placeholder="****" />
    </van-config-provider>
    <div class="common-btn-style btn">Add Card</div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const form = reactive({
  cardNumber: "",
  expiryDate: "",
  ccv: "",
});
const themeVars = {
  cellBackgroundColor: "#F3F3F3",
};
</script>

<style lang="scss" scoped>
.newCardWarp {
  padding: 0 16px;
  .title {
    font-size: 18px;
    font-weight: 700;
    color: #6d3805;
  }
  .middleLine {
    margin: 37px 0;
  }
  .btn {
   margin-top: 225px;
  }
}
</style>
