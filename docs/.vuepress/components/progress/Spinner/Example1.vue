<template>
  <div style="max-width: 300px;">
    <VLabel>Extra Small Spinner</VLabel>
    <VSpinner :size="0" />

    <VLabel>Small Spinner</VLabel>
    <VSpinner :size="1" />

    <VLabel>Medium Spinner</VLabel>
    <VSpinner />

    <VLabel>Large Spinner</VLabel>
    <VSpinner :size="3"/>

    <VLabel>Spinner with Label</VLabel>
    <VSpinner label="I am definitely loading..." />

    <VLabel>Large Spinner with Label</VLabel>
    <VSpinner :size="3" label="Seriously, still loading..." />
  </div>
</template>

<script>
export default {
}

</script>
