// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import * as fabric from './fabric'

Vue.config.productionTip = false

console.log(fabric)
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: fabric
// })

new Vue({
  el: '#app',
  render: h => h(fabric.Breadcrumb, {
    props: {
      items: [
        { name: 'Entry #1', link: '/' },
        { name: 'Entry #2', link: '/' },
        { name: 'Entry #3', link: '/' },
        { name: 'Entry #4', link: '/' },
        { name: 'Entry #5', link: '/' },
        { name: 'Entry #6', link: '/' },
        { name: 'Entry #7', link: '/' }
      ]
    }
  })
})
export default fabric
