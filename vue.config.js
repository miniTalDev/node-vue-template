const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
const isExternalCDN = process.env.VUE_APP_EXTERNAL_CDN === 'true'
const cdn = {
  // Customize your external cdn library service
  js: [
    '//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3.1.5/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3.1.2/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/vue-i18n@8.15.3/dist/vue-i18n.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js',
    '//cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.js'
  ],
  css: [
    '//cdn.jsdelivr.net/npm/nprogress@0.2.0/nprogress.min.css'
  ]
}

module.exports = {
  publicPath: process.env.BASE_URL,
  productionSourceMap: !isProduction,
  configureWebpack: config => {
    if (isProduction && isExternalCDN) {
      // webpack external libraries
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'vue-i18n': 'VueI18n',
        'axios': 'axios',
        'nprogress': 'NProgress'
      }
    }
  },
  chainWebpack: config => {
    if (isProduction && isExternalCDN) {
      config
        .plugin('html')
        .tap(args => {
          args[0].cdn = cdn
          return args
        })
    }
    config.module
      .rule('pug')
      .test(/(\.pug|\.jade)$/)
      .use('pug')
      .loader('pug-plain-loader')
      .end()
    config.module
      .rule('scss')
      .oneOfs
      .store
      .forEach(item => {
        item
          .use('sass-resources-loader')
          .loader('sass-resources-loader')
          .options({
            resources: [
              path.resolve(__dirname, './src/styles/var.sass')
            ]
          })
          .end()
      })
  },
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_BASE_API,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
