import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import index from './modules/index'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  ...index
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
