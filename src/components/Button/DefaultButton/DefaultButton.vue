<template>
  <base-button v-bind="$props"
               class="ms-Button--default">
    <div class="ms-Button-textContainer textContainer">
      <div class="ms-Button-label label">
        {{ text }}
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
@import "../../../common/common";

$DEFAULT_BUTTON_HEIGHT: 32px;
$DEFAULT_BUTTON_MINWIDTH: 80px;

.root {
  min-width: $DEFAULT_BUTTON_MINWIDTH;
  height: $DEFAULT_BUTTON_HEIGHT;
}

.label {
  font-weight: $ms-font-weight-semibold;
  margin: 0 4px;
  line-height: 100%;
}
</style>
