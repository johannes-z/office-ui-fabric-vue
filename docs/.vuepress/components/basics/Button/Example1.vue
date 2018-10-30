<template>
  <div>
    <h2 class="ms-font-xl">Default Button</h2>
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

    <h2 class="ms-font-xl">Compound Button</h2>

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

    <h2 class="ms-font-xl">Command Bar Button</h2>
    <h2 class="ms-font-xl">Split Button</h2>

    <h2 class="ms-font-xl">Icon Button</h2>
    <VIconButton icon-name="Emoji2" />

    <p>
      For a list of Icons, visit the
      <a href="https://developer.microsoft.com/en-us/fabric#/styles/icons">
        Office UI Fabric Icon Documentation
      </a>.
    </p>

    <h2 class="ms-font-xl">Contextual Menu Button</h2>

    <h2 class="ms-font-xl">Action Button</h2>

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

  </div>
</template>

<script>
export default {
}
</script>
