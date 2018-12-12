<template>
  <div class="ms-Shimmer-container">

    <slot v-if="isDataLoaded"
          name="content" />

    <div v-else
         :style="widthStyle"
         class="ms-Shimmer-shimmerWrapper">

      <slot name="groups">
        <VShimmerElementsGroup>
          <slot>
            <VShimmerLine :height="height" />
          </slot>
        </VShimmerElementsGroup>
      </slot>

    </div>

  </div>
</template>

<script>
import VShimmerElementsGroup from './ShimmerElementsGroup.vue'
import VShimmerCircle from './ShimmerCircle.vue'
import VShimmerGap from './ShimmerGap.vue'
import VShimmerLine from './ShimmerLine.vue'

import mixin from './mixin.js'

export default {
  components: {
    VShimmerElementsGroup,
    VShimmerCircle,
    VShimmerGap,
    VShimmerLine,
  },
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
    isDataLoaded: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
$BACKGROUND_OFF_SCREEN_POSITION: 1000%;

@keyframes shimmerAnimation {
  0% {
    background-position: -$BACKGROUND_OFF_SCREEN_POSITION;
  }

  100% {
    background-position: $BACKGROUND_OFF_SCREEN_POSITION;
  }
}

.ms-Shimmer-container {
  font-family: "Segoe UI", "Segoe UI Web (West European)", "Segoe UI",
    -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  font-size: 14px;
  font-weight: 400;
  position: relative;
  height: auto;
}

.ms-Shimmer-shimmerWrapper {
  animation-name: shimmerAnimation;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-direction: normal;
  animation-iteration-count: infinite;
  background: linear-gradient(
      to right,
      rgb(244, 244, 244) 0%,
      rgb(234, 234, 234) 50%,
      rgb(244, 244, 244) 100%
    )
    0px 0px / 90% 100% no-repeat rgb(244, 244, 244) !important;
  transition: opacity 200ms ease 0s;
}
</style>
