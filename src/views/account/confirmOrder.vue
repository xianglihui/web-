<template>
  <orderReault :confirmTag="confirmTag">
    <template v-slot:content>
      <simpleResult :result="confirmTag ? result[0] : result[1]"></simpleResult>
    </template>
  </orderReault>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import orderReault from "@/components/orderResult.vue";
import simpleResult from "@/components/simpleResult.vue";
const confirmTag = ref(false);
const result = [
  {
    resultStatus: "Your Order Has Been Accepted",
    tip: "We’ve accepted your order, and we’re getting it ready.",
    btn1: "Track Order",
    btn2: "Back Home",
  },
  {
    resultStatus: "Oops! Order Failed!",
    tip: "Something went terribly wrong",
    btn1: "Try Again",
    btn2: "Back Home",
  },
];
</script>

<style></style>
