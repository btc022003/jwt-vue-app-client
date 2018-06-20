// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    add(state, payload) {
      console.log(payload);
      if (payload) {
        state.count += payload.step;
      } else {
        state.count += 1;
      }
    },
  },
  actions: {
    addActionAsync({ commit }, payload) {
      setTimeout(() => {
        commit('add', payload);
      }, 1000);
    },
  },
});
store.commit('add');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
