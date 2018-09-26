<template>
  <div>
    <default-button text="Click for ContextualMenu">
      <contextual-menu :items="items" />
    </default-button>
  </div>
</template>

<script>
import { ContextualMenu, DefaultButton } from '../index'
export default {
  components: { ContextualMenu, DefaultButton },
  data () {
    return {
      items: [
        {
          key: 'newItem',
          text: 'New',
          onClick: () => console.log('New clicked'),
        },
        {
          key: 'divider_1',
        },
        {
          key: 'rename',
          text: 'Rename',
          onClick: () => console.log('Rename clicked'),
        },
        {
          key: 'edit',
          text: 'Edit',
          onClick: () => console.log('Edit clicked'),
        },
        {
          key: 'properties',
          text: 'Properties',
          onClick: () => console.log('Properties clicked'),
        },
        {
          key: 'linkNoTarget',
          text: 'Link same window',
          href: 'http://bing.com',
        },
        {
          key: 'linkWithTarget',
          text: 'Link new window',
          href: 'http://bing.com',
          target: '_blank',
        },
        {
          key: 'linkWithOnClick',
          name: 'Link click',
          href: 'http://bing.com',
          target: '_blank',
        },
        {
          key: 'disabled',
          text: 'Disabled item',
          disabled: true,
          onClick: () => console.error('Disabled item should not be clickable.'),
        },
      ],
    }
  },
}
</script>
