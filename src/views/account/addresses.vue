<template>
  <div class="address" v-for="(item, index) in test" :key="index" @click="address">
    <div class="img">
      <van-image width="25" height="25" :src="item.img" />
    </div>
    <div class="ads">
      <p class="addressText">{{ item.address }}</p>
      <p class="no">{{ item.NO }}</p>
    </div>
    <div class="arrow">
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import address1 from "@/assets/images/address1.png";
import address2 from "@/assets/images/address2.png";
const addressImg1 = ref(address1);
const addressImg2 = ref(address2);
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();
const test = reactive([
  { address: "Home", NO: "Lungangen 6, 41722", img: addressImg1 },
  { address: "Office", NO: "Lungangen 6, 41722", img: addressImg2 },
]);
store.commit("setRouteType", 2);
const address = () => {
    router.push({ path: "/account/addresses/editAddresses" });
}
</script>

<style lang="scss">
.address {
  height: 99px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #804f1e1a;
  padding: 0 20px;
  .img {
    width: 33px;
  }
  .ads {
    flex: 1;
    .addressText {
      color: #6d3805;
      font-weight: 700;
      font-size: 18px;
    }
    .no {
      font-size: 16px;
      color: #6d3805cc;
    }
  }
  .arrow {
    width: 7px;
  }
}
</style>
