import { Base } from "./base";
import { Request } from "./request";

class api {
  /* api接口模块 */
  public static index = {
    // 直接在index.ts中设置不需要Base模块
    // getPopularDeals: () => Request.get("/getPopularDeals"),
    // 基于Base模块封装调用
    // 获取单品
    getPopularDeals: () => Request.get(`${Base.env}/getPopularDeals`),
    // 获取用户信息
    getUserInfo: () => Request.get(`${Base.env}/getUserInfo`),
  };
  public static cart = {
    // 新增购物车
    addCar: (params: any) => Request.post(`${Base.env}/addCar`, params),
    // 获取购物车
    getCar: () => Request.get(`${Base.env}/addCar`),
    // 删除购物车
    deleteCar: (id: any) => Request.delete(`${Base.env}/addCar`, id),
    // 修改购物车
    patchCar: (params: any) =>
      Request.patch(`${Base.env}/addCar/${params.id}`, params),
  };
  public static login = {
    // 保存用户信息
    saveUserInfo: (params: any) =>
      Request.post(`${Base.env}/saveUserInfo`, params),
    // 保存密码
    savePassWord: (params: any) =>
      Request.post(`${Base.env}/savePassWord`, params),
    // 更新/创建token
    createToken: (params: any) =>
      Request.post(`${Base.env}/createToken`, params),
    // 获取token
    getToken: () => Request.get(`${Base.env}/createToken`),
  };
}
export { api };
