<template>
  <div :style="[ borderStyles ]"
       class="ms-ShimmerCircle-root">
    <svg :width="height"
         :height="height"
         viewBox="0 0 10 10"
         class="ms-ShimmerCircle-svg">
      <path d="M0,0 L10,0 L10,10 L0,10 L0,0 Z M0,5 C0,7.76142375 2.23857625,10 5,10 C7.76142375,10 10,7.76142375 10,5 C10,2.23857625 7.76142375,2.22044605e-16 5,0 C2.23857625,-2.22044605e-16 0,2.23857625 0,5 L0,5 Z" />
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
      default: 24,
    },
  },
}
</script>

<style lang="scss">
.ms-ShimmerCircle-root {
  box-sizing: content-box;
  border-top-style: solid;
  border-bottom-style: solid;
  border-color: rgb(255, 255, 255);
}

.ms-ShimmerCircle-svg {
  display: block;
  fill: rgb(255, 255, 255);
}
</style>
