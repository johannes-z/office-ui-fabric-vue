<template>
  <div>
    <h1 class="ms-font-xxl">CommandBar</h1>
    <command-bar :items="items" :far-items="farItems" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { icon: 'Add', name: 'Neu' },
        { icon: 'Edit', name: 'Bearbeiten' },
      ],
      farItems: [
        { icon: 'Cancel', name: 'Schließen', onClick: () => console.log('Close') },
      ],
    }
  },
}
</script>
