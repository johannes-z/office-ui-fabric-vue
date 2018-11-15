<template>
  <div :style="[ widthStyle, borderStyles ]"
       class="ms-ShimmerGap-root" />
</template>

<script>
import mixin from './mixin.js'

export default {
  mixins: [ mixin ],
  props: {
    height: {
      type: Number,
      default: 16,
    },
    width: {
      type: Number | String,
      default: 10,
    },
  },
}
</script>

<style lang="scss">
@import "../../common/common";

.ms-ShimmerGap-root {
  background-color: $ms-color-white;
  height: 16px;
  box-sizing: content-box;
  border-top-style: solid;
  border-bottom-style: solid;
  border-color: $ms-color-white;
}
</style>
