<template>
  <div class="resultWarp">
    <div class="result">{{ result.resultStatus }}</div>
    <div class="tip">
      {{ result.tip }}
    </div>
    <div class="common-btn-style btn track">{{ result.btn1 }}</div>
    <div class="common-btn-style btn">{{ result.btn2 }}</div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const { result } = defineProps({
  result: {
    type: Object as () => {
      resultStatus: string;
      tip: string;
      btn1: string;
      btn2: boolean;
    },
    required: true,
    default: {},
  },
});
</script>

<style lang="scss" scoped>
.resultWarp {
  text-align: center;
  .result {
    margin-top: 71px;
    padding: 0 37px;
    color: #6d3805;
    font-weight: 700;
    font-size: 20px;
  }
  .tip {
    padding: 0 37px;
    color: #6d3805;
    font-size: 16px;
    margin: 11px 0 42px 0;
  }
  .btn {
    margin: 0 auto;
  }
  .track {
    margin-bottom: 16px;
  }
}
</style>
