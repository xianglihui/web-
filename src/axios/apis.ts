import { Base } from "./base";
import { Request } from "./request";

class api {
  /* api接口模块 */
  public static article = {
    // 直接在index.ts中设置不需要Base模块
    genre: () => Request.get("/api/SnArticle/GetCountAsync"),
    // 基于Base模块封装调用
    genres: () => Request.get(`${Base.env}/api/SnArticle/GetCountAsync`),
  };
}
export { api };
