<template>
  <base-button v-bind="$props"
               class="ms-Button--action ms-Button-command">
    <VIcon :icon-name="iconName" />
  </base-button>
</template>

<script>
import BaseButton from '../BaseButton.vue'
import { VIcon } from '../../Icon'

export default {
  components: { BaseButton, VIcon },
  extends: BaseButton,
  props: {
    iconName: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../../common/common";

.ms-Button {
  background-color: transparent;

  padding: 0 4px;

  width: 32px;
  height: 32px;
}
</style>
