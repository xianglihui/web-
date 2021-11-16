<template>
  <!-- header navbar-->
  <!-- <van-nav-bar :title="title" /> -->
  <!-- main -->
  <baseNavBar :shareData="shareData"></baseNavBar>
  <!-- main -->
  <div class="main"><router-view></router-view></div>
  <!-- footer tabbar -->
  <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item
      :icon="item.icon"
      :to="item.url"
      v-for="(item, index) in items"
      :key="index"
    >
      {{ item.name }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import baseNavBar from "./baseNavBar.vue";
export default defineComponent({
  components: {
    baseNavBar,
  },
  name: "Index",
  setup() {
    const active = ref(0);
    const route = useRoute();
    const { title, isNeedBack } = route.meta;
    const state = reactive({
      shareData: {
        title: title,
        titleColoe: "#FF5E00",
        isNeedBack: isNeedBack,
      },
    });
    const items: Array<{ name: string; url: string; icon: string }> = [
      {
        name: "Shop",
        url: "/index",
        icon: "notes-o",
      },
      {
        name: "Explore",
        url: "/categories",
        icon: "idcard",
      },
      {
        name: "Cart",
        url: "/cart",
        icon: "idcard",
      },
      {
        name: "Favorite",
        url: "/test/library",
        icon: "idcard",
      },
      {
        name: "Account",
        url: "/test/library",
        icon: "idcard",
      },
    ];
    onMounted(() => {});
    return { items, active, title, ...toRefs(state) };
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

<style lang="scss" scoped>
.main {
  height: calc(100vh - 51px);
  overflow-y: auto;
}
</style>
