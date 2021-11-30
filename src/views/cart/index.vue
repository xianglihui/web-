<template>
  <div class="cartWarp">
    <div v-for="(item, index) in lists.car" :key="index">
      <goodsItem :goods="item" @deleteGood="deleteGood">
        <template v-slot:stepper>
          <van-stepper v-model="item.num" @change="change(item)" />
        </template>
      </goodsItem>
    </div>
    <div class="common-btn-style btn">CheckOut</div>
  </div>
</template>

<script lang="ts" setup>
// 依赖
import { defineComponent, reactive, toRefs, onMounted, watch } from "vue";
// 工具
import { useCurrentInstance } from "../../utils/toolset";
// 组件
import goodsItem from "@/components/goodsItem.vue";
// 静态资源
import fruitImg from "../../assets/images/apple.png";
const { proxy } = useCurrentInstance();
const lists = reactive({
  car: {},
});

// 获取购物车数据
const getCar = () => {
  proxy.$testApi.cart.getCar().then((res: any) => {
    // console.log("success");
    console.log("car", res);
    lists.car = res.data;
  });
};
// 删除购物车商品
const deleteGood = (e: number) => {
  console.log("delete商品");
  proxy.$testApi.cart.deleteCar(e).then(async (res: any) => {
    // console.log("success");
    // console.log("car", res);
    // lists.car = res.data;
    await getCar();
  });
};
// 修改购物车商品
const change = (value: any) => {
  console.log("value", value);
  const params = {
    ...value,
  };
  console.log("params", params);
  proxy.$testApi.cart.patchCar(value).then((res: any) => {
    console.log("res", res);
    // await getCar();
  });
};
onMounted(async () => {
  await getCar();
});
</script>

<style lang="scss" scoped>
.cartWarp {
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
