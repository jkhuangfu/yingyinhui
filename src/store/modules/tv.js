const state = {
  src: "",
  name: "",
  isShowLogin: false,
};

const mutations = {
  SET_CURRENT_TV_SRC(state, payload) {
    state.src = payload.split("^")[0];
    state.name = payload.split("^")[1];
  },
  SET_LOGIN_FLAG(state, payload) {
    state.isShowLogin = payload || !state.isShowLogin;
  },
};

const actions = {
  setTvSrc({ commit }, payload) {
    commit("SET_CURRENT_TV_SRC", payload);
  },
  setLoginFlag({ commit }) {
    commit("SET_LOGIN_FLAG");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
