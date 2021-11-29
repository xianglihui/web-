<template>
  <div class="orderWarp">
    <van-image
      width="306"
      height="281"
      :src="confirmTag ? successImg : failImg"
      class="img"
    />
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import orderFail from "../assets/images/orderFail.png";
import success from "../assets/images/success.png";
const { confirmTag } = defineProps({
  confirmTag: {
    type: Boolean as () => boolean, //(string也可以是其他你自定义的接口)
    required: true,
  },
});
const failImg = ref(orderFail);
const successImg = ref(success);
</script>

<style lang="scss" scoped>
.orderWarp {
  text-align: center;
  .img {
    margin-top: 125px;
  }
}
</style>
