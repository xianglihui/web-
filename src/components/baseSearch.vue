<template>
  <view>
    <van-search v-model="value" placeholder="search" />
  </view>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const value = ref("");
</script>

<style></style>
