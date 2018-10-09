import * as components from './components.js'

const Fabric = {
  install: function (Vue, options) {
    for (const key in components) {
      Vue.component(key, components[key])
    }
  },
}

export default Fabric
