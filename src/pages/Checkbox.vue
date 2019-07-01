<template>
  <div>
    <h1 class="ms-font-xxl">
      Checkbox
    </h1>

    <p>
      <VCheckbox v-model="checkbox1"
                 label="Uncontrolled checkbox" />
    </p>

    <p>
      <VCheckbox v-model="checkbox2"
                 label="Uncontrolled checkbox with defaultChecked true" />
    </p>

    <p>
      <VCheckbox v-model="checkbox3"
                 :disabled="true"
                 label="Disabled uncontrolled checkbox" />
    </p>

    <p>
      <VCheckbox v-model="checkbox4"
                 :disabled="true"
                 label="Disabled uncontrolled checkbox with defaultChecked true" />
    </p>

    <p>
      <VCheckbox v-model="checkbox5"
                 label="Checkbox rendered with boxSide 'end'"
                 box-side="end" />
    </p>
  </div>
</template>

<script>
export default {
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
