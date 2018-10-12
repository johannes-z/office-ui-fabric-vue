<template>
  <div>
    <h2 class="ms-font-xl">Default Toggles</h2>

    <VToggle v-model="toggle1"
             label="Enabled and checked"
             on-text="On"
             off-text="Off" />

    <VToggle v-model="toggle2"
             label="Enabled and unchecked"
             on-text="On"
             off-text="Off" />

    <VToggle v-model="toggle3"
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
export default {
  data () {
    return {
      toggle1: true,
      toggle2: false,
      toggle3: true,
    }
  },
}
</script>
