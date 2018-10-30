<template>
  <div ref="container">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: [Array, Object],
      required: true,
    },
    onReduceData: {
      type: Function,
      required: true,
    },
    onGrowData: {
      type: Function,
      required: true,
    },
  },
  data () {
    return {
      containerWidth: undefined,
      measureContainer: true,
      resizeDirection: 'grow',
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  mounted () {
    this.afterComponentRendered()
    window.addEventListener('resize', this.onResize)
  },
  updated () {
    this.afterComponentRendered()
  },
  methods: {
    afterComponentRendered () {
      if (this.measureContainer) {
        this.containerWidth = this.$refs.container.getBoundingClientRect().width
      }
      if (this.resizeDirection === 'grow') {
      } else {
      }
    },
    remeasure () {
      this.measureContainer = true
    },
    onResize (event) {
      this.measureContainer = true
    },
  },
}
</script>

<style lang="scss">
</style>
