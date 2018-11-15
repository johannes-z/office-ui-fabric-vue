<template>
  <div>
    <VToggle v-model="toggle"
             on-text="Toggle to show shimmer"
             off-text="Toggle to load content" />

    <div class="shimmerExampleContainer4">
      <VShimmer :is-data-loaded="toggle">
        <VPersona slot="content"
                  :size="12"
                  v-bind="examplePersona" />

        <div slot="groups"
             style="display: flex;">
          <VShimmerElementsGroup>
            <VShimmerCircle :height="40" />
            <VShimmerGap :height="40"
                         :width="16" />
          </VShimmerElementsGroup>
          <VShimmerElementsGroup :flex-wrap="true"
                                 width="100%">
            <VShimmerLine :height="10"
                          width="100%"
                          vertical-align="bottom" />
            <VShimmerLine :height="8"
                          width="90%" />
            <VShimmerGap :height="20"
                         width="10%" />
          </VShimmerElementsGroup>
        </div>
      </VShimmer>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggle: false,
      examplePersona: {
        imageUrl: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png',
        imageInitials: 'AL',
        text: 'Annie Lindqvist',
        secondaryText: 'Software Engineer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm',
      },
    }
  },
}
</script>

<style lang="scss">
.shimmerExampleContainer4 .ms-Shimmer-container {
  margin: 10px 0;
  width: 300px;
}
</style>
