<template>
  <div>
    <h1 class="ms-font-xxl">Callout</h1>

    <h2 class="ms-font-xl">Default Callout</h2>
    <VDefaultButton ref="calloutButton"
                    @click.native="showCallout = !showCallout">

      {{ showCallout ? 'Hide callout' : 'Show callout' }}

    </VDefaultButton>
    <VCallout v-if="showCallout"
              :do-not-layer="false"
              :target="$refs.calloutButton.$el" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      showCallout: false,
    }
  },
}
</script>

<style>
</style>
