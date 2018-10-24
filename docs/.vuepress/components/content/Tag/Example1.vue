<template>
  <VTagContainer>
    <VTag @close="closeHandler">Label with close</VTag>
    <VTag @close="closeHandler"
          :show-close="false">Label no close</VTag>
  </VTagContainer>
</template>

<script>
export default {
  methods: {
    closeHandler () {
      console.log('close');
    }
  }
}
</script>

<style lang="scss">
</style>
