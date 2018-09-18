<template>
  <base-button v-bind="$props"
               class="ms-Button--icon">
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

<style lang="scss">
@import "../../../common/common";

.ms-Button--icon {
  background-color: transparent;

  padding: 0 4px;

  width: 32px;
  height: 32px;

  &:hover {
    background-color: transparent;
    color: $ms-color-themeDarker;
  }

  .ms-Icon {
    font-size: 16px;
    line-height: 16px;
  }
}
</style>
