export default {
  props: {
    verticalAlign: {
      type: String,
      validator: value => ['top', 'center', 'bottom'].indexOf(value) > -1,
    },
  },
  computed: {
    borderStyles () {
      let { height, verticalAlign } = this
      let { rowHeight } = this.$parent

      const dif = rowHeight && height ? rowHeight - height : 0

      let borderStyle

      if (!verticalAlign || verticalAlign === 'center') {
        borderStyle = {
          'border-bottom-width': `${dif ? Math.floor(dif / 2) : 0}px`,
          'border-top-width': `${dif ? Math.ceil(dif / 2) : 0}px`,
        }
      } else if (verticalAlign && verticalAlign === 'top') {
        borderStyle = {
          'border-bottom-width': `${dif || 0}px`,
          'border-top-width': `0px`,
        }
      } else if (verticalAlign && verticalAlign === 'bottom') {
        borderStyle = {
          'border-bottom-width': `0px`,
          'border-top-width': `${dif || 0}px`,
        }
      }

      borderStyle.height = `${height}px`

      return borderStyle
    },
    widthStyle () {
      let { width } = this

      return {
        width: width || '100%',
        minWidth: typeof width === 'number' ? `${width}px` : 'auto',
      }
    },
  },
}
