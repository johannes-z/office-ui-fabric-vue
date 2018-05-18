<template>
  <div style="max-width: 300px;">
    <h1 class="ms-font-xxl">Spinner</h1>

    <Label>Extra Small Spinner</Label>
    <Spinner :size="0" />

    <Label>Small Spinner</Label>
    <Spinner :size="1" />

    <Label>Medium Spinner</Label>
    <Spinner />

    <Label>Large Spinner</Label>
    <Spinner :size="3"/>

    <Label>Spinner with Label</Label>
    <Spinner label="I am definitely loading..." />

    <Label>Large Spinner with Label</Label>
    <Spinner :size="3" label="Seriously, still loading..." />
  </div>
</template>

<script>
import { Label, Spinner } from '../index'
export default {
  components: { Label, Spinner },
}

</script>
