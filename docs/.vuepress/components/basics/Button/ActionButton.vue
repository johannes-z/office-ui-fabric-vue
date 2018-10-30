<template>
  <div class="ms-Grid"
       dir="ltr">
    <div class="ms-Grid-row">
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Standard</VLabel>
        <VActionButton icon-name="AddFriend">Create account</VActionButton>
      </div>
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Primary</VLabel>
        <VActionButton :primary="true"
                       icon-name="AddFriend">Create account</VActionButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
