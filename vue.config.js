const DEFAULT_ENV = 'default'
const COMPONENTS_ENV = 'components'
const env = process.env.UI_ENV || DEFAULT_ENV

if (env === COMPONENTS_ENV) {
  var components = require('./components.json')

  module.exports = {
    configureWebpack: {
      devtool: false,
    },
    chainWebpack: config => {
      config.optimization.delete('splitChunks')

      config.plugins.delete('html')
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')

      Object.keys(components).forEach(function (key) {
        config.plugins.delete('html-' + key)
        config.plugins.delete('preload-' + key)
        config.plugins.delete('prefetch-' + key)
      })
    },
    css: {
      extract: false,
      modules: true,
    },
    pages: components,
    assetsDir: 'lib',
    productionSourceMap: false,
    filenameHashing: false,
  }
} else {
  module.exports = {
    configureWebpack: {
      devtool: 'source-map',
    },
    css: {
      extract: true,
      modules: true,
    },
  }
}
