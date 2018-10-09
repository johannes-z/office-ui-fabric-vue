import Vue from 'vue'
import VueRouter from 'vue-router'

import Fabric from './'

import Button from './pages/Button.vue'
import Breadcrumb from './pages/Breadcrumb.vue'
import Callout from './pages/Callout.vue'
import Checkbox from './pages/Checkbox.vue'
import ChoiceGroup from './pages/ChoiceGroup.vue'
import CommandBar from './pages/CommandBar.vue'
import ContextualMenu from './pages/ContextualMenu.vue'
import Dropdown from './pages/Dropdown.vue'
import Label from './pages/Label.vue'
import Layer from './pages/Layer.vue'
import Link from './pages/Link.vue'
import OverflowSet from './pages/OverflowSet.vue'
import Panel from './pages/Panel.vue'
import Pivot from './pages/Pivot.vue'
import ProgressIndicator from './pages/ProgressIndicator.vue'
import Shimmer from './pages/Shimmer.vue'
import SearchBox from './pages/SearchBox.vue'
import Spinner from './pages/Spinner.vue'
import Slider from './pages/Slider.vue'
import TextField from './pages/TextField.vue'
import Toggle from './pages/Toggle.vue'

Vue.use(Fabric)
Vue.use(VueRouter)

const routes = [
  {
    name: 'Basic Inputs',
    children: [
      { name: 'Button', path: '/button', component: Button },
      { name: 'Checkbox', path: '/checkbox', component: Checkbox },
      { name: 'ChoiceGroup', path: '/choiceGroup', component: ChoiceGroup },
      { name: 'ContextualMenu', path: '/contextualMenu', component: ContextualMenu },
      { name: 'Dropdown', path: '/dropdown', component: Dropdown },
      { name: 'Label', path: '/label', component: Label },
      { name: 'Link', path: '/link', component: Link },
      { name: 'Slider', path: '/slider', component: Slider },
      { name: 'TextField', path: '/textfield', component: TextField },
      { name: 'Toggle', path: '/toggle', component: Toggle },
    ] },
  {
    name: 'Navigation',
    children: [
      { name: 'Breadcrumb', path: '/breadcrumb', component: Breadcrumb },
      { name: 'CommandBar', path: '/commandBar', component: CommandBar },
      { name: 'Pivot', path: '/pivot', component: Pivot },
      { name: 'OverflowSet', path: '/overflowSet', component: OverflowSet },
      { name: 'SearchBox', path: '/searchBox', component: SearchBox },
    ],
  },
  {
    name: 'Content',
    children: [

    ],
  },
  {
    name: 'Progress & Validation',
    children: [
      { name: 'ProgressIndicator', path: '/progressIndicator', component: ProgressIndicator },
      { name: 'Shimmer', path: '/shimmer', component: Shimmer },
      { name: 'Spinner', path: '/spinner', component: Spinner },
    ],
  },
  {
    name: 'Surfaces',
    children: [
      { name: 'Callout', path: '/callout', component: Callout },
      { name: 'Layer', path: '/layer', component: Layer },
      { name: 'Panel', path: '/panel', component: Panel },
    ],
  },
]

const router = new VueRouter({
  routes: routes.map(category => category.children).flat(),
})

const app = new Vue({
  router,
  render (h) {
    var navItems = routes.map(category => {
      var links = category.children.map(route => (
        <router-link tag="li"
          to={route.path}
          style="margin-bottom: 6px;">
          <v-link>{route.name}</v-link>
        </router-link>
      ))
      return (
        <ul>
          <li>{category.name}</li>
          <ul>{links}</ul>
        </ul>
      )
    })

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
