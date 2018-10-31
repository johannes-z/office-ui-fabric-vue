<template>
  <div class="ms-Grid"
       dir="ltr">
    <div class="ms-Grid-row">
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Standard</VLabel>
        <VDefaultButton text="Button" />
      </div>
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Primary</VLabel>
        <VDefaultButton :primary="true"
                        text="Button" />
      </div>
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Disabled Standard</VLabel>
        <VDefaultButton :disabled="true"
                        text="Button" />
      </div>
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Disabled Primary</VLabel>
        <VDefaultButton :disabled="true"
                        :primary="true"
                        text="Button" />
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
