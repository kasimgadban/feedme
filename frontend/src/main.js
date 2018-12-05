import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/style.css'


import * as VueGoogleMaps from 'vue2-google-maps'

// Vue.use(VueGoogleMaps, {load: false})
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCs3dFAQQdwpkPsFoTWeHxumSywRJm0YkY',
    libraries: 'places',
    language: 'en'
  },
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


