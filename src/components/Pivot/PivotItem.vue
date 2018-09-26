<template>
  <VActionButton>
    <slot>{{ linkText }}</slot>
  </VActionButton>
</template>

<script>
import VActionButton from '../../index.js'

export default {
  components: { VActionButton },
  props: {
    linkText: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>

</style>
