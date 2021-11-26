<template>
  <div class="vertical">
    <div class="item-wrapper">
      <div
        class="item"
        :class="[{ current: item.active }]"
        v-for="(item, index) of dataSource"
        :key="index"
        @tap="switchTap(index)"
      >
        <div class="left">
          <div
            class="arc"
            :class="[{ active: item.active }]"
            v-if="type == 'default'"
          >
            <div class="success" v-if="item.active">
              <van-icon name="success"  size="2px"/>
            </div>
          </div>
          <div
            class="arc"
            :class="[{ active: item.active }, { 'icon-check': item.active }]"
            v-else-if="type == 'check'"
          ></div>
          <div class="line" v-if="index != dataSource.length - 1"></div>
          <!-- <div class="line"></div> -->
        </div>
        <div class="right">
          <div class="title">
            <van-image width="66" height="72" :src="item.img" class="img" />
          </div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
const { dataSource } = defineProps({
  dataSource: {
    // 数据来源
    type: Array,
    required: true,
    default: {},
  },
  type: {
    type: String,
    default: () => {
      // 组件类型（有两个值可选 "check", "default"）默认"default"
      return "default";
    },
  },
});
console.log("dataSource", dataSource);
</script>

<style lang="scss" scoped>
.vertical {
  background: #fff;
  width: 100%;
  overflow: hidden;
  .item-wrapper {
    position: relative;
    .item {
      color: #333;
      display: flex;
      min-height: 20px;
      &:last-child {
        min-height: 10px;
      }
      .left {
        position: relative;
        display: flex;
        top: 40px;
        .success {
          text-align: center;
          
        }
      }
      .right {
        display: flex;
        align-items: center;
        height: 120px;
        margin-left: 20px;
        .title {
          font-size: 16px;
          margin-right: 11px;
        }
        .desc {
          font-size: 16px;
          color: #6d3805;
          //   margin: 0.3rem;
        }
      }
      &.current p {
        color: #1bb5f1;
      }
      .arc {
        // background: #ccc;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        display: inline-block;
        font-size: 16px;
        // color: #a9a9a9;
        border: 1px solid #37474f;
        line-height: 15px;
        text-align: center;
      }
      &.current {
        .line {
          background-color: #1bb5f1;
        }
      }
      .line {
        padding: 0;
        width: 2px;
        position: absolute;
        height: calc(100% - 30px);
        box-sizing: border-box;
        border-left: 2px dashed #ccc;
        left: 50%;
        top: 20px;
        transform: translate(-50%, 0);
      }
      div {
        &.active {
          background-color: #5ec401;
          color: #fff;
          border: #fff;
        }
      }
    }
  }
}
</style>
