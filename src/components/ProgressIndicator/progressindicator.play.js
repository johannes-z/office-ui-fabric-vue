import { play } from 'vue-play'

import { ProgressIndicator } from './index.js'

play('ProgressIndicator')
  .add('plain', h => h(ProgressIndicator, {
    props: {
      primaryText: 'Show Case',
    },
  }))
