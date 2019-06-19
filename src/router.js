import Vue from 'vue'
import Router from 'vue-router'
import Example from './views/Example'
import Home from './views/home/Home'
import Contact from './views/contact/Contact'

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
      path: '/example',
      name: 'example',
      component: Example
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
