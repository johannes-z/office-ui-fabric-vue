<template>
  <div>
    <VLabel>I'm a Label</VLabel>
    <VLabel :disabled="true">I'm a disabled Label</VLabel>
    <VLabel :required="true">I'm a required Label</VLabel>
    <VLabel html-for="anInput">A Label for An Input</VLabel>
    <VTextField id="anInput" />
  </div>
</template>

<script>
export default {
}
</script>
