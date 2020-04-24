const state = {
  user: "",
};
const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
};
const actions = {
  setUser({ commit }, payload) {
    commit("SET_USER", payload);
  },
};

export default {
  namespaced: true,
  actions,
  state,
  mutations,
};
