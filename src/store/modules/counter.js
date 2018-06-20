const state = {
  count: 1,
};

const actions = {
  addActionAsync({ commit }, payload) {
    setTimeout(() => {
      commit('add', payload);
    }, 1000);
  },
  addActionSync({ commit }, payload) {
    commit('add', payload);
  },
};

const mutations = {
  add(state, payload) {
    if (payload) {
      state.count += payload.step;
    } else {
      state.count += 1;
    }
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
