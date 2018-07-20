<template>
  <label :disabled="disabled"
         :required="required"
         class="ms-Label root">
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

<style lang="scss" scoped>
@import "../../common/common.scss";

label.root {
  color: $ms-color-neutralPrimary;
  box-sizing: border-box;
  box-shadow: none;
  margin: 0;
  display: block;
  padding: 5px 0;
  word-wrap: break-word;
  overflow-wrap: break-word;

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
