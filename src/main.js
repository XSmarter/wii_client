import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.css'
import axios from 'axios'
import api from './api' // 导入api接口


Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.$api = api; // 将api挂载到vue的原型上

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
