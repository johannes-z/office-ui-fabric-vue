import Vue from 'vue'
import VueRouter from 'vue-router'

import Breadcrumb from './pages/Breadcrumb.vue'
import Checkbox from './pages/Checkbox.vue'
import Label from './pages/Label.vue'
import Link from './pages/Link.vue'
import ProgressIndicator from './pages/ProgressIndicator.vue'
import SearchBox from './pages/SearchBox.vue'
import Spinner from './pages/Spinner.vue'
import Toggle from './pages/Toggle.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/breadcrumb', component: Breadcrumb },
  { path: '/checkbox', component: Checkbox },
  { path: '/label', component: Label },
  { path: '/link', component: Link },
  { path: '/progressIndicator', component: ProgressIndicator },
  { path: '/searchBox', component: SearchBox },
  { path: '/spinner', component: Spinner },
  { path: '/toggle', component: Toggle },
]

const router = new VueRouter({
  routes,
})

const app = new Vue({
  router,
}).$mount('#app')
