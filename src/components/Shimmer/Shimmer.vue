<template>
  <div class="ms-Shimmer-container root">
    <div class="ms-Shimmer-shimmerWrapper shimmerWrapper">
      <div class="ms-ShimmerElementsGroup root">
        <div class="ms-ShimmerLine-root root"
             style="width: 100%; min-width: auto;">
          <svg width="2"
               height="2"
               class="ms-ShimmerLine-topLeftCorner topLeftCorner">
            <path d="M0 2 A 2 2, 0, 0, 1, 2 0 L 0 0 Z" />
          </svg>
          <svg width="2"
               height="2"
               class="ms-ShimmerLine-topRightCorner topRightCorner">
            <path d="M0 0 A 2 2, 0, 0, 1, 2 2 L 2 0 Z" />
          </svg>
          <svg width="2"
               height="2"
               class="ms-ShimmerLine-bottomRightCorner bottomRightCorner">
            <path d="M2 0 A 2 2, 0, 0, 1, 0 2 L 2 2 Z" />
          </svg>
          <svg width="2"
               height="2"
               class="ms-ShimmerLine-bottomLeftCorner bottomLeftCorner">
            <path d="M2 2 A 2 2, 0, 0, 1, 0 0 L 0 2 Z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.ms-Shimmer-container {
  height: auto;
  position: relative;
}

.ms-Shimmer-shimmerWrapper {
}

.ms-ShimmerElementsGroup-root {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
}
</style>
