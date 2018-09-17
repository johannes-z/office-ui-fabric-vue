module.exports = {
  chainWebpack: config => {
    config.module.rule('modules')
      .resourceQuery(/module/)
      .use('vue-style-loader')
      .loader('css-loader')
      .options({
        modules: true,
        localIdentName: '[hash:base64:5]',
      })
  },
  css: {
    extract: false,
  },
}
