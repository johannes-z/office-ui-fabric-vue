import { play } from 'vue-play'

import { CommandBar } from './index.js'

play('CommandBar')
  .add('dev', h => h(CommandBar, {
  }))
