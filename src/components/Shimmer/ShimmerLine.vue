<template>
  <div :style="[ widthStyle, borderStyles ]"
       class="ms-ShimmerLine-root">
    <svg width="2"
         height="2"
         class="ms-ShimmerLine-topLeftCorner">
      <path d="M0 2 A 2 2, 0, 0, 1, 2 0 L 0 0 Z" />
    </svg>
    <svg width="2"
         height="2"
         class="ms-ShimmerLine-topRightCorner">
      <path d="M0 0 A 2 2, 0, 0, 1, 2 2 L 2 0 Z" />
    </svg>
    <svg width="2"
         height="2"
         class="ms-ShimmerLine-bottomRightCorner">
      <path d="M2 0 A 2 2, 0, 0, 1, 0 2 L 2 2 Z" />
    </svg>
    <svg width="2"
         height="2"
         class="ms-ShimmerLine-bottomLeftCorner">
      <path d="M2 2 A 2 2, 0, 0, 1, 0 0 L 0 2 Z" />
    </svg>
  </div>
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
      default: '100%',
    },
  },
}
</script>

<style lang="scss">
@import "../../common/common";

.ms-ShimmerLine-root {
  box-sizing: content-box;
  position: relative;
  border-top-style: solid;
  border-bottom-style: solid;
  border-color: $ms-color-white;
  border-width: 0px;
}

.ms-ShimmerLine-topLeftCorner,
.ms-ShimmerLine-topRightCorner,
.ms-ShimmerLine-bottomRightCorner,
.ms-ShimmerLine-bottomLeftCorner {
  position: absolute;
  fill: $ms-color-white;
}

.ms-ShimmerLine-topLeftCorner {
  top: 0px;
  left: 0px;
}
.ms-ShimmerLine-topRightCorner {
  top: 0px;
  right: 0px;
}
.ms-ShimmerLine-bottomRightCorner {
  bottom: 0px;
  right: 0px;
}
.ms-ShimmerLine-bottomLeftCorner {
  bottom: 0px;
  left: 0px;
}

</style>
