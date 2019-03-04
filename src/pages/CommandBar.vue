<template>
  <div>
    <h1 class="ms-font-xxl">CommandBar</h1>
    <command-bar :items="items"
                 :far-items="farItems" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { icon: 'Add', name: 'New' },
        { icon: 'Test', title: 'Test' },
        { icon: 'Edit', name: 'Edit', disabled: true },
      ],
      farItems: [],
    }
  },
  mounted () {
    window.setTimeout(() => {
      this.farItems = [
        { icon: 'Cancel', name: 'Close', onClick: () => console.log('Close') },
      ]
    }, 1000)
  },
}
</script>
