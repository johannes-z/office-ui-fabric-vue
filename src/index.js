import * as components from './components.js'
import setSSR from './utilities/dom.js'

const Fabric = {
  install: function (Vue, options) {
    for (const key in components) {
      Vue.component(key, components[key])
    }
  },
  Utilities: {
    setSSR,
  },
}

export default Fabric
