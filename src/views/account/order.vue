<template>
  <div class="orderWarp">
    <van-tabs v-model:active="active" @click-tab="onClickTab">
      <van-tab
        v-for="(item, index) in test"
        :title="item.name"
        :key="index"
        class="box"
      >
      </van-tab>
      <div class="container" v-if="name == 1">
        <div v-for="(items, i) in list" :key="i" class="orders">
          <div class="img">
            <div class="orderImg">
              <van-image width="24" height="24" :src="items.img" class="icon" />
            </div>
          </div>
          <div class="orderDesc">
            <p class="no">{{ items.orderNo }}</p>
            <p
              class="status"
              :class="items.orderStatus ? 'delivered' : 'cancelled'"
            >
              {{ items.orderStatus ? "Delivered" : "Cancelled" }}
            </p>
            <p class="time">{{ items.time }}</p>
          </div>
          <div class="price">${{ items.price }}</div>
        </div>
      </div>
      <div class="container2" v-if="name == 0">
        <div class="orderHeader">
          <div class="orderMonth">March 5, 2019</div>
          <div class="goingTime">6:30 pm</div>
        </div>
        <!-- <div
          class="vertical"
          v-if="direction.toLocaleUpperCase() === 'V'"
        ></div> -->
        <verticalStep :dataSource="dataSource"></verticalStep>
      </div>
      <div>
        <div v-if="false">
          <van-image width="327" height="335" :src="buyBg" class="tabsImg" />
          <p class="tip">
            There is n ongoing order right now. You can order from home
          </p>
        </div>
      </div>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, toRefs, onMounted, ref } from "vue";
import verticalStep from "@/components/verticalStep.vue";
import orderIcon from "../../assets/images/order1.png";
import order1 from "../../assets/images/order-1.png";
import order2 from "../../assets/images/order-2.png";
import order3 from "../../assets/images/order-3.png";
import buy from "../../assets/images/order.png";
const buyBg = ref(buy);
const buyIcon = ref(orderIcon);
const active = ref(0);
const orderStep1 = ref(order1);
const orderStep2 = ref(order2);
const orderStep3 = ref(order3);
const name = ref(0);
console.log("active", active.value);
const list = reactive([
  {
    img: buyIcon,
    orderNo: "Order #3445",
    orderStatus: false,
    time: "October 26,2014",
    price: "700",
  },
]);
const test = reactive([
  {
    name: "Ongoing",
  },
  {
    name: "History",
  },
]);
const dataSource = reactive([
  {
    active: true,
    text: "1",
    desc: "We are packin your items...",
    img: orderStep1,
  },
  {
    active: true,
    text: "2",
    desc: "Your order is delivering to your location...",
    img: orderStep3,
  },
  {
    active: false,
    text: "3",
    desc: "Your order is received.",
    img: orderStep2,
  },
]);
const onClickTab = (e: any) => {
  console.log("e", e);
  name.value = e.name;
  console.log("name", name.value);
};
</script>

<style lang="scss" scoped>
.orderWarp {
  text-align: center;
  .tabsImg {
    margin-top: 73px;
  }
  .tip {
    padding: 32px;
    font-size: 16px;
    color: #804f1e;
  }
  .container {
    margin-top: 17px;
  }
  .container2 {
    margin-top: 17px;
    padding: 0 16px;
    .orderHeader {
      display: flex;
      justify-content: space-between;
      .orderMonth {
        color: #6d3805;
        font-size: 18px;
        font-weight: 700;
      }
      .goingTime {
        color: #f37a20;
        font-size: 14px;
      }
    }
  }
}
.orders {
  padding: 0 16px;
  display: flex;
  align-items: center;
  .orderDesc {
    flex: 1;
    text-align: left;
    .no {
      font-size: 18px;
      font-weight: 700;
      color: #804f1e;
    }
    .status {
      margin: 3px 0 4px 0;
    }
    .delivered {
      font-size: 14px;
      color: #5ec401;
    }
    .cancelled {
      font-size: 14px;
      color: #f2110d;
    }
    .time {
      color: #804f1e;
      font-size: 14px;
    }
  }
  .price {
    width: 49px;
    color: #f37a20;
    font-weight: 700;
    font-size: 20px;
  }
  .img {
    width: 64px;
  }
  .orderImg {
    position: relative;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: #f37a20;
    .icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
