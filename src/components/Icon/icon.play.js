import { play } from 'vue-play'

import { Icon } from './index.js'

play('Icon')
  .add('Default', h => h(Icon, {
    props: {
      iconName: 'Mail',
    },
  }))
