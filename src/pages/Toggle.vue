<template>
  <div>

    <h1 class="ms-font-xxl">VToggle</h1>
    <VToggle :checked="true"
             label="Enabled and checked"
             on-text="On"
             off-text="Off" />

    <VToggle label="Enabled and unchecked"
             on-text="On"
             off-text="Off" />

    <VToggle :checked="true"
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
}
</script>
