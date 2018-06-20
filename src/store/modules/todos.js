import { fetch, create } from '../../services/todos';

const state = {
  list: [],
};

const actions = {
  getList({ commit }, payload) { // eslint-disable-line
    fetch(payload).then((res) => {
      // localStorage.csrf = res.data.csrf;
      commit('fetchList', res.data);
    });
  },
  create({ commit, dispatch }, payload) { // eslint-disable-line
    create(payload).then((res) => { // eslint-disable-line
      // getList()
      dispatch('getList', {});
    });
  },
};

const mutations = {
  fetchList(state, payload) {
    state.list = payload;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
