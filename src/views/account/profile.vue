<template>
  <div>
    <van-cell-group :border="false">
      <van-cell title="Profile" icon="location-o" :border="false" />
    </van-cell-group>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue";
import goodsItem from "@/components/goodsItem.vue";
import fruitImg from "../../assets/images/apple.png";

const list = reactive([
  {
    img: fruitImg,
    name: "Red Apple",
    num: 1,
    price: 4.99,
  },
]);
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
