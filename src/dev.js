import Vue from 'vue'
import VueRouter from 'vue-router'

import { ActionButton } from './'

import Button from './pages/Button.vue'
import Breadcrumb from './pages/Breadcrumb.vue'
import Checkbox from './pages/Checkbox.vue'
import Label from './pages/Label.vue'
import Link from './pages/Link.vue'
import ProgressIndicator from './pages/ProgressIndicator.vue'
import SearchBox from './pages/SearchBox.vue'
import Spinner from './pages/Spinner.vue'
import Slider from './pages/Slider.vue'
import TextField from './pages/TextField.vue'
import Toggle from './pages/Toggle.vue'

Vue.use(VueRouter)

const routes = [
  { name: 'Button', path: '/button', component: Button },
  { name: 'Breadcrumb', path: '/breadcrumb', component: Breadcrumb },
  { name: 'Checkbox', path: '/checkbox', component: Checkbox },
  { name: 'Label', path: '/label', component: Label },
  { name: 'Link', path: '/link', component: Link },
  { name: 'ProgressIndicator', path: '/progressIndicator', component: ProgressIndicator },
  { name: 'SearchBox', path: '/searchBox', component: SearchBox },
  { name: 'Spinner', path: '/spinner', component: Spinner },
  { name: 'Slider', path: '/slider', component: Slider },
  { name: 'TextField', path: '/textfield', component: TextField },
  { name: 'Toggle', path: '/toggle', component: Toggle },
]

const router = new VueRouter({
  routes,
})

const app = new Vue({
  router,
  components: { ActionButton },
  render: h => {
    var navItems = routes.map(route => (
      <router-link tag="div" to={route.path}>
        <action-button>{route.name}</action-button>
      </router-link>
    ))

    return (
      <div class="ms-Fabric-Examples">
        <div id="navbar" style="width: 200px; padding-right: 20px; float: left;">
          {navItems}
        </div>

        <div style="width: calc(100% - 220px); float: left;">
          <router-view></router-view>
        </div>
      </div>
    )
  },
}).$mount('#app')
