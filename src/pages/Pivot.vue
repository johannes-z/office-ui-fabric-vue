<template>
  <div>
    <VPivot :link-texts="linkTexts"
            link-size="{PivotLinkSize.large}">
      <VPivotItem link-text="My Files">
        <VLabel>VPivot #1</VLabel>
      </VPivotItem>
      <VPivotItem link-text="Recent">
        <VLabel>VPivot #2</VLabel>
      </VPivotItem>
      <VPivotItem link-text="Shared with me">
        <VLabel>VPivot #3</VLabel>
      </VPivotItem>
    </VPivot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      linkTexts: [
        'My Files',
        'Recent',
        'Shared with me',
      ],
    }
  },

}
</script>

<style>

</style>
