import Vue from 'vue'
import VueRouter from 'vue-router'
import { Store } from 'vuex'

export type PluginInstaller = (vm: Vue, router: VueRouter, store: Store<any>) => void

export interface Plugin {
  readonly name: string
  readonly install: PluginInstaller
}
