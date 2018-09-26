<template>
  <BaseButton v-bind="$props"
              class="ms-Button--action ms-Button-command">
    <VIcon v-if="iconName"
           :icon-name="iconName" />
    <div class="ms-Button-textContainer">
      <div class="ms-Button-label">
        <slot>{{ text }}</slot>
      </div>
    </div>
  </BaseButton>
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
      default: null,
    },
  },
}
</script>

<style lang="scss">
@import "../../../common/common";

.ms-Button--action {
  background-color: transparent;
  font-weight: $ms-font-weight-regular;
  padding: 0 4px;

  .ms-Icon {
    color: $ms-color-themeDarkAlt;
    font-size: 16px;
    line-height: 16px;
    margin: 0 4px;
  }

  &:not(.ms-Button--primary):hover {
    background-color: transparent;
    color: $ms-color-themePrimary;

    .ms-Icon {
      color: $ms-color-themePrimary;
    }
  }

  .ms-Button-label {
    font-weight: $ms-font-weight-regular;
  }
}
</style>
