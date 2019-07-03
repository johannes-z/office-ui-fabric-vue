import * as components from './components.js'
import { setSSR } from './utilities/dom.js'

const Fabric = {
  install: function (Vue, options) {
    for (const key in components) {
      if (!key.startsWith('V')) continue
      Vue.component(key, components[key])
    }
  },
  Utilities: {
    setSSR,
  },
  version: require('../package.json').version,
}

export * from './components.js'

export default Fabric
