const DEFAULT_ENV = 'default'
const COMPONENTS_ENV = 'components'
const env = process.env.UI_ENV || DEFAULT_ENV

if (env === COMPONENTS_ENV) {
  module.exports = {
    presets: [[
      '@vue/app',
      { useBuiltIns: false },
    ]],
  }
} else {
  module.exports = {
    presets: [
      '@vue/app',
    ],
  }
}
