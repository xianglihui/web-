<template>
  <baseSearch></baseSearch>
  <van-tabs>
    <van-tab
      v-for="(item, index) in test"
      :title="item.name"
      :key="index"
      class="box"
    >
      <van-image width="163" height="148" :src="Ad" />
      <div v-for="(items, i) in item.list" :key="i" class="boxItem">
        <productItem :goods="items"></productItem>
      </div>
    </van-tab>
  </van-tabs>
</template>

<script lang="ts" setup>
import baseSearch from "@/components/baseSearch.vue";
import { defineComponent, reactive, toRefs, onMounted, ref } from "vue";
import productItem from "@/components/productItem.vue";
import fruitImg from "../../assets/images/apple.png";
import ad from "../../assets/images/ad.png";
const Ad = ref(ad);
const test = reactive([
  {
    name: "Fruits",
    list: [
      {
        img: fruitImg,
        name: "Red Apple",
        kg: "1kg",
        priceg: "priceg",
        price: "4.99",
      },
      {
        img: fruitImg,
        name: "Red Apple",
        kg: "1kg",
        priceg: "priceg",
        price: "4.99",
      },
      {
        img: fruitImg,
        name: "Red Apple",
        kg: "1kg",
        priceg: "priceg",
        price: "4.99",
      },
      {
        img: fruitImg,
        name: "Red Apple",
        kg: "1kg",
        priceg: "priceg",
        price: "4.99",
      },
    ],
  },
  { name: "Vegtables" },
  { name: "Meat" },
  { name: "Fish" },
  { name: "Sea food" },
  { name: "Juice" },
  { name: "Egg & Milk" },
  { name: "Ice cream" },
  { name: "Cake" },
]);
</script>

<style lang="scss" scoped>
.box {
  padding: 0 16px;
  margin-top: 10px;
  column-count: 2;
  //   column-gap: 0;
  //   page-break-inside: avoid;
  //   margin-top: 10px;
  //   display: flex;
  //   justify-content: space-around;
  //   flex-wrap: wrap;
  .boxItem {
    box-sizing: border-box;
    //避免截断
    break-inside: avoid;
    margin-bottom: 16px;
  }
}
</style>
