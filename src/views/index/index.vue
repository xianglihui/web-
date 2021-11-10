<template>
  <div class="indexWarp">
    <!-- search -->
    <baseSearch></baseSearch>
    <!-- categories header -->
    <div class="flex-spacebetween">
      <span class="categories">categories</span>
      <span class="seeAll">see all</span>
    </div>
    <!-- categories main -->
    <div class="left-content" ref="leftScroll">
      <div class="left">
        <div
          v-for="(item, index) in categoryList"
          :key="index"
          class="left-item"
        >
          <van-image width="100" height="100" round :src="item.img" />
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, ref } from "vue";
import baseSearch from "@/components/baseSearch.vue";
import BScroll from "better-scroll";
import fruit from "../../assets/images/itembg.png";
export default defineComponent({
  components: {
    baseSearch,
  },
  setup() {
    const state = reactive({
      categoryList: [
        {
          img: fruit,
          name: "水果",
        },
        {
          img: fruit,
          name: "水果",
        },
        {
          img: fruit,
          name: "水果",
        },
        {
          img: fruit,
          name: "水果",
        },
        {
          img: fruit,
          name: "水果",
        }
      ],
    });
    const leftActive = ref<number>(0);
    const leftScroll = ref<any>(null);
    const leftItemClick = (e: number) => {
      leftActive.value = e;
    };
    onMounted(() => {
      const leftBs = new BScroll(leftScroll.value, {
        scrollX: true,
        probeType: 3, // listening scroll event
      });
    });
    return {
      ...toRefs(state),
      leftItemClick,
      leftActive,
      leftScroll,
    };
  },
});
</script>

<style lang="scss">
.indexWarp {
  padding: 0 10px;
  .categories {
    font-size: 22px;
    font-weight: 700;
    color: #6d3805;
  }
  .seeAll {
    font-size: 18px;
    font-weight: 400;
    color: #ff5e00;
  }
  .left-content {
    margin-top: 30px;
    /* 此处高度必须，根据业务实际情况而定 */
    height: 20vh;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
  .left {
    /* 此处高度不写，根据子元素高度自适应 */
    display: inline-block;
  }
  .left-item {
    display: inline-block;
    text-align: center;
    padding: 0 10px;
    .name {
      margin-top: 16px;
    }
  }
}
</style>
