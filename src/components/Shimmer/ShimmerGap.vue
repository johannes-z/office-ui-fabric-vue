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
.ms-ShimmerGap-root {
  background-color: rgb(255, 255, 255);
  height: 16px;
  box-sizing: content-box;
  border-top-style: solid;
  border-bottom-style: solid;
  border-color: rgb(255, 255, 255);
}
</style>
