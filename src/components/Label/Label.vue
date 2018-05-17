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
@import '../../common/common.scss';

.root {
  color: $ms-color-neutralPrimary;
  box-sizing: border-box;
  box-shadow: none;
  margin-top: 0px;
  margin-right: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  display: block;
  padding-top: 5px;
  padding-right: 0px;
  padding-bottom: 5px;
  padding-left: 0px;
  word-wrap: break-word;
  overflow-wrap: break-word;

  &[disabled], &:disabled {
    color: $ms-color-neutralTertiaryAlt;
  }
  &[required], &:required {
    &:after {
      content: " *";
      color: $ms-color-redDark;
      padding-right: 12px;
    }
  }
}

</style>
