import Vue from 'vue'
import VueRouter from 'vue-router'

import * as fabric from './index'

import PageLabel from './pages/Label.vue'
import PageSpinner from './pages/Spinner.vue'
import PageToggle from './pages/Toggle.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/label', component: PageLabel },
  { path: '/spinner', component: PageSpinner },
  { path: '/toggle', component: PageToggle },
]

const router = new VueRouter({
  routes,
})

const app = new Vue({
  router,
}).$mount('#app')

// console.log(fabric)

// var {
//   Label,
//   Spinner,
// } = fabric

// var tmp = new Vue({
//   el: '#app',
//   render: h => {
//     var commandBar = h(fabric.CommandBar, {
//       props: {
//         items: [{
//           key: 'new',
//           name: 'New Button',
//           icon: 'Add',
//           href: '#',
//           onClick: () => {},
//         }],
//       },
//     })
