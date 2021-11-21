import { ref, CSSProperties, defineComponent, ExtractPropTypes, h } from "vue";
import Vfield from "./field";
export default defineComponent({
  setup() {
    const onSubmit = (values: any) => {
      console.log("submit", values);
    };
    const rules = [
      { required: true, message: "请填写用户名" },
      { required: true, message: "请填写密码" },
    ];
    const themeVars = {
      cellBackgroundColor: "#F3F3F3",
    };
    const username = ref("");
    const phone = ref("");
    return () =>
      h(
        <van-config-provider theme-vars={themeVars}>
          <van-form onClick={onSubmit}>
            <van-cell-group inset>
              <van-field
                v-model={username.value}
                name="用户名"
                placeholder="Name Surname"
                rules={rules[0]}
              />
              <Vfield pData={phone as any}></Vfield>
              {/* <van-field
                v-model={phone.value}
                placeholder="Phone Number"
                rules={rules[1]}
              ></van-field> */}
            </van-cell-group>
          </van-form>
        </van-config-provider>
      );
    // return (
    //   <div>222222 </div>
    // )
  },
});
