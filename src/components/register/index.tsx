import { ref, defineComponent, h, toRefs } from "vue";
import { useRouter } from "vue-router";
// step1
import Step1 from "@/components/register/step1.vue";
import Step2 from "@/components/register/step2.vue"
export default defineComponent({
  // tsx中需要提前申明
  // props: {
  //   step: {
  //     type: Number,
  //   },
  // },
  setup(props) {
    const router = useRouter();
    const stepFunc = () => {
      // router.push({ path: "/account/profile" });
    };
    const container = {
      step1: () => <Step1 onStepFunc={stepFunc}></Step1>,
    };
    return () => h(<div>{container.step1()}</div>);
  },
});
