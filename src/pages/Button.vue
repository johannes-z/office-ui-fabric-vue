<template>
  <div>
    <h1 class="ms-font-xxl">
      Button
    </h1>

    <h2 class="ms-font-xl">
      Default Button
    </h2>
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

    <h2 class="ms-font-xl">
      Action Button (Link)
    </h2>
    <div class="ms-Grid"
         dir="ltr">
      <div class="ms-Grid-row">
        <div class="ms-Grid-col ms-sm6 ms-lg3">
          <VLabel>Default</VLabel>
          <VActionButton href="https://www.google.at"
                         icon-name="Cloud"
                         text="Google" />
        </div>
        <div class="ms-Grid-col ms-sm6 ms-lg3">
          <VLabel>Primary</VLabel>
          <VActionButton :primary="true"
                         href="https://www.google.at"
                         icon-name="Cloud"
                         text="Google" />
        </div>
        <div class="ms-Grid-col ms-sm6 ms-lg3">
          <VLabel>Disabled Standard</VLabel>
          <VActionButton :disabled="true"
                         href="https://www.google.at"
                         icon-name="Cloud"
                         text="Google" />
        </div>
        <div class="ms-Grid-col ms-sm6 ms-lg3">
          <VLabel>Disabled Primary</VLabel>
          <VActionButton :disabled="true"
                         :primary="true"
                         href="https://www.google.at"
                         icon-name="Cloud"
                         text="Google" />
        </div>
      </div>
    </div>

    <h2 class="ms-font-xl">
      Compound Button
    </h2>

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

    <h2 class="ms-font-xl">
      Command Bar Button
    </h2>
    <h2 class="ms-font-xl">
      Split Button
    </h2>

    <h2 class="ms-font-xl">
      Icon Button
    </h2>
    <VIconButton icon-name="Emoji2" />

    <h2 class="ms-font-xl">
      Contextual Menu Button
    </h2>

    <h2 class="ms-font-xl">
      Action Button
    </h2>
    <VActionButton :primary="true"
                   icon-name="AddFriend">
      Create account
    </VActionButton>

    <VActionButton icon-name="AddFriend">
      Create account
    </VActionButton>
  </div>
</template>

<script>
export default {
}
</script>
