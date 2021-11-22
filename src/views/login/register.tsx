import { ref, defineComponent, h, toRefs, reactive, provide, watch } from "vue";
import p1 from "@/assets/images/p1.png";
import p2 from "@/assets/images/p2.png";
import p3 from "@/assets/images/p3.png";
import AllStep from "../../components/register";
import Step1 from "@/components/register/step1.vue";
import Step2 from "@/components/register/step2.vue";
import Step3 from "@/components/register/step3.vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  // tsx中需要提前申明
  // props: {
  //   step: {
  //     type: Number,
  //   },
  // },
  setup(props) {
    const router = useRouter();
    const route = useRoute();
    const currentStep = ref(0);
    const imgs = reactive([p1, p2, p3]);
    // 跳转
    const next = () => {
      currentStep.value++;
      console.log("currentStep.value", currentStep.value);
      router.push({ name: "register", query: { step: 1 } });
    };
    // provide
    provide("next", next);
    watch([route], () => {
      currentStep.value = Number.parseInt((route.query.step || "0") as string);
    });
    return () =>
      h(
        <div class="img">
          <van-image width="300" height="270" src={imgs[currentStep.value]} />
          {currentStep.value === 0 ? (
            <Step1></Step1>
          ) : currentStep.value === 1 ? (
            <Step2></Step2>
          ) : (
            <Step3></Step3>
          )}
        </div>
      );
  },
});
