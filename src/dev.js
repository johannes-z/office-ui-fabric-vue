import Vue from 'vue'
import VueRouter from 'vue-router'

import Fabric from './'

Vue.use(Fabric)
Vue.use(VueRouter)

const routes = [
  {
    name: 'Basic Inputs',
    children: [
      { name: 'Button', path: '/Button', component: () => import(`../docs/.vuepress/components/basics/Button/Example1.vue`) },
      { name: 'Checkbox', path: '/Checkbox', component: () => import(`../docs/.vuepress/components/basics/Checkbox/Example1.vue`) },
      { name: 'Choicegroup', path: '/Choicegroup', component: () => import(`../docs/.vuepress/components/basics/Choicegroup/Example1.vue`) },
      { name: 'Label', path: '/Label', component: () => import(`../docs/.vuepress/components/basics/Label/Example1.vue`) },
      { name: 'Link', path: '/Link', component: () => import(`../docs/.vuepress/components/basics/Link/Example1.vue`) },
      { name: 'Rating', path: '/Rating', component: () => import(`../docs/.vuepress/components/basics/Rating/Example1.vue`) },
      { name: 'Slider', path: '/Slider', component: () => import(`../docs/.vuepress/components/basics/Slider/Example1.vue`) },
      { name: 'Spinbutton', path: '/Spinbutton', component: () => import(`../docs/.vuepress/components/basics/Spinbutton/Example1.vue`) },
      { name: 'Tag', path: '/Tag', component: () => import(`../docs/.vuepress/components/basics/Tag/Example1.vue`) },
      { name: 'Textfield', path: '/Textfield', component: () => import(`../docs/.vuepress/components/basics/Textfield/Example1.vue`) },
      { name: 'Toggle', path: '/Toggle', component: () => import(`../docs/.vuepress/components/basics/Toggle/Example1.vue`) },
    ],
  },
  {
    name: 'Navigation',
    children: [
      { name: 'Searchbox', path: '/Searchbox', component: () => import(`../docs/.vuepress/components/navigation/Searchbox/Example1.vue`) },
    ],
  },
  {
    name: 'Content',
    children: [
      { name: 'ActivityItem', path: '/ActivityItem', component: () => import(`../docs/.vuepress/components/content/ActivityItem/Example2.vue`) },
    ],
  },
  {
    name: 'Progress & Validation',
    children: [
      { name: 'ProgressIndicator', path: '/ProgressIndicator', component: () => import(`../docs/.vuepress/components/progress/ProgressIndicator/Example1.vue`) },
      { name: 'Shimmer', path: '/Shimmer', component: () => import(`../docs/.vuepress/components/progress/Shimmer/Example1.vue`) },
      { name: 'Spinner', path: '/Spinner', component: () => import(`../docs/.vuepress/components/progress/Spinner/Example1.vue`) },
    ],
  },
  {
    name: 'Surfaces',
    children: [
      { name: 'Layer', path: '/Layer', component: () => import(`../docs/.vuepress/components/surfaces/Layer/Example1.vue`) },
      { name: 'Modal', path: '/Modal', component: () => import(`../docs/.vuepress/components/surfaces/Modal/Example1.vue`) },
      { name: 'Panel', path: '/Panel', component: () => import(`../docs/.vuepress/components/surfaces/Panel/Example1.vue`) },
    ],
  },
  {
    name: 'Utilities',
    children: [
      { name: 'ResizeGroup', path: '/ResizeGroup', component: () => import(`../docs/.vuepress/components/utilities/ResizeGroup/Example1.vue`) },
    ],
  },
]

const router = new VueRouter({
  routes: [].concat(...routes.map(category => category.children)),
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
        <div id="navbar" style="width: 200px; position: absolute; left: 0; top: 0;">
          {navItems}
        </div>

        <div style="position: absolute; left: 220px; top: 0; width: calc(100% - 240px); padding-top: 20px;">
          <router-view></router-view>
        </div>
      </div>
    )
  },
}).$mount('#app')
