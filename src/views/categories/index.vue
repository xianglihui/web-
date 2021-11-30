<template>
  <div class="categiruesWarp">
    <van-search v-model="keyword" placeholder="Search" />
    <div class="context">
      <van-row gutter="22">
        <van-col span="8" v-for="(item, index) in categories" :key="index">
          <van-image width="100" height="100" round :src="item.fruitImg" />
          <div class="fruitName">{{ item.fruitName }}</div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, reactive, provide } from "vue";
import product1 from "@/assets/images/product-1.png";

const keyword = ref("");

const categories: Array<{
  fruitImg: string;
  fruitName: string;
  cid: number;
}> = reactive([
  {
    fruitImg: product1,
    fruitName: "Fruits",
    cid: 1,
  },
  {
    fruitImg: product1,
    fruitName: "Fruits",
    cid: 2,
  },
  {
    fruitImg: product1,
    fruitName: "Fruits",
    cid: 3,
  },
  {
    fruitImg: product1,
    fruitName: "Fruits",
    cid: 4,
  },
  {
    fruitImg: product1,
    fruitName: "Fruits",
    cid: 4,
  },
  {
    fruitImg: product1,
    fruitName: "Fruits",
    cid: 4,
  },
  {
    fruitImg: product1,
    fruitName: "Fruits",
    cid: 4,
  },
  {
    fruitImg: product1,
    fruitName: "Fruits",
    cid: 4,
  },
  {
    fruitImg: product1,
    fruitName: "Fruits",
    cid: 4,
  },
  {
    fruitImg: product1,
    fruitName: "Fruits",
    cid: 4,
  },
  {
    fruitImg: product1,
    fruitName: "Fruits",
    cid: 4,
  },
]);
</script>

<style lang="scss" scoped>
.categiruesWarp {
  padding: 0 16px;
  .context {
    margin: 10px 12px;
    .fruitName {
      text-align: center;
      margin: 20px;
      font-size: 15px;
      line-height: 18px;
      color: #6d3805;
    }
  }
}
</style>
