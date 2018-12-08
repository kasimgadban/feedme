import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cook from './views/cook.vue'
import event from './views/event.vue'
import Hosting from './views/hosting.vue'
// import requestModal from './components/requestModal.vue'
import city from './views/city.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cook/:id',
      name: 'cook',
      component: Cook
    },
    {
      path: '/event/:id',
      name: 'event',
      component: event
    },
    {
      path: '/hosting/:id',
      name: 'hosting',
      component: Hosting
    },
    {
      path: '/city/:cityId',
      name: 'city',
      component: city
    },
    // {
    //   path: '/event/:order',
    //   name: 'requestModal',
    //   component: requestModal
    // }
  ]
})
