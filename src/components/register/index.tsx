import { ref, defineComponent, h, toRefs } from "vue";
// step1
import Step1 from "@/components/register/step1.vue";
export default defineComponent({
  // tsx中需要提前申明
  props: {
    step: {
      type: Number,
    },
  },
  setup(props) {
    // const container = [<step1 />];
    // const container = [step1];
    const container = {
      step1: () => <Step1></Step1>,
    };
    const { step } = toRefs(props);
    // return () => h(container[step.value as number]);
    return () => h(<div>{container.step1()}</div>);
  },
});
