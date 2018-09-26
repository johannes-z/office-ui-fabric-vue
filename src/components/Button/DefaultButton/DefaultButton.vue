<template>
  <base-button v-bind="$props"
               class="ms-Button--default">
    <div class="ms-Button-textContainer">
      <div class="ms-Button-label">
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

<style lang="scss">
@import "../../../common/common";

.ms-Button-label {
  font-weight: $ms-font-weight-semibold;
  margin: 0 4px;
  line-height: 100%;
}
</style>

<style lang="scss" scoped>

$DEFAULT_BUTTON_MINWIDTH: 80px;
.ms-Button-label {
  min-width: $DEFAULT_BUTTON_MINWIDTH;
}
</style>
