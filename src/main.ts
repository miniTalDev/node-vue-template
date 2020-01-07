import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import locale from './locale'
import plugins from './plugins'
import pkg from '../package.json'

import '@/styles/global.scss'

Vue.config.productionTip = false
Vue.prototype.$api = api

const app = new Vue({
  router,
  store,
  i18n: locale,
  render: h => h(App)
}).$mount('#app')

plugins.install(app, router, store)

console.log(
  `%c ${pkg.name} %c v${pkg.version} %c Made with Vue.js and %c❤%c by ${pkg.author}.%c`,
  'color:#fff;background:linear-gradient(50deg,#965ed6 0,#bb00ff 100%);padding:5px 0;margin10px 0;',
  'background:#fadfa3;padding:5px 0;',
  'font-style:italic;',
  'color:red;',
  'font-style:italic;',
  ''
)
