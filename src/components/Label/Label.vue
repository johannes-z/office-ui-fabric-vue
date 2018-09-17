<template>
  <label :disabled="disabled"
         :required="required"
         :class="[ $style.root ]"
         class="ms-Label">
    <slot />
  </label>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" module>
@import "../../common/common.scss";

.root {
  color: $ms-color-neutralPrimary;
  box-sizing: border-box;
  box-shadow: none;
  margin: 0;
  display: block;
  padding: 5px 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
}
</style>

<style lang="scss" scoped>
@import "../../common/common.scss";

.root {
  &[disabled],
  &:disabled {
    color: $ms-color-neutralTertiaryAlt;
  }
  &[required],
  &:required {
    &:after {
      content: " *";
      color: $ms-color-redDark;
      padding-right: 12px;
    }
  }
}
</style>
