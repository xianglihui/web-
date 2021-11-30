<template>
  <van-swipe-cell>
    <div class="goods">
      <div class="goodsImg">
        <van-image width="70" height="76" :src="goods.img" />
      </div>
      <div class="goodsInfo">
        <div class="goodsName">{{ goods.name }}</div>
        <div class="isSlot">
          <slot name="stepper"></slot>
          <slot name="add"></slot>
        </div>
      </div>
      <div class="goodsPrice">
        <div class="price">$ {{ goods.price }} kg</div>
      </div>
    </div>
    <template #right>
      <van-button
        square
        text="删除"
        type="danger"
        class="delete-button"
        @click="deleteGood(goods.id)"
      />
    </template>
  </van-swipe-cell>
</template>

<script lang="ts" setup>
import { ContactList } from "vant";
import { defineProps, defineEmits, watch } from "vue";
// const { goods } = toRefs(props);
const emit = defineEmits(["deleteGood"]);
const { goods } = defineProps({
  goods: {
    type: Object as () => {
      img: string;
      name: string;
      kg: string;
      priceg: string;
      price: string;
      num: number;
    },
    required: true,
    default: {},
  },
});
let unitPrice = 0;
console.log("goods", goods);
watch([goods.num], (val: any) => {
  console.log("val", val);
  unitPrice = Number(goods.num) * Number(goods.price);
  console.log("unitPrice", unitPrice);
});
const deleteGood = (id: number) => {
  emit("deleteGood", id);
};
</script>
<style lang="scss">
.delete-button {
  height: 103px !important;
}
.goods {
  display: flex;
  height: 103px;
  padding: 10px 0;
  border-bottom: 1px solid #6d380517;
  .goodsImg {
    width: 114px;
    text-align: center;
  }
  .goodsInfo {
    width: 112px;
    .goodsName {
      margin-top: 13px;
      color: #6d3805;
      font-weight: 700;
      font-size: 18px;
    }
    .isSlot {
      margin-top: 17px;
      //   background: ##F4F4F4;
    }
  }
  .goodsPrice {
    flex: 1;
    position: relative;
    .price {
      position: absolute;
      right: 16px;
      bottom: 5px;
      font-size: 18px;
      font-weight: 400;
      color: #6d3805;
    }
  }
}
</style>
