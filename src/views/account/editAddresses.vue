<template>
  <div>
    <van-config-provider :theme-vars="themeVars">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="form.title"
            name="Address Title"
            placeholder="Address Title"
            readonly
            is-link
            @click="showPicker = true"
          />
          <br />
          <van-field
            v-model="form.surname"
            name="Name Surname"
            placeholder="Name Surname"
          />
          <br />
          <van-field
            v-model="form.city"
            name="city"
            placeholder="city"
            readonly
            is-link
            @click="showPicker = true"
          />
          <br />
          <van-field
            v-model="form.address"
            name="Address"
            placeholder="Address"
          />
        </van-cell-group>
      </van-form>
    </van-config-provider>
    <van-popup v-model:show="showPicker" position="bottom">
      <van-picker
        :columns="columns"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>
    <div class="common-btn-style btn">Update Address</div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
const themeVars = {
  cellBackgroundColor: "#F3F3F3",
};
const form = reactive({
  title: "Home",
  surname: "mati egh",
  city: "Goteborg",
  address: "Lungangen 6, 41722",
});
const columns = reactive(["杭州", "宁波", "温州", "嘉兴", "湖州"]);
const showPicker = ref(false);
const result = ref("");
const onConfirm = (value: any) => {
  result.value = value;
  showPicker.value = false;
};
</script>

<style lang="scss" scoped>
.btn {
  margin-top: 226px;
}
</style>
