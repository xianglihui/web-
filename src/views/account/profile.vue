<template>
  <div>
    <van-cell-group :border="false" >
      <van-cell :title-style="titleT" title="Edit Profile" icon="location-o" :border="false" is-link />
      <van-cell title="Change Password" icon="location-o" :border="false" is-link />
      <van-cell title="My Cards" icon="location-o" :border="false" is-link />
    </van-cell-group>
    <div class="title">App Settings</div>
    <van-cell-group :border="false" >
      <van-cell title="Notifications" icon="location-o" :border="false">
        <template #right-icon>
           <van-switch v-model="checked" />
        </template>
      </van-cell>
      <van-cell title="Language" icon="location-o" value="English" :border="false" is-link />
      <van-cell title="Logout" icon="location-o" :border="false" is-link />
    </van-cell-group>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs, ref } from "vue";
import goodsItem from "@/components/goodsItem.vue";
import fruitImg from "../../assets/images/apple.png";
const checked =ref(false)
const list = reactive([
  {
    img: fruitImg,
    name: "Red Apple",
    num: 1,
    price: 4.99,
  },
]);
const titleT = reactive({
    fontSize:"18px",
    color:"#804F1E",
    fontWeight:'700'
})
</script>

<style lang="scss" scoped>
.title {
    padding: 20px;
    font-weight: 700;
    color: #FF5E00;
    font-size: 22px;
}
</style>
