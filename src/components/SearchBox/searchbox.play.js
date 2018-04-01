import { play } from 'vue-play'

import { SearchBox } from './index.js'

play('SearchBox')
  .add('Default', h => h(SearchBox))
