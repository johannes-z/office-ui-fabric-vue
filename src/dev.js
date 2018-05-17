import Vue from 'vue'
import * as fabric from './index'

console.log(fabric)

var tmp = new Vue({
  el: '#app',
  render: h => h(fabric.CommandBar, {
    props: {
      items: [{
        key: 'new',
        name: 'New Button',
        icon: 'Add',
        href: '#',
        onClick: () => {},
      }],
    },
  }),
})

// let a = new Vue({
//   el: '#app',
//   render: h => h(fabric.Persona, {
//     props: {
//       primaryText: 'Test User',
//     },
//   }),
// })

// let b = new Vue({
//   el: '#app',
//   render: h => h(fabric.Icon, {
//     props: {
//       iconName: 'Mail',
//     },
//   }),
// })
