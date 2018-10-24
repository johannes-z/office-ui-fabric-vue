<template>
  <div style="max-width: 300px;">
    <VLabel>Extra Small Spinner</VLabel>
    <Spinner :size="0" />

    <VLabel>Small Spinner</VLabel>
    <Spinner :size="1" />

    <VLabel>Medium Spinner</VLabel>
    <Spinner />

    <VLabel>Large Spinner</VLabel>
    <Spinner :size="3"/>

    <VLabel>Spinner with Label</VLabel>
    <Spinner label="I am definitely loading..." />

    <VLabel>Large Spinner with Label</VLabel>
    <Spinner :size="3" label="Seriously, still loading..." />
  </div>
</template>

<script>
export default {
}

</script>
