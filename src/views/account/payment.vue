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

    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const address = reactive([
  { name: "Goteborg", name2: "Arkaden", distance: "1.4 MI" },
  { name: "Kungsbacka", name2: "Kungsmassan", distance: "17 MI" },
]);
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
      background-color: #FFE6CC;
      height: 100px;
      border-radius: 10px;
  }
}
</style>
