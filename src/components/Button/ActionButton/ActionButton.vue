<template>
  <base-button v-bind="$props"
               class="ms-Button--action ms-Button-command">
    <icon v-if="iconName" :icon-name="iconName" class="icon" />
    <div class="ms-Button-textContainer textContainer">
      <div class="ms-Button-label label">
        <slot>{{ text }}</slot>
      </div>
    </div>
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
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../common/common";

.root {
  background-color: transparent;
  font-weight: $ms-font-weight-regular;

  .icon {
    color: $ms-color-themeDarkAlt;
  }

  &:hover {
    background-color: transparent;
    color: $ms-color-themePrimary;

    .icon {
      color: $ms-color-themePrimary;
    }
  }

  .label {
    font-weight: $ms-font-weight-regular;
  }
}

</style>
