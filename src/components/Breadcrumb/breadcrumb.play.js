import { play } from 'vue-play'

import { Breadcrumb } from './index.js'

play('Breadcrumb')
  .add('plain', h => h(Breadcrumb, {
    props: {
      items: [
        { link: './a', name: 'a' },
        { link: './a/b', name: 'b' },
      ],
    },
  }))
