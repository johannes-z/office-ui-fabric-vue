<template>
  <i :class="classObj" class="ms-Icon" aria-hidden="true"/>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: '',
    },
  },
  computed: {
    classObj () {
      let obj = {}
      obj[`ms-Icon--${this.iconName}`] = true
      return obj
    },
  },
}
</script>

<style lang="scss">

</style>
