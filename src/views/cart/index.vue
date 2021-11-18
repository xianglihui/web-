<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <goodsItem :goods="item">
        <template v-slot:stepper>
          <van-stepper v-model="item.num" />
        </template>
      </goodsItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, toRefs, onMounted, ref } from "vue";
import goodsItem from "@/components/goodsItem.vue";
import fruitImg from "../../assets/images/apple.png";
const list = reactive([
  {
    img: fruitImg,
    name: "Red Apple",
    num: 1,
    price: 4.99,
  },
  // {
  //   img: fruitImg,
  //   name: "Red Apple",
  //   num: 1,
  //   price: 4.99,
  // },
]);
</script>

<style lang="scss"></style>
