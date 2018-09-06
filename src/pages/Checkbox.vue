<template>
  <div>
    <h1 class="ms-font-xxl">Checkbox</h1>

    <checkbox label="Uncontrolled checkbox" />

    <checkbox :checked="true"
              label="Uncontrolled checkbox with defaultChecked true" />

    <checkbox :disabled="true"
              label="Disabled uncontrolled checkbox" />

    <checkbox :checked="true"
              :disabled="true"
              label="Disabled uncontrolled checkbox with defaultChecked true" />

    <checkbox label="Checkbox rendered with boxSide 'end'" box-side="end" />
  </div>
</template>

<script>
import { Checkbox } from '../index'
export default {
  components: { Checkbox }
}
</script>
