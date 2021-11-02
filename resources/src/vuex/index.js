import Vuex from 'vuex'

import commonActions from './actions/actions'


const actions = {...commonActions}

// Vue.use(Vuex);

let store = new Vuex.Store({
  state: {},
  actions,
});

export default store;