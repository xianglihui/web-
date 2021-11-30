<template>
  <van-field
    v-model="phone"
    name="phone"
    placeholder="Phone Number"
    @update:model-value="update"
  >
    <template #label>
      <div class="flex-align-justify-spacebetween">
        <van-image width="28px" :src="national" />
        <van-icon name="play" size="12" />
      </div>
    </template>
  </van-field>
</template>

<script lang="ts" setup>
import { useCustomFieldValue } from "@vant/use";
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
const phone = ref("");
const emit = defineEmits(["getVal"]);
const update = (e: any) => {
  emit("getVal", e);
};
// const { phone } = defineProps({
//   phone: {
//     type: String as () => string,
//     required: true,
//   },
// });
useCustomFieldValue(() => phone.value);
</script>

<style></style>
