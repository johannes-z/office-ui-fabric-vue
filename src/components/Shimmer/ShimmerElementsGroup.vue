<template>
  <div :style="style"
       class="ms-ShimmerElementsGroup-root">
    <slot/>
  </div>
</template>

<script>

export default {
  props: {
    flexWrap: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number | String,
      default: 'auto',
    },
  },
  computed: {
    rowHeight () {
      var height = this.$children.reduce((acc, next) => {
        return next.height ? (next.height > acc ? next.height : acc) : acc
      }, 0)
      var height2 = this.$slots.default.reduce((acc, next) => {
        if (!next.componentOptions) return acc
        let height = next.componentOptions.propsData.height
        return height ? (height > acc ? height : acc) : acc
      }, 0)

      return height2 > height ? height2 : height
    },
    style () {
      return {
        'flex-wrap': this.flexWrap ? 'wrap' : 'nowrap',
        width: this.width,
      }
    },
  },
}
</script>

<style lang="scss">
.ms-ShimmerElementsGroup-root {
  display: flex;
  align-items: center;
}
</style>
