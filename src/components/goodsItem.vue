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
      <van-button square text="删除" type="danger" class="delete-button" />
    </template>
  </van-swipe-cell>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, ref } from "vue";
export default defineComponent({
  components: {},
  props: ["goods"],
  setup(props) {
    const { goods } = toRefs(props);
    console.log("goods", goods);
    return {
      goods,
    };
  },
});
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
