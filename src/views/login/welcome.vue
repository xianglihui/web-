<template>
  <div class="welcomeWarp">
    <div class="welcome">
      <van-image width="329" height="326" :src="welcome" />
    </div>
    <p class="tip">Realax and shop</p>
    <div class="desc">
      <p>Shop online and get grocories</p>
      <p>delivered from stores to your home</p>
      <p>in as fast as 1 hour .</p>
    </div>
    <div class="signUp" @click="signUp">sign up</div>
    <div class="signIn">sign in</div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import welcome from "../../assets/images/shop.png";
const router = useRouter();
const signUp = () => {
  router.push({ path: "signUp" });
};
</script>

<style lang="scss" scoped>
@mixin commonBtn {
  width: 343px;
  height: 50px;
  background-color: #ff5e00;
  text-align: center;
  line-height: 50px;
  font-size: 17px;
  font-weight: 700;
  border-radius: 30px;
  color: #ffffff;
}
.welcomeWarp {
  text-align: center;
  .welcome {
    margin-top: 37px;
  }
  .tip {
    margin-top: 33px;
    font-size: 20px;
    font-weight: 700;
    color: #7f4e1d;
  }
  .desc {
    margin-top: 16px;
    font-size: 16px;
    color: #7f4e1d;
    font-weight: 400;
  }
  .signUp {
    margin: 51px auto 16px;
    @include commonBtn;
  }
  .signIn {
    @include commonBtn;
    margin: 0 auto;
  }
}
</style>
