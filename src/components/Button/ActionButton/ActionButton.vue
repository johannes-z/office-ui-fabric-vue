<template>
  <base-button v-bind="$props"
               class="ms-Button--action ms-Button-command">
    <div class="ms-Button-textContainer textContainer">
      <div class="ms-Button-label label">
        <slot>{{ text }}</slot>
      </div>
    </div>
  </base-button>
</template>

<script>
import BaseButton from '../BaseButton.vue'

export default {
  components: { BaseButton },
  extends: BaseButton,
}
</script>

<style lang="scss" scoped>
</style>
