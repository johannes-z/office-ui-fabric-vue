<template>
  <div>
    <Pivot link-size="{PivotLinkSize.large}">
      <PivotItem link-text="My Files">
        <Label>Pivot #1</Label>
      </PivotItem>
      <PivotItem link-text="Recent">
        <Label>Pivot #2</Label>
      </PivotItem>
      <PivotItem link-text="Shared with me">
        <Label>Pivot #3</Label>
      </PivotItem>
    </Pivot>
  </div>
</template>

<script>
import { VPivot, VPivotItem } from '../index.js'
export default {
  components: { VPivot, VPivotItem },

}
</script>

<style>

</style>
