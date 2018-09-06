<template>
  <base-button v-bind="$props"
               class="ms-Button--action ms-Button-command">
    <icon :icon-name="iconName" class="icon" />
  </base-button>
</template>

<script>
import BaseButton from '../BaseButton.vue'
import { Icon } from '../../Icon'

export default {
  components: { BaseButton, Icon },
  extends: BaseButton,
  props: {
    iconName: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../common/common";

.root {
  background-color: transparent;

  padding: 0 4px;

  width: 32px;
  height: 32px;
}

</style>
