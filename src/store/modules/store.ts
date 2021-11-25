export interface State {
  title: string;
  isNoBar: boolean;
  isBack: boolean;
  isAdd: boolean;
  routeType: number;
}
export interface setState {
  [proppName: string]: string;
}
const state = {
  title: "", //nav title
  isNoBar: false, //是否需要navBar
  isBack: false, // 是否需要后退
  isAdd: false, //是否需要新增
  routeType: 0, //根据值跳转页面
};
const mutations = {
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
const actions = {};
export default {
  state,
  getters,
  actions,
  mutations,
};
