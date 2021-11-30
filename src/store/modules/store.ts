export interface State {
  title: string;
  isNoBar: boolean;
  isBack: boolean;
  isAdd: boolean;
  routeType: number;
  token: string;
}
export interface setState {
  [proppName: string]: string;
}
const state = {
  token: "", //token
  title: "", //nav title
  isNoBar: false, //是否需要navBar
  isBack: false, // 是否需要后退
  isAdd: false, //是否需要新增
  routeType: 0, //根据值跳转页面
};
const mutations = {
  saveToken(state: setState, value: string) {
    state.token = value;
    localStorage.setItem("token", value);
  },
  setTitle(state: setState, value: string) {
    state.title = value;
  },
  setBar(state: State, value: boolean) {
    state.isNoBar = value;
  },
  setBack(state: State, value: boolean) {
    state.isBack = value;
  },
  setAdd(state: State, value: boolean) {
    state.isAdd = value;
  },
  setRouteType(state: State, value: number) {
    state.routeType = value;
  },
};
const getters = {
  token: (st: State) => {
    if (state.token) {
      return state.token;
    } else {
      return localStorage.getItem("token");
    }
  },
  title: (st: State) => {
    return st["title"];
  },
  navBar: (st: State) => {
    return st["isNoBar"];
  },
  back: (st: State) => {
    return st["isBack"];
  },
  add: (st: State) => {
    return st["isAdd"];
  },
  routeNo: (st: State) => {
    return st["routeType"];
  },
};
const actions = {
  addToken(context: any, payload: string) {
    context.commit("saveToken", payload);
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
