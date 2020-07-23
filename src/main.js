import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
//定义一个 state 对象来共享答题数据（答题页面和结果页面共享）
const state = { questions: [] }

Vue.use(BootstrapVue)

new Vue({
  router,
  data: state,
  render: h => h(App)
}).$mount('#app')
