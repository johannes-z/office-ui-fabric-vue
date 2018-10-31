<template>
  <div class="docs-TextFieldExample">
    <VTextField label="Standard"
                placeholder="I am a placeholder." />

    <VTextField label="Disabled"
                placeholder="I am disabled."
                disabled />

    <VTextField label="Read Only"
                placeholder="I am required."
                read-only />

    <VTextField label="Required"
                placeholder="I am required."
                required />

    <VTextField error-message="Error message"
                label="With error message"
                placeholder="I have an error message." />
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
