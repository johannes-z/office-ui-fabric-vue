<template>
  <div>
    <h1 class="ms-font-xxl">Button</h1>

    <h2 class="ms-font-xl">Default Button</h2>
    <VLabel>Standard</VLabel>
    <VDefaultButton text="Button" />

    <VLabel>Primary</VLabel>
    <VDefaultButton :primary="true"
                    text="Button" />

    <VLabel>Disabled Standard</VLabel>
    <VDefaultButton :disabled="true"
                    text="Button" />

    <VLabel>Disabled Primary</VLabel>
    <VDefaultButton :disabled="true"
                    :primary="true"
                    text="Button" />

    <h2 class="ms-font-xl">Compound Button</h2>
    <VLabel>Standard</VLabel>
    <VCompoundButton text="Create account"
                     secondary-text="You can create a new account here." />

    <VLabel>Primary</VLabel>
    <VCompoundButton :primary="true"
                     text="Create account"
                     secondary-text="You can create a new account here." />

    <h2 class="ms-font-xl">Icon Button</h2>
    <VIconButton icon-name="Emoji" />

    <h2 class="ms-font-xl">Action Button</h2>
    <VActionButton icon-name="AddFriend">Create account</VActionButton>
  </div>
</template>

<script>
import {
  VActionButton,
  VCompoundButton,
  VDefaultButton,
  VIconButton,
  VLabel,
} from '../index'

export default {
  components: {
    VActionButton,
    VCompoundButton,
    VDefaultButton,
    VIconButton,
    VLabel,
  },
}
</script>
