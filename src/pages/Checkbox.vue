<template>
  <div>
    <h1 class="ms-font-xxl">Checkbox</h1>

    <VCheckbox label="Uncontrolled checkbox" />

    <VCheckbox :checked="true"
               label="Uncontrolled checkbox with defaultChecked true" />

    <VCheckbox :disabled="true"
               label="Disabled uncontrolled checkbox" />

    <VCheckbox :checked="true"
               :disabled="true"
               label="Disabled uncontrolled checkbox with defaultChecked true" />

    <VCheckbox label="Checkbox rendered with boxSide 'end'"
               box-side="end" />
  </div>
</template>

<script>
import { VCheckbox } from '../index'
export default {
  components: { VCheckbox },
}
</script>
