export interface State {
  title: string;
}
export interface setState {
  [proppName: string]: string;
}
const state = {
  title: "", //nav title
};
const mutations = {
  setTitle(state: setState, value: string) {
    state.title = value;
  },
};
const getters = {
  title: (st: State) => {
    return st["title"];
  },
};
const actions = {};
export default {
  state,
  getters,
  actions,
  mutations,
};
