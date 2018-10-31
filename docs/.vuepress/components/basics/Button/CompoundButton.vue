<template>
  <div class="ms-Grid"
       dir="ltr">
    <div class="ms-Grid-row">
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Standard</VLabel>
        <VCompoundButton text="Create account"
                         secondary-text="You can create a new account here." />
      </div>
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Primary</VLabel>
        <VCompoundButton :primary="true"
                         text="Create account"
                         secondary-text="You can create a new account here." />
      </div>
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Disabled Standard</VLabel>
        <VCompoundButton :disabled="true"
                         text="Create account"
                         secondary-text="You can create a new account here." />
      </div>
      <div class="ms-Grid-col ms-sm6 ms-lg3">
        <VLabel>Disabled Primary</VLabel>
        <VCompoundButton :disabled="true"
                         :primary="true"
                         text="Create account"
                         secondary-text="You can create a new account here." />
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
