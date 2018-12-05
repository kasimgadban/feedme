import Vue from 'vue'
import Vuex from 'vuex'
import cookModule from './modules/cookModule.js'
import eventModule from './modules/eventModule.js'
import cityModule from './modules/cityModule.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    cookModule,
    eventModule,
    cityModule
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  }
})