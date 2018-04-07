import { play } from 'vue-play'

import { SearchBox } from './index.js'

play('SearchBox')
  .add('Default', h => h(SearchBox))

play('SearchBox')
  .add('Underlined', h => h(SearchBox, {
    props: {
      underlined: true,
    },
  }))
