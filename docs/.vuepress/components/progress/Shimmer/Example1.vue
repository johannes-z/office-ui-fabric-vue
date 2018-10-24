<template>
  <div class="shimmerExampleContainer">
    Basic Shimmer with no elements provided. It defaults to a line of 16px height.
    <VShimmer />
    <VShimmer width="75%" />
    <VShimmer width="50%" />

    Basic Shimmer with elements provided.
    <VShimmer>
      <VShimmerCircle />
      <VShimmerGap width="2%" />
      <VShimmerLine />
    </VShimmer>
    <VShimmer>
      <VShimmerCircle :height="24" />
      <VShimmerGap width="2%" />
      <VShimmerLine :height="16" width="20%" />
      <VShimmerGap width="5%" />
      <VShimmerLine :height="16" width="20%" />
      <VShimmerGap width="10%" />
      <VShimmerLine :height="16" width="15%" />
      <VShimmerGap width="10%" />
      <VShimmerLine :height="16" />
    </VShimmer>

    <VShimmer width="70%">
      <VShimmerCircle :height="24" />
      <VShimmerGap :height="16"
                   width="2%" />
      <VShimmerLine :height="16"
                    width="20%" />
      <VShimmerGap :height="16"
                   width="5%" />
      <VShimmerLine :height="16"
                    width="20%" />
      <VShimmerGap :height="16"
                   width="10%" />
      <VShimmerLine :height="16"
                    width="15%" />
      <VShimmerGap :height="16"
                   width="10%" />
      <VShimmerLine :height="16" />
    </VShimmer>

    Variations of vertical alignment for Circles and Lines.
    <VShimmer>
      <VShimmerCircle />
      <VShimmerGap width="2%" />
      <VShimmerCircle :height="15"
                      vertical-align="top" />

      <VShimmerGap width="2%" />
      <VShimmerLine width="20%"
                    vertical-align="bottom" />

      <VShimmerGap width="2%" />
      <VShimmerLine :height="5"
                    width="20%"
                    vertical-align="top" />

      <VShimmerGap width="2%" />
      <VShimmerLine :height="16"
                    width="15%" />

      <VShimmerGap width="2%" />
      <VShimmerLine :height="10"
                    vertical-align="bottom" />

    </VShimmer>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="scss">
.shimmerExampleContainer .ms-Shimmer-container {
  margin: 10px 0;
}
</style>

