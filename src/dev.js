import Vue from 'vue'
import VueRouter from 'vue-router'

import Breadcrumb from './pages/Breadcrumb.vue'
import Label from './pages/Label.vue'
import ProgressIndicator from './pages/ProgressIndicator.vue'
import Spinner from './pages/Spinner.vue'
import Toggle from './pages/Toggle.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/breadcrumb', component: Breadcrumb },
  { path: '/label', component: Label },
  { path: '/progressIndicator', component: ProgressIndicator },
  { path: '/spinner', component: Spinner },
  { path: '/toggle', component: Toggle },
]

const router = new VueRouter({
  routes,
})

const app = new Vue({
  router,
}).$mount('#app')
