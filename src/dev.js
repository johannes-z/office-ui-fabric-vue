import Vue from 'vue'
import * as fabric from './index'

/* eslint no-new: 0 */

console.log(fabric)

new Vue({
  el: '#app',
  render: h => h(fabric.Persona, {
    props: {
      primaryText: 'Test User',
    },
  }),
})
