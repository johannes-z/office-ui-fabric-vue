<script>
export default {
  functional: true,
  props: {
    iconName: {
      type: String,
      default: ''
    }
  },
  render (h, ctx) {
    const data = ctx.data
    const classes = {
      class: [`ms-Icon--${ctx.props.iconName}`]
    }
    return (
      <i class="ms-Icon" {...classes}
        {...data}
        aria-hidden="true" />
    )
  }
}
</script>

<style lang="scss">

</style>
