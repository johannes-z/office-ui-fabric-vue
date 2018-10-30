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
      measuredWidth: Infinity,
      measureContainer: false,
      previousWidth: -Infinity,
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
    afterComponentRendered (dir = -1) {
      this.containerWidth = this.$refs.container.getBoundingClientRect().width

      if (dir === 1) {
        if (this.measuredWidth < this.containerWidth) {
          const nextMeasuredData = this.onGrowData(this.data)
          this.$emit('update:data', nextMeasuredData)

          let ref = this.$refs.hiddenDiv
          this.measuredWidth = ref.getBoundingClientRect().width
        }
      } else {
        if (this.measuredWidth > this.containerWidth) {
          const nextMeasuredData = this.onReduceData(this.data)
          this.$emit('update:data', nextMeasuredData)

          let ref = this.$refs.hiddenDiv
          this.measuredWidth = ref.getBoundingClientRect().width
        }
      }
    },
    remeasure () {
    },
    onResize (event) {
      let dir = this.previousWidth < event.target.innerWidth ? 1 : -1
      this.afterComponentRendered(dir)
      this.previousWidth = event.target.innerWidth
    },
  },
  render (h) {
    return (
      <div>
        <div ref="container">
          { this.$scopedSlots.default({ data: this.data }) }
        </div>
        <div ref="hiddenDiv"
          style="position: fixed; visibility: hidden;">
          { this.$scopedSlots.default({ data: this.data }) }
        </div>
      </div>
    )
  },
}
</script>

<style lang="scss">
</style>
