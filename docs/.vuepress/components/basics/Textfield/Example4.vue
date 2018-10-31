<template>
  <div class="docs-TextFieldExample">
    <VTextField :underlined="true"
                label="Standard:" />

    <VTextField :disabled="true"
                :underlined="true"
                label="Disabled:" />

    <VTextField :read-only="true"
                :underlined="true"
                label="Read Only:" />

    <VTextField :required="true"
                :underlined="true"
                label="Required:" />

    <VTextField :underlined="true"
                error-message="Error message"
                label="With error message:" />
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
