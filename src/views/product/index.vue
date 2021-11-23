<template>
  <div class="header">
    <van-image width="207" height="246" :src="pbgImg" class="pbg" />
    <div class="product">
      <van-image width="162" height="110" :src="s1Img" />
    </div>
  </div>
  <div class="context">
    <p class="pTitle">Orginal Mango</p>
    <p class="priceInfo"><span class="price">$3.00</span> /st</p>
    <p class="tip">
      Golden Ripe Alphonsa mangoes delivered to your house in the most hygenic
      way ever... Best for eating plain but can also be made into shakes and
      cakes.
    </p>
    <div class="step">
      <div>
        <van-stepper v-model="value" input-width="180" button-size="50" step="2" />
      </div>
      <div>
        <van-image width="30" height="30" :src="scImg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, toRefs, onMounted, ref } from "vue";
import s1 from "../../assets/images/s1.png";
import pbg from "../../assets/images/pbg.png";
import sc from "../../assets/images/sc.png";
const s1Img = ref(s1);
const pbgImg = ref(pbg);
const scImg = ref(sc);
</script>

<style lang="scss" scoped>
.header {
  overflow: hidden;
  position: relative;
  height: 400px;
  width: 100%;
  .pbg {
    position: absolute;
    right: 0;
    top: 0;
  }
  .product {
    text-align: center;
    margin-top: 184px;
  }
}
.context {
  padding: 0 16px;
  .pTitle {
    font-weight: 700;
    font-size: 24px;
    color: #6d3805;
  }
  .priceInfo {
    margin-top: 6px;
    .price {
      font-size: 16px;
      color: #6d3805;
    }
  }
  .tip {
    margin-top: 8px;
    color: #6d3805;
    font-size: 14px;
  }
}
.step {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
