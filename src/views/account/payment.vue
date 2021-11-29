<template>
  <div class="payment">
    <!-- instore -->
    <div class="inStore flex-spacebetween">
      <div class="pickup">In-Store Pick Up</div>
      <div class="free">FREE</div>
    </div>
    <!-- picker -->
    <div class="picker flex-spacebetween">
      <div class="desc">Some Stores May Be Temporarily Unavalable.</div>
      <div class="icon">
        <van-icon name="arrow-down" class="vicon" />
      </div>
    </div>
    <!-- serach -->
    <div class="search">
      <van-search
        v-model="value"
        placeholder="Search For Town, Street, Zip Code..."
        input-align="center"
      />
    </div>
    <!-- distance -->
    <div class="distance">
      <div
        v-for="(item, index) in address"
        :key="index"
        class="address flex-spacebetween"
      >
        <div>
          <p class="name">{{ item.name }}</p>
          <p class="name">{{ item.name2 }}</p>
          <p class="nowDistance">{{ item.distance }}</p>
        </div>
        <div>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <!-- items -->
    <div class="items">
      <div class="itemImg">
        <van-image width="35" height="25" :src="itemsImg" />
      </div>
      <div class="desc">see Itemes</div>
      <div class="itemIcon">
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- card -->
    <div class="card">
      <div class="item cardTitle">
        <p class="title">Payment Method</p>
        <div class="pay flex-align">
          <div>
            <van-image width="40" height="25" :src="payImg" />
          </div>
          <div class="carName">Apple Pay</div>
          <div><van-icon name="success" size="30" color="#58A919" /></div>
        </div>
      </div>
      <div class="item">
        <div class="money flex-align">
          <div>
            <van-image width="40" height="40" :src="moneyImg" />
          </div>
          <div class="cash">Cash on delivery</div>
        </div>
      </div>
    </div>
    <!-- Order Sammery  -->
    <div class="sammery">
      <p class="title">Order Sammery</p>
      <p class="flex-align-justify-spacebetween">
        <span>Subtotal</span>
        <span>$137.00</span>
      </p>
      <p class="flex-align-justify-spacebetween">
        <span>Tax</span>
        <span>$4.50</span>
      </p>
      <p class="flex-align-justify-spacebetween store">
        <span>In-Store Pick Up</span>
        <span>$4.50</span>
      </p>
      <div class="total flex-align-justify-spacebetween">
        <span>Total:</span>
        <span>$141.50</span>
      </div>
    </div>
    <!-- btn -->
    <div class="common-btn-style btn" @click="payMoney">CheckOut$141.50</div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import items from "../../assets/images/vector.png";
import pay from "../../assets/images/carpay.png";
import money from "../../assets/images/money.png";
const router = useRouter();
const itemsImg = ref(items);
const payImg = ref(pay);
const moneyImg = ref(money);
const address = reactive([
  { name: "Goteborg", name2: "Arkaden", distance: "1.4 MI" },
  { name: "Kungsbacka", name2: "Kungsmassan", distance: "17 MI" },
]);
const payMoney = () => {
  router.push({ path: "/account/payment/confirmOrder" });
};
</script>

<style lang="scss" scoped>
@mixin common-font-weight {
  font-weight: 700;
  color: #6d3805;
}
.payment {
  padding: 0 24px;
  .pickup {
    @include common-font-weight;
    font-size: 22px;
  }
  .free {
    @include common-font-weight;
    font-size: 18px;
  }
  .picker {
    margin-top: 12px;
    .desc {
      flex: 1;
      color: #6d3805;
      font-size: 18px;
    }
    .icon {
      width: 51px;
      text-align: center;
    }
    .vicon {
      margin-top: 10px;
    }
  }
  .search {
    margin: 20px 0 8px 0;
  }
  .distance {
    height: 241px;
    width: 100%;
    background-color: #fff4e9;
    border-radius: 7px;
    .address {
      height: 50%;
      .name {
        @include common-font-weight;
        font-size: 18px;
      }
      .nowDistance {
        margin-top: 16px;
        font-size: 18px;
        color: #6d3805;
      }
    }
  }
  .items {
    padding: 0 16px;
    background-color: #fff4e9;
    height: 100px;
    border-radius: 10px;
    margin: 23px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .itemImg {
      width: 35px;
    }
    .desc {
      flex: 1;
      margin-left: 10px;
      text-align: left;
      color: #6d3805;
      font-weight: 700;
      font-size: 18px;
    }
  }
  .card {
    box-sizing: border-box;
    height: 203px;
    width: 100%;
    background-color: #fff4e9;
    border-radius: 10px;
    .cardTitle {
      border-bottom: 1px solid #6d38051c;
    }
    .item {
      height: 50%;
      padding: 16px;
      .title {
        font-weight: 700;
        font-size: 18px;
        color: #6d3805;
      }
      .pay {
        margin-top: 28px;
        justify-content: space-between;
        .carName {
          flex: 1;
          margin-left: 10px;
        }
      }
      .cash {
        margin-left: 10px;
        flex: 1;
        color: #6d3805;
        font-size: 16px;
      }
    }
  }
  .sammery {
    margin-top: 23px;
    height: 290px;
    width: 100%;
    background-color: #fff4e9;
    border-radius: 10px;
    padding: 16px;
    .title {
      @include common-font-weight;
      font-size: 18px;
    }
    p span {
      color: #6d3805;
      font-size: 18px;
      margin-top: 15px;
    }
    .store {
      margin-bottom: 10px;
    }
    .total {
      border-top: 1px solid #6d38051c;
      padding-top: 10px;
      span {
        @include common-font-weight;
        font-size: 18px;
      }
    }
  }
  .btn {
    margin: 30px auto 60px;
    width: 100%;
  }
}
</style>
