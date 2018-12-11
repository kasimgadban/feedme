import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/style.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'
import VueSocketIO from 'vue-socket.io'


const BASE_URL = process.env.NODE_ENV !== 'development'
    ? ''
    : '//localhost:3000'

 
Vue.use(new VueSocketIO({
    debug: true,
    connection: BASE_URL,
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    }
}))





Vue.use(VCalendar)
// Vue.use(EventBus)
Vue.use(Buefy)

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
  // EventBus,
  render: h => h(App)
}).$mount('#app')


