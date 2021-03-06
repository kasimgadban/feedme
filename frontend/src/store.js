import Vue from 'vue'
import Vuex from 'vuex'
import cookModule from './modules/cookModule.js'
import reviewModule from './modules/reviewModule.js'
import eventModule from './modules/eventModule.js'
import cityModule from './modules/cityModule.js'
import chatModule from './modules/chatModule.js'
import socketModule from './modules/socketModule.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    cookModule,
    reviewModule,
    eventModule,
    cityModule,
    socketModule,
    chatModule
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