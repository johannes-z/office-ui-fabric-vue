<template>
  <div>
    <h1 class="ms-font-xxl">CommandBar</h1>
    <command-bar :items="items" :far-items="farItems" />
  </div>
</template>

<script>
import { CommandBar } from '../index'
export default {
  components: { CommandBar },
  data () {
    return {
      items: [
        { icon: 'Add', href: '#', name: 'Neu' },
        { icon: 'Edit', href: '#', name: 'Bearbeiten' }
      ],
      farItems: [
        { icon: 'Info', href: '#' }
      ]
    }
  }
}
</script>
