import Vue from 'vue'
import Vuex, { ModuleTree } from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const modules: ModuleTree<any> = {
}

export default new Vuex.Store<any>({
  modules,
  strict: debug
})
