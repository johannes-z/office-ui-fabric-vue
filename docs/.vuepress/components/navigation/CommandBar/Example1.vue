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
      items: [],
      farItems: [],
    }
  },
  mounted () {
    window.setTimeout(() => {
      this.farItems = [
        { icon: 'Cancel', name: 'Close', onClick: () => console.log('Close') },
        { icon: 'BlockContact', name: 'BlockContact' },
        { icon: 'BIDashboard', name: 'BIDashboard' },
        { icon: 'BacklogBoard', name: 'BacklogBoard' },
      ]
    }, 1000)
    window.setTimeout(() => {
      this.items = [
        { icon: 'Add', name: 'New', disabled: true, className: 'test' },
        { icon: 'Edit', name: 'Edit', disabled: true },
        { icon: 'Edit', title: 'Test' },
        { icon: 'Save' },
        { icon: 'Download', name: 'Load' },
        { icon: 'Refresh', name: 'Reload' },
        { icon: 'ArrowDownRight8', name: 'ArrowDownRight8' },
        { icon: 'ArrowDownRightMirrored8', name: 'ArrowDownRightMirrored8' },
        { icon: 'ATPLogo', name: 'ATPLogo' },
      ]
    }, 2000)
  },
}
</script>

<style>
</style>
