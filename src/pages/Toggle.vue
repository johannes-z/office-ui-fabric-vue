<template>
  <div>

    <h1 class="ms-font-xxl">Toggle</h1>
    <Toggle :checked="true"
            label="Enabled and checked"
            on-text="On"
            off-text="Off" />

    <Toggle label="Enabled and unchecked"
            on-text="On"
            off-text="Off" />

    <Toggle :checked="true"
            :disabled="true"
            label="Disabled and checked"
            on-text="On"
            off-text="Off" />

    <Toggle :disabled="true"
            label="Disabled and unchecked"
            on-text="On"
            off-text="Off" />

  </div>
</template>

<script>
import { Toggle } from '../index'
export default {
  components: { Toggle }
}
</script>
