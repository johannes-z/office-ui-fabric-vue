<template>
  <div>

    <h1 class="ms-font-xxl">Toggle</h1>

    <h2 class="ms-font-xl">Default Toggles</h2>

    <VToggle v-model="toggle1"
             label="Enabled and checked"
             on-text="On"
             off-text="Off" />

    <VToggle label="Enabled and unchecked"
             on-text="On"
             off-text="Off" />

    <VToggle v-model="toggle2"
             :disabled="true"
             label="Disabled and checked"
             on-text="On"
             off-text="Off" />

    <VToggle :disabled="true"
             label="Disabled and unchecked"
             on-text="On"
             off-text="Off" />

  </div>
</template>

<script>
import { VToggle } from '../index'
export default {
  components: { VToggle },
  data () {
    return {
      toggle1: true,
      toggle2: true,
    }
  },
}
</script>
