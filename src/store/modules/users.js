import { reg, login } from '../../services/users';

const state = {
  list: [],
  currentUser: {},
};

const actions = {
  reg({ commit }, payload) { // eslint-disable-line
    reg(payload).then((res) => {
      localStorage.csrf = res.data.csrf;
    });
  },
  login({ commit }, payload) { // eslint-disable-line
    login(payload.user).then((res) => {
      console.log(res);
      if (res) {
        localStorage.csrf = res.data.csrf;
        payload.$router.push({
          name: 'TodoList',
        }); // change route
        // return res;
      }
    });
  },
};

const mutations = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
