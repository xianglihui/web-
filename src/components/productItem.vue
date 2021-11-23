<template>
  <div class="productWarp">
    <div class="img">
      <van-image width="70" height="76" :src="goods.img" />
    </div>
    <div class="name">{{ goods.name }}</div>
    <div class="kg">{{ goods.kg }},{{ goods.priceg }}</div>
    <div class="price">$ {{ goods.price }}</div>
    <div class="add">
      <van-image width="30" height="30" :src="add" />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, ref } from "vue";
import add from "@/assets/images/add.png";
export default defineComponent({
  props: ["goods"],
  setup(props) {
    const { goods } = toRefs(props);
    return {
      goods,
      add,
    };
  },
});
</script>

<style lang="scss">
.productWarp {
  position: relative;
  overflow: hidden;
  // width: 150px;
  // height: 189px;
  width: 164px;
  height: 194px;
  padding: 0 10px;
  border-radius: 20px;
  box-shadow: 0px 1px 6px -1px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: 0px 1px 6px -1px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: 0px 1px 6px -1px rgba(0, 0, 0, 0.29);
  .img {
    height: 105px;
    text-align: center;
    margin-top: 18px;
  }
  .name {
    font-size: 15px;
    font-weight: 700;
    color: #6d3805;
  }
  .kg {
    color: #929292;
    font-size: 12px;
  }
  .add {
    position: absolute;
    right: 9px;
    bottom: 13px;
  }
  .price {
    color: #ff5e00;
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
