<template>
  <i :class="[`ms-Icon--${iconName}`]"
     class="ms-Icon"
     aria-hidden="true" />
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
</style>
