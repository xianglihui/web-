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
        <van-steps direction="vertical" :active="0">
          <van-step>
            <van-image width="45" height="60" :src="orderStep1" />
            We are packin your items...
          </van-step>
          <van-step>
            <h3>【城市】物流状态2</h3>
            <p>2016-07-11 10:00</p>
          </van-step>
          <van-step>
            <h3>快件已发货</h3>
            <p>2016-07-10 09:30</p>
          </van-step>
        </van-steps>
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
import orderIcon from "../../assets/images/order1.png";
import order1 from "../../assets/images/order-1.png";
import buy from "../../assets/images/order.png";
const buyBg = ref(buy);
const buyIcon = ref(orderIcon);
const active = ref(0);
const orderStep1 = ref(order1);
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
