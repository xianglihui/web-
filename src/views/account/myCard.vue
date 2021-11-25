<template>
  <div class="myCardWarp">
    <div v-for="(item, index) in list" :key="index">
      <simpleCell :item="item"></simpleCell>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue";
import simpleCell from "@/components/simpleCell.vue";
import card from "@/assets/images/vasa.png";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
const store = useStore();
const list = reactive([
  {
    img: card,
    type: "my card",
    no: "5342 **** **** 6745",
    ischeck: false,
  },
  {
    img: card,
    type: "my card",
    no: "5342 **** **** 6745",
    ischeck: true,
  },
]);
store.commit("setRouteType", 1);
</script>

<style lang="scss" scoped>
.myCardWarp {
  //   padding: 0 20px;
}
</style>
