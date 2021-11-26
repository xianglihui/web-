<template>
  <div>
    <van-cell-group :border="false">
      <van-cell
        title="Profile"
        icon="location-o"
        :border="false"
        @click="profile"
      />
      <van-cell
        title="Orders"
        icon="location-o"
        :border="false"
        @click="order"
      />
      <van-cell
        title="Address"
        icon="location-o"
        :border="false"
        @click="address"
      />
      <van-cell
        title="Payment"
        icon="location-o"
        :border="false"
        @click="payment"
      />
    </van-cell-group>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import goodsItem from "@/components/goodsItem.vue";
import fruitImg from "../../assets/images/apple.png";
const router = useRouter();

const list = reactive([
  {
    img: fruitImg,
    name: "Red Apple",
    num: 1,
    price: 4.99,
  },
]);
const profile = () => {
  router.push({ path: "/account/profile" });
};
const order = () => {
  router.push({ path: "/account/order" });
};
const address = () => {
  router.push({ path: "/account/addresses" });
};
const payment = () => {
  router.push({ path: "/account/payment" });
};
</script>

<style lang="scss">
.addCart {
  font-size: 14px;
  color: #ff5e00;
}
.--van-cell-border-color {
  color: #ffffff;
}
</style>
