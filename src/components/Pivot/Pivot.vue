
<script>
export default {
  props: {
    linkTexts: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      selectedIndex: 0,
    }
  },
  methods: {
    renderPivotLinks () {
      const h = this.$createElement

      var links = this.$slots.default.map((item, index) => {
        const { componentOptions } = item
        if (!componentOptions) return

        return h(componentOptions.tag, {
          props: {
            ...componentOptions.propsData,
            index: index,
            selectedIndex: this.selectedIndex,
          },
          nativeOn: {
            click: () => { this.selectedIndex = index },
          },
        })
      })
      return h('ul', {
        attrs: {
          class: 'ms-Pivot',
          role: 'tablist',
        },
      }, links)
    },
    renderPivotItem () {
      const h = this.$createElement
      const selectedTab = this.$slots.default[this.selectedIndex]
      var content = h('div', selectedTab.componentOptions.children)

      return h('div', {
        attrs: {
          role: 'tabpanel',
        },
      }, [ content ])
    },
  },
  render (h) {
    var tablist = this.renderPivotLinks()
    var tabpanel = this.renderPivotItem()

    return h('div', [tablist, tabpanel])
  },
}
</script>

<style lang="scss">
.ms-Pivot {
  box-shadow: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  color: rgb(0, 120, 212);
  white-space: nowrap;
}
</style>
