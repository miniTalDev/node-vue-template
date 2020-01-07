import Vue from 'vue'
import Vuex, { ModuleTree } from 'vuex'

import global from './modules/global'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const modules: ModuleTree<any> = {
  global
}

export default new Vuex.Store<any>({
  modules,
  strict: debug
})
