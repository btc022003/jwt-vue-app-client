import Vuex from 'vuex';
import Vue from 'vue';
import users from './modules/users';
import goods from './modules/goods';
import counter from './modules/counter';
import todos from './modules/todos';

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    users,
    goods,
    counter,
    todos,
  },
});

export default store;
