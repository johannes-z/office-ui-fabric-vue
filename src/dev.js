import Vue from 'vue'
import * as fabric from './index'

console.log(fabric)

var {
  Label,
  Spinner,
} = fabric

var tmp = new Vue({
  el: '#app',
  render: h => {
    var commandBar = h(fabric.CommandBar, {
      props: {
        items: [{
          key: 'new',
          name: 'New Button',
          icon: 'Add',
          href: '#',
          onClick: () => {},
        }],
      },
    })

    return (
      <div>
        {commandBar}

        <hr/>

        <h1 class="ms-font-xxl">Spinner</h1>
        <Label>Extra Small Spinner</Label>
        <Spinner size={0} />

        <Label>Small Spinner</Label>
        <Spinner size={1} />

        <Label>Medium Spinner</Label>
        <Spinner />

        <Label>Large Spinner</Label>
        <Spinner size={3}/>

        <Label>Spinner with Label</Label>
        <Spinner label='I am definitely loading...' />

        <Label>Large Spinner with Label</Label>
        <Spinner size={3} label='Seriously, still loading...' />

        <hr/>

        <h1 class="ms-font-xxl">Labels</h1>
        <Label>I'm a Label</Label>
        <Label disabled={true}>I'm a disabled Label</Label>
        <Label required={true}>I'm a required Label</Label>
      </div>
    )
  },
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
