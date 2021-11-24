<template>
  <div class="orderWarp">
    <van-tabs>
      <van-tab
        v-for="(item, index) in test"
        :title="item.name"
        :key="index"
        class="box"
      >
      </van-tab>
      <div>
        <van-image width="327" height="335" :src="buyBg" class="tabsImg" />
        <p class="tip">
          There is n ongoing order right now. You can order from home
        </p>
      </div>
    </van-tabs>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, toRefs, onMounted, ref } from "vue";
import buy from "../../assets/images/order.png";
const buyBg = ref(buy);
const test = reactive([
  {
    name: "Ongoing",
  },
  { name: "History" },
]);
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
}
</style>
