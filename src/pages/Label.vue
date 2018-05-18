<template>
  <div>
    <h1 class="ms-font-xxl">Label</h1>
    <Label>I'm a Label</Label>
    <Label :disabled="true">I'm a disabled Label</Label>
    <Label :required="true">I'm a required Label</Label>
  </div>
</template>

<script>
import { Label } from '../index'
export default {
  components: { Label },
}
</script>
