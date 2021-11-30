<template>
  <div class="indexWarp">
    <!-- search -->
    <baseSearch></baseSearch>
    <!-- categories header -->
    <div class="flex-spacebetween">
      <span class="categories">categories</span>
      <span class="seeAll" @click="test">see all</span>
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
      <span class="seeAll" @click="goPopular">see all</span>
    </div>
    <!-- product item -->
    <div class="context" ref="productRef">
      <div class="pro">
        <div
          v-for="(item, index) in goods.products"
          :key="index"
          class="productList"
        >
          <productItem :goods="item" @add="add(item)"></productItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 依赖
import { reactive, onMounted, ref, nextTick, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
// 工具类
import { useCurrentInstance } from "../../utils/toolset";
import BScroll from "better-scroll";
// 组件
import baseSearch from "@/components/baseSearch.vue";
import productItem from "@/components/productItem.vue";
// 静态资源
import fruit from "../../assets/images/product-1.png";
// 拿全局api
const { proxy } = useCurrentInstance();
const store = useStore();
const router = useRouter();
// token
const token = computed(() => {
  return store.getters.token;
});
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
let goods = reactive({
  products: [],
});

const leftActive = ref<number>(0);
const leftScroll = ref<any>(null);
const productRef = ref<any>(null);
const leftItemClick = (e: number) => {
  leftActive.value = e;
};
// 获取热卖单品
const getPopular = () => {
  return proxy.$testApi.index.getPopularDeals().then(async (res: any) => {
    console.log("res", res);
    await nextTick();
    goods.products = res.data;
  });
};
// 获取用户信息
const getUserInfo = () => {
  proxy.$testApi.index.getUserInfo().then((res: any) => {
    console.log("获取用户信息", res);
  });
};
// 添加购物车
const add = async (e: any) => {
  await isLogin();
  console.log("添加购物车", e);
  const params = {
    img: e.img,
    id: e.id,
    name: e.name,
    price: e.price,
    kg: e.kg,
    priceg: e.priceg,
  };
  // proxy.$testApi.index.getCar().then((res: any) => {});
  proxy.$testApi.cart.addCar(params).then((res: any) => {
    console.log("res", res);
  });
};
const test = () => {
  console.log("test");
};
const goPopular = () => {
  router.push({ path: "/fruits" });
};
const isLogin = () => {
  return new Promise((reslove, reject) => {
    if (!token.value) {
      //未登录
      router.push({ name: "register" });
      return false;
    }
    reslove(!!token.value);
  });
};
let productScrollX = reactive({});
let leftBs = reactive({});

onMounted(async () => {
  await getUserInfo();
  const leftBs = new BScroll(leftScroll.value, {
    scrollX: true,
    scrollY: false,
    probeType: 3, // listening scroll event
    click: true,
  });
  console.log("productRef.value", productRef.value);
  const productScrollX = new BScroll(productRef.value, {
    scrollX: true,
    scrollY: false,
    probeType: 3, // listening scroll event
    click: true,
  });
  // 重新计算 BetterScroll
  getPopular().then((res: any) => {
    productScrollX.refresh();
  });
});
// watchEffect(() => {
//   nextTick(() => {
//     console.log("productScrollX", productScrollX);
//     productScrollX && ;
//   });
// });
// defineExpose({
//   ...toRefs(goods),
// });
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
