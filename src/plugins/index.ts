import { PluginInstaller, Plugin } from './defined'

import nprogress from './modules/nprogress'

export interface Plugins {
  readonly values: Plugin[]
  readonly install: PluginInstaller
}

const values: Plugin[] = [
  nprogress
]
const plugins: Plugins = {
  values,
  install: (vm, router, store) => {
    for (const plugin of values) {
      plugin.install(vm, router, store)
    }
  }
}

export default plugins
