import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.use(firestorePlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
