<template>
  <div style="max-width: 300px;">

    <VSpinButton v-model.number="spinButton1"
                 :min="0"
                 :max="100"
                 label="Basic SpinButton:" />

  </div>
</template>

<script>
export default {
  data: () => ({
    spinButton1: 0,
  }),
}
</script>

