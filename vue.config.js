const path = require('path')

module.exports = {
  publicPath: process.env.BASE_URL,
  productionSourceMap: process.env.NODE_ENV !== 'production',
  chainWebpack: config => {
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
              path.resolve(__dirname, './src/styles/var.scss')
            ]
          })
          .end()
      })
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://example.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  }
}
