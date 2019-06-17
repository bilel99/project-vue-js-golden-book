import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueResource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.root = 'https://jsonplaceholder.typicode.com/'

/**
 * Interceptor : After request
 */
Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (request.after) {
      request.after.call(this, response)
    }
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
