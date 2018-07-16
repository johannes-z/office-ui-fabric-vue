<template>
  <div>
    <h1 class="ms-font-xxl">Button</h1>

    <h2 class="ms-font-xl">Default Button</h2>
    <Label>Standard</Label>
    <DefaultButton text="Button" />

    <Label>Primary</Label>
    <DefaultButton :primary="true" text="Button" />

    <Label>Disabled Standard</Label>
    <DefaultButton :disabled="true" text="Button" />

    <Label>Disabled Primary</Label>
    <DefaultButton :disabled="true" :primary="true" text="Button" />

    <h2 class="ms-font-xl">Compound Button</h2>
    <Label>Standard</Label>
    <CompoundButton text="Create account"
                    secondary-text="You can create a new account here." />

    <Label>Primary</Label>
    <CompoundButton :primary="true"
                    text="Create account"
                    secondary-text="You can create a new account here." />

    <h2 class="ms-font-xl">Icon Button</h2>
    <IconButton icon-name="Emoji"/>

    <h2 class="ms-font-xl">Action Button</h2>
    <ActionButton icon-name="AddFriend">Create account</ActionButton>
  </div>
</template>

<script>
import {
  ActionButton,
  CompoundButton,
  DefaultButton,
  IconButton,
  Label,
} from '../index'
export default {
  components: {
    ActionButton,
    CompoundButton,
    DefaultButton,
    IconButton,
    Label,
  },
}
</script>
