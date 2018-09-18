<template>
  <div>
    <h1 class="ms-font-xxl">Checkbox</h1>

    <p>
      <VCheckbox :checked.sync="checkbox1"
                 label="Uncontrolled checkbox" />
    </p>

    <p>
      <VCheckbox :checked.sync="checkbox2"
                 label="Uncontrolled checkbox with defaultChecked true" />
    </p>

    <p>
      <VCheckbox :checked.sync="checkbox3"
                 :disabled="true"
                 label="Disabled uncontrolled checkbox" />
    </p>

    <p>
      <VCheckbox :checked.sync="checkbox4"
                 :disabled="true"
                 label="Disabled uncontrolled checkbox with defaultChecked true" />
    </p>

    <p>
      <VCheckbox :checked.sync="checkbox5"
                 label="Checkbox rendered with boxSide 'end'"
                 box-side="end" />
    </p>
  </div>
</template>

<script>
import { VCheckbox } from '../index'
export default {
  components: { VCheckbox },
  data () {
    return {
      checkbox1: false,
      checkbox2: true,
      checkbox3: false,
      checkbox4: true,
      checkbox5: false,
    }
  },
}
</script>
