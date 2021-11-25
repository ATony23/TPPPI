import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import services from './modules/services.store'
import booked from './modules/booked.store'

export default new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    services: services,
    booked: booked
  }
})