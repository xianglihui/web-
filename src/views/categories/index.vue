<template>
  <div>
    <!-- search -->
    <baseSearch></baseSearch>
    <!-- categories main -->
    <div class="categories">
      <div v-for="(item, index) in list" :key="index" class="item">
        <van-image width="100" height="100" :src="item.img" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, reactive, toRefs, onMounted, ref } from "vue";
import baseSearch from "@/components/baseSearch.vue";
import fruit from "../../assets/images/itembg.png";

const list = reactive([
  {
    img: fruit,
    name: "Fruits",
  },
  {
    img: fruit,
    name: "Fruits",
  },
  {
    img: fruit,
    name: "Fruits",
  },
  {
    img: fruit,
    name: "Fruits",
  },
  {
    img: fruit,
    name: "Fruits",
  },
  {
    img: fruit,
    name: "Fruits",
  },
  {
    img: fruit,
    name: "Fruits",
  },
]);
</script>

<style lang="scss">
.categories {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  .item {
    margin: 0 8px;
  }
}
</style>
