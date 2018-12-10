import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/style.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import * as VueGoogleMaps from 'vue2-google-maps'

// Vue.use(VueGoogleMaps, {load: false})
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDlfCngyGCBHwBOr5EO_Ej7_TfZN1_ekqI',
    // key: 'AIzaSyCs3dFAQQdwpkPsFoTWeHxumSywRJm0YkY',
    libraries: 'places',
    language: 'en'
  },
})
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  Buefy,
  render: h => h(App)
}).$mount('#app')


