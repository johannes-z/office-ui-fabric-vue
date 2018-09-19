<template>
  <div>
    <h1 class="ms-font-xxl">Breadcrumb</h1>

    <h2 class="ms-font-xl">Default Breadcrumb</h2>

    <VLabel style="margin-top: 24px;">With no maxDisplayedItems</VLabel>
    <VBreadcrumb :items="items" />

    <VLabel style="margin-top: 24px;">With Custom Divider Icon</VLabel>
    <VBreadcrumb :items="items"
                 :divider-as="getCustomDivider" />

    <VLabel style="margin-top: 24px;">With maxDisplayedItems set to two and overflowIndex set to 1 (second element)</VLabel>
    <VBreadcrumb :items="items"
                 :divider-as="getCustomDivider"
                 :max-displayed-items="2"
                 :overflow-index="1" />
  </div>
</template>

<script>
import { VBreadcrumb, VLabel } from '../index'
export default {
  components: { VBreadcrumb, VLabel },
  data () {
    return {
      items: [
        { text: 'Files', 'key': 'Files' },
        { text: 'This is folder 1', 'key': 'f1' },
        { text: 'This is folder 2', 'key': 'f2' },
        { text: 'This is folder 3', 'key': 'f3' },
        { text: 'This is folder 4', 'key': 'f4' },
        { text: 'This is folder 5', 'key': 'f5', isCurrentItem: true },
      ],
    }
  },
  methods: {
    getCustomDivider (dividerProps) {
      const tooltipText = dividerProps.item ? dividerProps.item.text : ''
      return '/'
    },
  },
}
</script>
