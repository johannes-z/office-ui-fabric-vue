<template>
  <BaseButton v-bind="$props"
              class="ms-Button--action ms-Button-command">
    <VIcon v-if="iconName"
           :icon-name="iconName"
           class="icon" />
    <div class="ms-Button-textContainer textContainer">
      <div class="ms-Button-label label">
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

<style lang="scss" scoped>
@import "../../../common/common";

.ms-Button--action {
  background-color: transparent;
  font-weight: $ms-font-weight-regular;

  .ms-Icon {
    color: $ms-color-themeDarkAlt;
  }

  &:hover {
    background-color: transparent;
    color: $ms-color-themePrimary;

    .ms-Icon {
      color: $ms-color-themePrimary;
    }
  }

  .label {
    font-weight: $ms-font-weight-regular;
  }
}
</style>
