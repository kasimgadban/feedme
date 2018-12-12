import Vue from 'vue'
import Vuex from 'vuex'
import cookModule from './modules/cookModule.js'
import eventModule from './modules/eventModule.js'
import cityModule from './modules/cityModule.js'
import socketModule from './modules/socketModule.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    cookModule,
    eventModule,
    cityModule,
    socketModule
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