import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

//elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//axios
import axios from 'axios'
// axios.defaults.baseURL = ''
Vue.prototype.$axios=axios;

//base.css
import '@/assets/css/base.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
