export interface State {
  title: string;
  isNoBar: boolean;
  isBack: boolean;
}
export interface setState {
  [proppName: string]: string;
}
const state = {
  title: "", //nav title
  isNoBar: false, //是否需要navBar
  isBack: false, // 是否需要后退
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
};
const actions = {};
export default {
  state,
  getters,
  actions,
  mutations,
};
