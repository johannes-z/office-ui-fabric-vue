<template>
  <div style="max-width: 300px;">
    <h1 class="ms-font-xxl">TextField</h1>

    <TextField label="Standard" />

    <TextField :disabled="true"
               label="Disabled" />

    <TextField :read-only="true"
               label="Read Only" />

    <TextField :required="true"
               label="Required" />
  </div>
</template>

<script>
import { Label, TextField } from '../index'
export default {
  components: { Label, TextField },
}

</script>
