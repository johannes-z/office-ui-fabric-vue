<template>
  <div>
    <h1 class="ms-font-xxl">Button</h1>

    <h2 class="ms-font-xl">Default Button</h2>
    <Label>Standard</Label>
    <DefaultButton text="Button" />

    <Label>Primary</Label>
    <DefaultButton :primary="true" text="Button" />

    <h2 class="ms-font-xl">Compound Button</h2>
    <Label>Standard</Label>
    <CompoundButton text="Create account"
                    secondary-text="You can create a new account here." />

    <Label>Primary</Label>
    <CompoundButton :primary="true"
                    text="Create account"
                    secondary-text="You can create a new account here." />
  </div>
</template>

<script>
import {
  CompoundButton,
  DefaultButton,
  Label,
} from '../index'
export default {
  components: {
    CompoundButton,
    DefaultButton,
    Label,
  },
}
</script>
