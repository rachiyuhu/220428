import Vue from 'vue'
import App from './App.vue'
import router from './router'

//axios 모듈 사용 태그
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
