import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import 'bulma/css/bulma.css'
import './assets/main.css'
import './assets/spacing.css'
import 'animate.css/animate.min.css'
import 'font-awesome/scss/font-awesome.scss'

import NProgress from 'nprogress';
import '../node_modules/nprogress/nprogress.css'

/* 
** NProgress is used both with axios and router
*/

Vue.config.productionTip = false

// create a new axios instance
const instance = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})
// before a request is made start the nprogress
instance.interceptors.request.use(config => {
  NProgress.start()
  return config
})

// before a response is returned stop nprogress
instance.interceptors.response.use(response => {
  NProgress.done()
  return response
})
Vue.prototype.$http = instance;



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
