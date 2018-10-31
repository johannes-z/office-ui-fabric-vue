<template>
  <div class="docs-TextFieldExample">
    <VTextField v-model="text1"
                label="Standard" />

    <VTextField label="Disabled"
                disabled />

    <VTextField label="Read Only"
                read-only />

    <VTextField label="Required"
                required />

    <VTextField error-message="Error message"
                label="With error message" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      text1: '',
    }
  },
}

</script>

<style lang="scss">
.docs-TextFieldExample .ms-TextField {
  margin: 0 0 15px 0;
  max-width: 300px;
}
</style>
