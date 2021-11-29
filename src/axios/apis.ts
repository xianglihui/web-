import { Base } from "./base";
import { Request } from "./request";

class api {
  /* api接口模块 */
  public static index = {
    // 直接在index.ts中设置不需要Base模块
    // getPopularDeals: () => Request.get("/getPopularDeals"),
    // 基于Base模块封装调用
    getPopularDeals: () => Request.get(`${Base.env}/getPopularDeals`),
  };
}
export { api };
