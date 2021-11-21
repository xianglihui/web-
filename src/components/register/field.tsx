import { ref, defineComponent, h, toRefs } from "vue";
import national from "@/assets/images/national.png";
export default defineComponent({
  props: {
    pData: {
      type: String,
    },
  },
  setup(props, { emit, slots }) {
    const { pData } = toRefs(props);
    const img = national;
    const show = () => {
      console.log("show");
    };
    const label = {
      default: () => (
        <div class="country" onClick={show}>
          <van-image width="28px" src={img} />
          <van-icon name="play" size="12" />
        </div>
      ),
    };
    return () =>
      h(
        <div>
          {label.default()}
          <van-field
            v-model={pData.value}
            name="用户名"
            placeholder="Name Surname"
          >
            <template v-slots={label} >{label.default()}</template>
          </van-field>
        </div>
      );
  },
});
