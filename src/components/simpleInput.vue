<template>
  <van-field v-model="phone" name="phone" placeholder="Phone Number">
    <template #label>
      <div class="flex-align-justify-spacebetween">
        <van-image width="28px" :src="national" />
        <van-icon name="play" size="12" />
      </div>
    </template>
  </van-field>
</template>

<script lang="ts" setup>
import national from "@/assets/images/national.png";
import {
  ref,
  defineProps,
  defineEmits,
  inject,
  watch,
  reactive,
  onMounted,
} from "vue";
const { phone } = defineProps({
  phone: {
    type: String as () => string, //(string也可以是其他你自定义的接口)
    required: true,
  },
});
</script>

<style></style>
