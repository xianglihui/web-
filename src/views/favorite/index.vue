<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <goodsItem :goods="item">
        <template v-slot:add>
          <view class="addCart">
            <van-icon name="shopping-cart-o" />
            add to cart
          </view>
        </template>
      </goodsItem>
    </div>
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
</style>
