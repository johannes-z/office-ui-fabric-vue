<template>
  <div>
    <contextual-menu-item v-for="item in items"
                          :key="item.key"
                          :text="item.text"/>
  </div>
</template>

<script>
import ContextualMenuItem from './ContextualMenuItem.vue'
export default {
  components: { ContextualMenuItem },
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>

</style>
