<template>
  <van-swipe-cell>
    <div class="cell">
      <div class="img">
        <div class="imgBox">
          <van-image width="34" height="21" :src="item.img" class="cardImg" />
        </div>
      </div>
      <div class="card">
        <div class="type">{{ item.type }}</div>
        <div class="cardNo">{{ item.no }}</div>
      </div>
      <div>
        <van-icon
          :name="item.ischeck ? 'arrow' : 'success'"
          :color="item.ischeck ? '' : '#58A919'"
          :size="item.ischeck? '' : '0.6rem'"
        />
      </div>
    </div>
    <template #right>
      <van-button square text="删除" type="danger" class="delete-button2" />
    </template>
  </van-swipe-cell>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import card from "@/assets/images/vasa.png";
const cardImg = ref(card);
const { item } = defineProps({
  item: {
    type: Object as () => {
      img: string;
      type: string;
      no: string;
      ischeck: boolean;
    },
    required: true,
    default: {},
  },
});
</script>

<style lang="scss" scoped>
.delete-button2 {
  height: 100px !important;
}
.cell {
  display: flex;
  padding: 12px 16px;
  height: 100px;
  border-bottom: 1px solid #f2ede8;
  align-items: center;
  .imgBox {
    position: relative;
    width: 57px;
    height: 38px;
    text-align: center;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    .cardImg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .img {
    width: 78px;
  }
  .card {
    flex: 1;
    .type {
      color: #6d3805;
      font-size: 18px;
      font-weight: 700;
    }
    .cardNo {
      margin-top: 11px;
      font-size: 14px;
      color: #6d3805;
    }
  }
}
</style>
