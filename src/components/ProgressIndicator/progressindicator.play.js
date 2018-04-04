import { play } from 'vue-play'

import { ProgressIndicator } from './index.js'

play('ProgressIndicator')
  .add('Default', h => h(ProgressIndicator, {
    props: {
      percentComplete: 0,
    },
  }))

play('ProgressIndicator')
  .add('Indeterminate', h => h(ProgressIndicator))

play('ProgressIndicator')
  .add('Labels', h => h(ProgressIndicator, {
    props: {
      label: 'Example title',
      description: 'Example description',
    },
  }))
