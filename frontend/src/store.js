import Vue from 'vue'
import Vuex from 'vuex'
import cookModule from './modules/cookModule.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    cookModule
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
