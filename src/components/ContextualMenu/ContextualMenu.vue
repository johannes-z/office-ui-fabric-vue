<template>
  <div>
    <VContextualMenuItem v-for="item in items"
                         :key="item.key"
                         :text="item.text" />
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default () {
        return []
      },
    },
  },
}
</script>

<style>

</style>
