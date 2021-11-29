<template>
  <div class="indexWarp">
    <!-- search -->
    <baseSearch></baseSearch>
    <!-- categories header -->
    <div class="flex-spacebetween">
      <span class="categories">categories</span>
      <span class="seeAll">see all</span>
    </div>
    <!-- categories main -->
    <div class="left-content" ref="leftScroll">
      <div class="left">
        <div
          v-for="(item, index) in categoryList"
          :key="index"
          class="left-item"
        >
          <van-image width="100" height="100" round :src="item.img" />
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div class="flex-spacebetween">
      <span class="categories">Popular deals</span>
      <span class="seeAll">see all</span>
    </div>
    <!-- product item -->
    <div class="context" ref="productRef">
      <div class="pro">
        <div v-for="(item, index) in goods" :key="index" class="productList">
          <productItem :goods="item"></productItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, ref } from "vue";
import { useCurrentInstance } from "../../utils/toolset";
import baseSearch from "@/components/baseSearch.vue";
import BScroll from "better-scroll";
import productItem from "@/components/productItem.vue";
import fruit from "../../assets/images/itembg.png";
import fruitImg from "../../assets/images/apple.png";
const { proxy } = useCurrentInstance(); // 拿全局api
console.log("proxy", proxy.$testApi);
const categoryList = reactive([
  {
    img: fruit,
    name: "水果",
  },
  {
    img: fruit,
    name: "水果",
  },
  {
    img: fruit,
    name: "水果",
  },
  {
    img: fruit,
    name: "水果",
  },
  {
    img: fruit,
    name: "水果",
  },
]);
const goods = reactive([
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
]);
const leftActive = ref<number>(0);
const leftScroll = ref<any>(null);
const productRef = ref<any>(null);
const leftItemClick = (e: number) => {
  leftActive.value = e;
};
const getAuthTree = () => {
  proxy.$testApi.index.getPopularDeals().then((res: any) => {
    console.log("res", res);
  });
};
onMounted(() => {
  getAuthTree();
  const leftBs = new BScroll(leftScroll.value, {
    scrollX: true,
    scrollY: false,
    probeType: 3, // listening scroll event
  });
  const productScrollX = new BScroll(productRef.value, {
    scrollX: true,
    scrollY: false,
    probeType: 3, // listening scroll event
  });
});
</script>

<style lang="scss">
.indexWarp {
  padding: 0 10px;
  .categories {
    font-size: 22px;
    font-weight: 700;
    color: #6d3805;
  }
  .seeAll {
    font-size: 18px;
    font-weight: 400;
    color: #ff5e00;
  }
  .left-content {
    margin: 30px 0;
    /* 此处高度必须，根据业务实际情况而定 */
    height: 20vh;
    width: 100%;
    white-space: nowrap;
  }
  .left {
    /* 此处高度不写，根据子元素高度自适应 */
    display: inline-block;
  }
  .left-item {
    display: inline-block;
    text-align: center;
    margin-right: 16px;
    .name {
      margin-top: 16px;
    }
  }
  .context {
    width: 100%;
    margin: 32px 0;
    white-space: nowrap;
    .pro {
      height: 200px;
      display: inline-block;
    }
    .productList {
      display: inline-block;
      margin-right: 16px;
    }
  }
}
</style>
