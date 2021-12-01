<template>
  <div class="cartWarp">
    <div v-for="(item, index) in lists.car" :key="index">
      <goodsItem :goods="item" @deleteGood="deleteGood">
        <template v-slot:stepper>
          <van-stepper
            v-model="item.num"
            theme="round"
            @change="change(item)"
          />
        </template>
      </goodsItem>
    </div>
    <div class="common-btn-style btn" @click="checkOut">CheckOut</div>
  </div>
</template>

<script lang="ts" setup>
// 依赖
import { defineComponent, reactive, toRefs, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
// 工具
import { useCurrentInstance } from "../../utils/toolset";
// 组件
import goodsItem from "@/components/goodsItem.vue";
// 静态资源
import fruitImg from "../../assets/images/apple.png";
const { proxy } = useCurrentInstance();
const router = useRouter();
const lists = reactive({
  car: {},
});
const checkOut = () => {
  router.push({ path: "/account/payment" });
};
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
  :deep(.van-stepper) {
    box-shadow: inset 0px 0px 4px rgba(109, 56, 5, 0.2);
    background: #f4f4f4;
    border-radius: 30px;
    padding: 3px;
    button {
      background: #fff;
      border: #fff;
      color: #6d3805;
      box-shadow: 0px 1px 2px rgba(109, 56, 5, 0.2);
    }
  }
}
</style>
