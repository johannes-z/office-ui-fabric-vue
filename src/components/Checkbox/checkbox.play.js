import { play } from 'vue-play'

import { Checkbox } from './index.js'

play('Checkbox')
  .add('plain', h => h(Checkbox, {
    props: {
      label: 'Test label',
    },
  }))
