import * as components from './components.js'
import { setSSR } from './utilities/dom.js'

const Fabric = {
  install: function (Vue, options) {
    for (const key in components) {
      if (!components[key].__file) continue
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
