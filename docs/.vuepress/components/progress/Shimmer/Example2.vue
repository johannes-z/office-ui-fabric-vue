<template>
  <div>
    <div class="shimmerExampleContainer1">
      <VShimmer>
        <div slot="groups"
            style="display: flex;">
          <VShimmerElementsGroup>
            <VShimmerLine :height="40" :width="40" />
            <VShimmerGap :height="40" :width="10" />
          </VShimmerElementsGroup>
          <VShimmerElementsGroup :flex-wrap="true">
            <VShimmerLine :height="10" :width="300" />
            <VShimmerLine :height="10" :width="200" />
            <VShimmerGap :height="20" :width="100" />
          </VShimmerElementsGroup>
        </div>
      </VShimmer>
    </div>

    <div class="shimmerExampleContainer2">
      <VShimmer>
        <div slot="groups"
            style="display: flex;">
          <VShimmerElementsGroup>
            <VShimmerCircle :height="40"/>
            <VShimmerGap :height="40" :width="10" />
          </VShimmerElementsGroup>
          <VShimmerElementsGroup :flex-wrap="true">
            <VShimmerLine :height="10" :width="400" />
            <VShimmerGap :height="20" :width="100" />
            <VShimmerLine :height="10" :width="500" />
          </VShimmerElementsGroup>
        </div>
      </VShimmer>
    </div>

    <div class="shimmerExampleContainer3">
      <VShimmer>
        <div slot="groups"
            style="display: flex;">
          <VShimmerElementsGroup width="90px">
            <VShimmerLine :height="80" :width="80" />
            <VShimmerGap :height="80" :width="10" />
          </VShimmerElementsGroup>

          <div style="display: flex; flex-wrap: wrap; width: 100%">

            <VShimmerElementsGroup :flex-wrap="true">
              <VShimmerCircle :height="40"/>
            <VShimmerGap :height="40" :width="10" />
            </VShimmerElementsGroup>

            <VShimmerElementsGroup :flex-wrap="true"
                                  width="calc(100% - 50px)">
              <VShimmerLine :height="10" width="90%" />
              <VShimmerGap :height="20" width="10%" />
              <VShimmerLine :height="10" width="100%" />
            </VShimmerElementsGroup>

            <VShimmerElementsGroup :flex-wrap="true"
                                  width="100%">
              <VShimmerLine :height="10" width="80%" vertical-align="bottom" />
              <VShimmerGap :height="20" width="20%" />
              <VShimmerLine :height="10" width="40%" vertical-align="bottom" />
              <VShimmerGap :height="20" width="2%" />
              <VShimmerLine :height="10" width="58%" vertical-align="bottom" />
            </VShimmerElementsGroup>

          </div>
        </div>
      </VShimmer>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.shimmerExampleContainer1 .ms-Shimmer-container {
  margin: 10px 0;
  width: 350px;
}
.shimmerExampleContainer2 .ms-Shimmer-container {
  margin: 10px 0;
  width: 550px;
}
.shimmerExampleContainer3 .ms-Shimmer-container {
  margin: 10px 0;
  width: 90%;
}
</style>
