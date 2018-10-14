<template>
  <div>
    <VDefaultButton @click.native="isOpen = true">
      Open Panel
    </VDefaultButton>
    <VPanel v-if="isOpen"
            :is-open="isOpen"
            @onDismiss="isOpen = false">
      <template slot="header">
        Panel - Small, right-aligned, fixed, with footer
      </template>
      <template slot="body">
        Body
      </template>
      <template slot="footer">
        <VPrimaryButton @click.native="onClosePanel" style="margin-right: 8px">
          Save
        </VPrimaryButton>
        <VDefaultButton @click.native="onClosePanel">Cancel</VDefaultButton>
      </template>
    </VPanel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
    }
  },
  methods: {
    onClosePanel () {
      this.isOpen = false
    }
  }
}
</script>
