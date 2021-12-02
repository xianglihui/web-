<template>
  <div class="main-register">
    <center class="title">Sign Up</center>
    <template v-for="(item, index) in steps">
      <component
        :is="item.template"
        v-if="index == step"
        :key="index"
        v-model:form="formData"
      ></component>
    </template>
  </div>
</template>

<script setup>
import { ref, watch, reactive, provide } from "vue";
import { useRoute, useRouter } from "vue-router";
// 如果不写tsx的话
import Step1 from "../components/register/setp1.vue";
import Step2 from "../components/register/setp2.vue";
import Step3 from "../components/register/setp3.vue";

const route = useRoute();

const router = useRouter();

const steps = [
  {
    template: Step1,
  },
  {
    template: Step2,
  },
  {
    template: Step3,
  },
];

const step = ref(0);
// ...
</script>

<style lang="scss" scoped>
.main-register {
  .title {
    font-weight: bold;
    font-size: 24px;
    line-height: 41px;
    letter-spacing: 0.41px;
    color: #ff5e00;
  }
}
</style>
