import { Plugin } from '../defined'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

nprogress.inc(0.2)
nprogress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: true
})

const plugin: Plugin = {
  name: 'nprogress',
  install: (vm, router, store) => {
    router.beforeEach((to, from, next) => {
      nprogress.start()
      next()
    })
    router.afterEach(() => {
      nprogress.done()
    })
  }
}

export default plugin
