import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cook from './views/cook.vue'
import event from './views/event.vue'
import Hosting from './views/hosting.vue'
// import requestModal from './components/requestModal.vue'
import city from './views/city.vue'
import signup from './views/signup.vue'
import myprofile from './views/myprofile.vue'
import eventEdit from './views/eventEdit.vue'
import login from './views/login.vue'

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
      path: '/login',
      name: 'login',
      component: login
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
<<<<<<< HEAD
      path: '/event/edit/:id',
=======
      path: 'event/edit/:id',
>>>>>>> bc91b92b1a67d6fb26090c8e4b44d3931c3d0a0b
      name: 'eventEdit',
      component: eventEdit
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
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/myprofile/:id',
      name: 'myprofile',
      component: myprofile
    }
  ]
})
