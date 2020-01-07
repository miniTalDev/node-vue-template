import {
  Module,
  Commit,
  GetterTree,
  MutationTree,
  ActionTree
} from 'vuex'

import * as types from '../mutation-types'
import { KEY_COUNTER } from '@/constants'

export interface State {
  counter: number
}

const initState: State = {
  counter: Number.parseInt(localStorage.getItem(KEY_COUNTER) || '0') || 0
}

const getters: GetterTree<State, any> = {
}

const mutations: MutationTree<State> = {
  [types.SET_COUNTER] (state: State, counter: number) {
    state.counter = counter
    localStorage.setItem(KEY_COUNTER, counter.toString())
  },
  [types.DEL_COUNTER] (state: State) {
    state.counter = 0
    localStorage.removeItem(KEY_COUNTER)
  }
}

const actions: ActionTree<State, any> = {
}

const module: Module<State, any> = {
  namespaced: true,
  state: initState,
  getters,
  mutations,
  actions
}

export default module
