<template>
  <div class="main"><router-view></router-view></div>
  <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item
      :icon="item.icon"
      :to="item.url"
      v-for="(item, index) in items"
      :key="index"
      >{{ item.name }}</van-tabbar-item
    >
  </van-tabbar>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "Index",
  setup() {
    const active = ref(0);
    const items: Array<{ name: string; url: string; icon: string }> = [
      {
        name: "考题测试",
        url: "/test/index",
        icon: "notes-o",
      },
      {
        name: "考题库",
        url: "/test/library",
        icon: "idcard",
      },
    ];
    return { items, active };
  },
  mounted() {
    this.setActive();
  },
  methods: {
    setActive() {
      this.items.map((v: { url: string }, index: number) => {
        if (v.url === this.$route.path) return (this.active = index);
      });
    },
  },
});
</script>

<style lang="less" scoped>
.main {
  height: calc(100vh - 51px);
  overflow-y: auto;
}
</style>
