<template>
  <div class="img">
    <van-image width="300" height="270" :src="imgs[step]" />
  </div>
  <!-- <baseStep></baseStep> -->
  <!-- <registerStep></registerStep> -->
  <allStep :step="step"></allStep>
</template>

<script lang="ts" setup>
import p1 from "@/assets/images/p1.png";
import p2 from "@/assets/images/p2.png";
import p3 from "@/assets/images/p3.png";
// import baseStep from "../../components/register/step1";
// import registerStep from "@/components/register/step.vue";
import allStep from "../../components/register";
import { ref, watch, reactive } from "vue";

const step = ref(0);
const imgs = reactive([p1, p2, p3]);
</script>

<style lang="scss" scoped>
.img {
  text-align: center;
}
</style>
