import Vue from 'vue';
import Vuex from 'vuex';

import users from '@/pages/users/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
  },
});
