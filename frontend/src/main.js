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
// import component and stylesheet
// import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
// import 'vue-airbnb-style-datepicker/dist/vue-airbnb-style-datepicker.min.css'

// see docs for available options
// const datepickerOptions = {}

// make sure we can use it in our components
// Vue.use(AirbnbStyleDatepicker, datepickerOptions)

// Vue.use(VCalendar)


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
  render: h => h(App)
}).$mount('#app')


